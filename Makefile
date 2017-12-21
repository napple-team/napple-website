setup:
	npm install

build: setup
	npm run build

dev:
	npm run start

local: build
	docker-compose up

up:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d

down:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml down

.PHONY: build dev local up down
