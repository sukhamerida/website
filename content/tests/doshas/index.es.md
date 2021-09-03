---
title: Test de Doshas
image: /uploads/doshas.png
description: Este test te permite conocer tu constitución Ayurvédica.
sections:
  - name: intro
    label: Bienvenido
    buttons:
      - label: Reiniciar test
        action: reset()
      - label: Empezar
        classes: is-primary
        action: changeTab('body')
  - name: body
    label: Constitución física
    fields:
      - label: Contextura
        options:
          - value: vata
            text: Delgado, huesudo
          - value: pitta
            text: Moderada
          - value: kapha
            text: Grande, robusto, bien desarrollado
      - label: Estatura
        options:
          - value: vata
            text: Muy alto o muy pequeño
          - value: pitta
            text: Mediana
          - value: kapha
            text: Generalmente pequeños, pero pueden ser altos y grandes
      - label: Peso
        options:
          - value: vata
            text: Dificultad para ganar peso
          - value: pitta
            text: Mediano, pueden ganar o perder peso con facilidad
          - value: kapha
            text: Generalmente con sobrepeso. Dificultad para perderlo
      - label: Brillo de la Piel
        options:
          - value: vata
            text: Opaco
          - value: pitta
            text: Rojo, lustroso
          - value: kapha
            text: Blanco, pálido
      - label: Textura de la Piel
        options:
          - value: vata
            text: Seca, áspera, fría, rugosa, venas prominentes
          - value: pitta
            text: Caliente, grasosa, húmeda, pecas, acné
          - value: kapha
            text: Gruesa, fría, bien lubricada
      - label: Temperatura del Cuerpo
        options:
          - value: vata
            text: Manos y pies fríos
          - value: pitta
            text: Caliente
          - value: kapha
            text: Frío o normal
      - label: Cabello
        options:
          - value: vata
            text: Seco, fino, crespo
          - value: pitta
            text: Oleoso, calvicie prematura, canoso
          - value: kapha
            text: Fuerte, ondulado, lustroso
      - label: Frente
        options:
          - value: vata
            text: Estrecha
          - value: pitta
            text: Moderada, surcos
          - value: kapha
            text: Ancha
      - label: Ojos
        options:
          - value: vata
            text: Pequeños, nerviosos
          - value: pitta
            text: Penetrantes, se irritan fácilmente
          - value: kapha
            text: Grandes, atractivos, pestañas grandes
      - label: Dientes
        options:
          - value: vata
            text: Irregulares, pequeños, mal formados
          - value: pitta
            text: Regulares, encías sangran con facilidad
          - value: kapha
            text: Grandes, bien formados
      - label: Lengua
        options:
          - value: vata
            text: Aspera
          - value: pitta
            text: Suave, rosada
          - value: kapha
            text: Gruesa
      - label: Cara
        options:
          - value: vata
            text: Pequeña, arrugada, seca
          - value: pitta
            text: Delicada, rojiza, perfil agudo
          - value: kapha
            text: Grande, agradable, perfil suave
      - label: Tórax
        options:
          - value: vata
            text: Estrecho
          - value: pitta
            text: Desarrollo moderado
          - value: kapha
            text: Ancho, bien desarrollado
      - label: Huesos
        options:
          - value: vata
            text: Delgados, articulaciones crujientes
          - value: pitta
            text: Medianos, articulaciones flojas
          - value: kapha
            text: Gruesos, articulaciones fuertes
      - label: Uñas
        options:
          - value: vata
            text: Quebradizas, ásperas
          - value: pitta
            text: Suaves, rosadas
          - value: kapha
            text: Fuertes, gruesas
      - label: Sueño
        options:
          - value: vata
            text: Ligero, con interrupciones
          - value: pitta
            text: Variable
          - value: kapha
            text: Profundo, excesivo
      - label: Le disgusta
        options:
          - value: vata
            text: El frío, la resequedad
          - value: pitta
            text: Substancias y atmósfera caliente
          - value: kapha
            text: Sustancias frías y aceitosas, atmósfera húmeda
      - label: Apetito
        options:
          - value: vata
            text: Variable, nervioso
          - value: pitta
            text: Grande, irritable si debe saltar la comida
          - value: kapha
            text: Moderado pero constante
      - label: Sed
        options:
          - value: vata
            text: Escasa
          - value: pitta
            text: Generalmente sediento
          - value: kapha
            text: Moderada
      - label: Hábitos Intestinales
        options:
          - value: vata
            text: Heces duras, secas, constipación
          - value: pitta
            text: Heces suaves, sueltas, tendencia a la diarrea
          - value: kapha
            text: Regular, heces normales
      - label: Orina
        options:
          - value: vata
            text: Escasa
          - value: pitta
            text: Abundante, amarilla intensa
          - value: kapha
            text: Moderada, clara
      - label: Sudoración
        options:
          - value: vata
            text: Escasa, sin olor
          - value: pitta
            text: Profusa, olor intenso
          - value: kapha
            text: Moderada
      - label: Memoria
        options:
          - value: vata
            text: Rápida, tendencia a olvidar
          - value: pitta
            text: Aguda, clara
          - value: kapha
            text: Lenta, pero constante
      - label: Comprensión
        options:
          - value: vata
            text: Espontánea
          - value: pitta
            text: Promedio
          - value: kapha
            text: Requiere tiempo para comprender
      - label: Reacción al Estrés
        options:
          - value: vata
            text: Miedo y ansiedad bajo estrés
          - value: pitta
            text: Frustración, irritabilidad, enojo bajo estrés
          - value: kapha
            text: Maneja bien el estrés
      - label: Resistencia a la enfermedad
        options:
          - value: vata
            text: Pobre, sistema inmunológico variable
          - value: pitta
            text: Mediana, tendencia a las infecciones
          - value: kapha
            text: Buena, consistente, sistema inmunológico fuerte
      - label: Enfermedades Frecuentes
        options:
          - value: vata
            text: Alteraciones nerviosas, mentales, dolor neurálgico y articular
          - value: pitta
            text: Enfermedades infecciosas, inflamatorias, trastornos sanguíneos
          - value: kapha
            text: Enfermedades sistémicas, respiratorias, edema, mucosidad, inflamación articular
      - label: Sexualidad
        options:
          - value: vata
            text: Interés sexual variable, fantasía sexual activa
          - value: pitta
            text: Interés e impulso sexual alto
          - value: kapha
            text: Interés e impulso sexual constante
      - label: Estado de Animo
        options:
          - value: vata
            text: Ideas y estado de animo cambiables
          - value: pitta
            text: Intenso al expresar ideas y sentimientos
          - value: kapha
            text: Estable, confiable, lento para cambiar de ideas
      - label: Preferencias Climáticas
        options:
          - value: vata
            text: Climas calientes, sol, humedad
          - value: pitta
            text: Climas fríos bien ventilados
          - value: kapha
            text: Cualquier clima siempre que no sea húmedo
      - label: Actividad
        options:
          - value: vata
            text: Inquieto
          - value: pitta
            text: Moderado
          - value: kapha
            text: Se mueve lentamente
      - label: Temperamento
        options:
          - value: vata
            text: Nervioso, cambiable
          - value: pitta
            text: Motivado, intenso
          - value: kapha
            text: Conservador
      - label: Emociones Positivas
        options:
          - value: vata
            text: Adaptabilidad
          - value: pitta
            text: Valor, coraje
          - value: kapha
            text: Amor
      - label: Emociones Negativas
        options:
          - value: vata
            text: Miedo
          - value: pitta
            text: Cólera
          - value: kapha
            text: Apego
      - label: Fe
        options:
          - value: vata
            text: Variable, errática
          - value: pitta
            text: Fuerte, determinado
          - value: kapha
            text: Sostenida, lenta en cambiar
    buttons:
      - label: Regresar
        action: changeTab('intro')
      - label: Siguiente
        classes: is-primary
        action: changeTab('mind')
  - name: mind
    label: Constitución mental
    fields:
      - label: Drogas, Alcohol, Estimulantes
        options:
          - value: sattva
            text: Nunca
          - value: rajas
            text: Ocasionalmente
          - value: tamas
            text: Frecuentemente
      - label: Impresiones Sensoriales
        options:
          - value: sattva
            text: Calmas, puras
          - value: rajas
            text: Mezcladas
          - value: tamas
            text: Perturbadas
      - label: Necesidad de Sueño
        options:
          - value: sattva
            text: Poca
          - value: rajas
            text: Moderada
          - value: tamas
            text: Alta
      - label: Actividad Sexual
        options:
          - value: sattva
            text: Baja
          - value: rajas
            text: Moderada
          - value: tamas
            text: Alta
      - label: Control de los Sentidos
        options:
          - value: sattva
            text: Bueno
          - value: rajas
            text: Moderado
          - value: tamas
            text: Débil
      - label: Habla
        options:
          - value: sattva
            text: Calma y apacible
          - value: rajas
            text: Agitada
          - value: tamas
            text: Torpe
      - label: Limpieza
        options:
          - value: sattva
            text: Alta
          - value: rajas
            text: Moderada
          - value: tamas
            text: Baja
      - label: Trabajo
        options:
          - value: sattva
            text: Desinteresado
          - value: rajas
            text: Interés propio
          - value: tamas
            text: Perezoso
      - label: Ira
        options:
          - value: sattva
            text: Rara vez
          - value: rajas
            text: Algunas veces
          - value: tamas
            text: Frecuentemente
      - label: Miedo
        options:
          - value: sattva
            text: Rara vez
          - value: rajas
            text: Algunas veces
          - value: tamas
            text: Frecuentemente
      - label: Deseo
        options:
          - value: sattva
            text: Poco
          - value: rajas
            text: Algo
          - value: tamas
            text: Mucho
      - label: Orgullo
        options:
          - value: sattva
            text: Modestia
          - value: rajas
            text: Algo de ego
          - value: tamas
            text: Vanidad
      - label: Depresión
        options:
          - value: sattva
            text: Nunca
          - value: rajas
            text: Algunas veces
          - value: tamas
            text: Frecuentemente
      - label: Amor
        options:
          - value: sattva
            text: Universal
          - value: rajas
            text: Personal
          - value: tamas
            text: Falta de amor
      - label: Conducta Violenta
        options:
          - value: sattva
            text: Nunca
          - value: rajas
            text: Algunas veces
          - value: tamas
            text: Frecuentemente
      - label: Apego al Dinero
        options:
          - value: sattva
            text: Poco
          - value: rajas
            text: Algo
          - value: tamas
            text: Mucho
      - label: Satisfacción
        options:
          - value: sattva
            text: Usualmente
          - value: rajas
            text: Parcialmente
          - value: tamas
            text: Nunca
      - label: Perdón
        options:
          - value: sattva
            text: Perdona fácilmente
          - value: rajas
            text: Con esfuerzo
          - value: tamas
            text: Mantiene el rencor por largo tiempo
      - label: Concentración
        options:
          - value: sattva
            text: Buena
          - value: rajas
            text: Moderada
          - value: tamas
            text: Pobre
      - label: Memoria
        options:
          - value: sattva
            text: Buena
          - value: rajas
            text: Moderada
          - value: tamas
            text: Pobre
      - label: Voluntad
        options:
          - value: sattva
            text: Fuerte
          - value: rajas
            text: Variable
          - value: tamas
            text: Débil
      - label: Apego a la Verdad
        options:
          - value: sattva
            text: Siempre
          - value: rajas
            text: La mayoría de las veces
          - value: tamas
            text: Pocas veces
      - label: Honestidad
        options:
          - value: sattva
            text: Siempre
          - value: rajas
            text: La mayoría de las veces
          - value: tamas
            text: Pocas veces
      - label: Paz Mental
        options:
          - value: sattva
            text: Generalmente
          - value: rajas
            text: Parcialmente
          - value: tamas
            text: Pocas veces
      - label: Creatividad
        options:
          - value: sattva
            text: Alta
          - value: rajas
            text: Moderada
          - value: tamas
            text: Baja
      - label: Estudios Espirituales
        options:
          - value: sattva
            text: Diarios
          - value: rajas
            text: Ocasionalmente
          - value: tamas
            text: Nunca
      - label: Oración, Meditación
        options:
          - value: sattva
            text: Diaria
          - value: rajas
            text: Ocasionalmente
          - value: tamas
            text: Nunca
      - label: Servicio Social
        options:
          - value: sattva
            text: Mucho
          - value: rajas
            text: Algo
          - value: tamas
            text: Ninguno
    buttons:
      - label: Regresar
        action: changeTab('body')
      - label: Ver resultados
        classes: is-primary
        action: changeTab('data')
  - name: data
    label: Resultados
    buttons:
      - label: Regresar
        action: changeTab('mind')
      - label: Reiniciar test
        action: reset()
      - label: Enviar
        classes: is-primary
        action: submit()
layout: doshas
---

En este test conocerás tu constitución física y mental.

Tienes dos maneras de contestarlo:

1\. Según las características generales que has tenido a lo largo de tu vida.

&nbsp;&nbsp;&nbsp;**PRAKRUTI** (naturaleza básica con la que has nacido).

2\. Según tu situación y experiencia actual.

&nbsp;&nbsp;&nbsp;**VIKRUTI** (estado actual de equilibrio o desequilibrio).

Tu dosha principal es la que contiene un mayor porcentaje.

Si los porcentajes son iguales o similares, eres *Tridosha*.

