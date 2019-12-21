setup:
	docker-compose -f docker-compose.dev.yml build --pull

build: setup
	docker-compose -f docker-compose.dev.yml run --rm builder npm run build

dev:
	docker-compose -f docker-compose.dev.yml run --rm builder npm run start

local: build
	docker-compose up

up:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d

down:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml down

.PHONY: build dev local up down
