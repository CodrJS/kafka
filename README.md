# @codrjs/kafka

![npm version](https://img.shields.io/npm/v/@codrjs/kafka)
[![CodeQL](https://github.com/CodrJS/kafka/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/CodrJS/kafka/actions/workflows/codeql.yml)

## Purpose

This package is to help mitigate duplicate code maintenance across all Codr micro-services as well as integrate the CodrJS logger and health check modules into

## Getting started

### Installing the package

Install the package from the npm registry.

```bash
yarn add @codrjs/kafka
```

Please view the [micro-service template](https://github.com/CodrJS/ts-kafka-template) repository, under `src/server/kafka/`, for an example how to use this package!

## Todo

- [ ] implement tests.

## Contributing

```bash
# Clone the repo
git clone git@github.com:CodrJS/kafka.git

# Install yarn if you don't have it already
npm install -g yarn

# Install dependencies, build, and test the code
yarn install
yarn build
yarn test
```
