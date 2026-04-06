.PHONY: setup dev build start health

setup:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

health:
	curl -sS http://localhost:3000/api/health
