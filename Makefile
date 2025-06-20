# get Makefile directory name: http://stackoverflow.com/a/5982798/376773
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# Path
PATH := node_modules/.bin:$(PATH)

NODE ?= $(shell which node)
YARN ?= $(shell which yarn)
PKG ?= $(if $(YARN),$(YARN),$(NODE) $(shell which npm))

default: help

include .make/*.mk

.PHONY: list test
.PHONY: tag build prebuild

_tag:
	git tag ${TAG}
	@echo created ${TAG}

## Run git tag picking the version from package.json
tag:
	make _tag TAG="$$(node -e 'console.log(require("./package").version)')"

## Push tags to the remote repository
posttag:
	git push && git push --tags

## Delete a git tag. make tag/delete TAG=8.0.0
tag/delete:
	git tag -d ${TAG}
	git push --delete origin ${TAG}

## Run npm audit
npm/audit:
	npm audit

## Run npm audit fix (force)
npm/audit-fix:
	npm audit fix --force

## Run update deps for all of them
update-deps:
	ncu -u && npm i && npm test

## prebuild scripts
prebuild:
	npm run prebuild

## build the app
build: prebuild
	npm run build

## build the app in watch mode
watch:
	npm run build-watch
