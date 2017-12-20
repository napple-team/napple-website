build:
	npm run build

dev:
	npm run start

local:
	docker-compose up

run:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d

down:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml down

.PHONY: build dev local run
