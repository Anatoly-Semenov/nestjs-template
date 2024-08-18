-include .env
export $(shell sed 's/=.*//' .env)

export COMPOSE_PROJECT_NAME=nestjs-template

-include ./env.d/mk.d/build.mk
-include ./env.d/mk.d/console.mk
-include ./env.d/mk.d/env.mk
-include ./env.d/mk.d/logs.mk

default: up

%:
	@:
