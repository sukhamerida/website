package main

import (
	"bytes"
	"context"
	_ "embed"
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"log"
	"net/mail"
	"net/smtp"
	"os"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/microcosm-cc/bluemonday"
)

var (
	SMTPHost     = os.Getenv("SMTP_HOST")
	SMTPPort     = os.Getenv("SMTP_PORT")
	SMTPEmail    = os.Getenv("SMTP_EMAIL")
	SMTPPassword = os.Getenv("SMTP_PASSWORD")
	SMTPAuth     = smtp.PlainAuth("", SMTPEmail, SMTPPassword, SMTPHost)

	//go:embed email.tmpl
	emailTemplateData string

	emailTemplate = template.Must(template.New("*").Parse(emailTemplateData))

	htmlSanitizer = bluemonday.UGCPolicy()
)

func handler(ctx context.Context, r events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	headers := map[string]string{
		"Content-Type": "application/json; charset=utf-8",
	}

	if r.HTTPMethod != "POST" {
		return &events.APIGatewayProxyResponse{
			StatusCode: 405,
			Headers:    headers,
			Body:       `{"error": "invalid http method"}`,
		}, nil
	}

	u, b, m, errPRB := parseRequestBody(r.Body)
	if errPRB != nil {
		log.Printf("%v", errPRB)

		return &events.APIGatewayProxyResponse{
			StatusCode: 400,
			Headers:    headers,
			Body:       `{"error": "invalid request data"}`,
		}, nil
	}

	buf := bytes.NewBuffer(nil)

	tmplData := map[string]interface{}{
		"User": u,

		"Results": map[string]interface{}{
			"Body": b,
			"Mind": m,
		},
	}

	if err := emailTemplate.Execute(buf, tmplData); err != nil {
		log.Printf("%v", err)

		return &events.APIGatewayProxyResponse{
			StatusCode: 500,
			Headers:    headers,
			Body:       `{"error": "can't build email message"}`,
		}, nil
	}

	if err := sendEmail(u.Email, buf.String()); err != nil {
		log.Printf("%v", err)

		return &events.APIGatewayProxyResponse{
			StatusCode: 500,
			Headers:    headers,
			Body:       `{"error": "can't send email"}`,
		}, nil
	}

	return &events.APIGatewayProxyResponse{StatusCode: 200}, nil
}

func parseRequestBody(data string) (User, Body, Mind, error) {
	var (
		u User
		b Body
		m Mind
	)

	var rpl RequestPayload

	if err := json.Unmarshal([]byte(data), &rpl); err != nil {
		return u, b, m, err
	}

	if err := u.From(rpl.User); err != nil {
		return u, b, m, err
	}

	if err := b.From(rpl.Results.Body); err != nil {
		return u, b, m, err
	}

	if err := m.From(rpl.Results.Mind); err != nil {
		return u, b, m, err
	}

	return u, b, m, nil
}

func sendEmail(email, message string) error {
	from := "noreply@sukhamerida.com"

	return smtp.SendMail(
		SMTPHost+":"+SMTPPort, SMTPAuth, from, []string{email},

		[]byte(`From: Sukha Mérida <`+from+`>
To: `+email+`
Subject: Resultado del test de Doshas (Sukha Mérida)
MIME-version: 1.0;
Content-Type: text/html; charset="UTF-8";

`+message),
	)
}

type Body struct {
	Vata  float32 `json:"vata"`
	Pitta float32 `json:"pitta"`
	Kapha float32 `json:"kapha"`
}

func (b *Body) From(body Body) error {
	if body.Vata < 0 || body.Pitta < 0 || body.Kapha < 0 {
		return errors.New("body stats must be >= 0")
	}

	sum := body.Vata + body.Pitta + body.Kapha
	if sum < 99 || sum > 100 {
		return errors.New("the sum of body stats must be 100")
	}

	b.Vata = body.Vata
	b.Pitta = body.Pitta
	b.Kapha = body.Kapha

	return nil
}

type Mind struct {
	Sattva float32 `json:"sattva"`
	Rajas  float32 `json:"rajas"`
	Tamas  float32 `json:"tamas"`
}

func (m *Mind) From(mind Mind) error {
	if mind.Sattva < 0 || mind.Rajas < 0 || mind.Tamas < 0 {
		return errors.New("mind stats must be >= 0")
	}

	sum := mind.Sattva + mind.Rajas + mind.Tamas
	if sum < 99 || sum > 100 {
		return errors.New("the sum of mind stats must be 100")
	}

	m.Sattva = mind.Sattva
	m.Rajas = mind.Rajas
	m.Tamas = mind.Tamas

	return nil
}

type User struct {
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
}

func (u *User) From(user User) error {
	name := fmt.Sprintf("%30s", htmlSanitizer.Sanitize(user.Name))
	lastname := fmt.Sprintf("%30s", htmlSanitizer.Sanitize(user.Lastname))
	phone := fmt.Sprintf("%15s", htmlSanitizer.Sanitize(user.Phone))

	addr, errPA := mail.ParseAddress(user.Email)
	if errPA != nil {
		return errPA
	}

	email := strings.ToLower(addr.Address)

	u.Name = name
	u.Lastname = lastname
	u.Email = email
	u.Phone = phone

	return nil
}

type RequestPayload struct {
	User User `json:"user"`

	Results struct {
		Body Body
		Mind Mind
	} `json:"results"`
}

func main() {
	lambda.Start(handler)
}
