HUGO_VERSION ?= 0.74.3
HUGO_PORT ?= 1313

.PHONY: all
all: build

.PHONY: build
build:
	hugo

.PHONY: clean
clean:
	rm -rf public resources

.PHONY: run
run:
	hugo server -DEF --noHTTPCache --i18n-warnings --disableFastRender \
		--bind 0.0.0.0 --port $(HUGO_PORT) --baseUrl / --appendPort=false

# Docker

.PHONY: docker-build
docker-build:
	@docker run --rm -it \
		-u $$(id -u $$USER) \
		-v "$${TMPDIR:-/tmp}":/tmp/ \
		-v "$$PWD":/site/ \
		ntrrg/hugo:$(HUGO_VERSION)

.PHONY: docker-run
docker-run:
	@docker run --rm -it \
		-e PORT=$(HUGO_PORT) \
		-p $(HUGO_PORT):$(HUGO_PORT) \
		-u $$(id -u $$USER) \
		-v "$${TMPDIR:-/tmp}":/tmp/ \
		-v "$$PWD":/site/ \
		ntrrg/hugo:$(HUGO_VERSION) server -DEF --noHTTPCache --i18n-warnings \
			--disableFastRender \
			--bind 0.0.0.0 --port $(HUGO_PORT) --baseUrl / --appendPort=false

.PHONY: docker-shell
docker-shell:
	@docker run --rm -it \
		-u $$(id -u $$USER) \
		-v "$${TMPDIR:-/tmp}":/tmp/ \
		-v "$$PWD":/site/ \
		--entrypoint sh \
		ntrrg/hugo:$(HUGO_VERSION)

