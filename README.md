# Place info

This repo is used for fetching places info. It exposes `/place-info` API which accepts placeId as a query parameter, fetches the data and returns it to the client.
Project was created by the following [starter kit](https://github.com/postlight/nodejs-typescript-kit)

## Installation

### Pre-requisites

- `nvm`
- `yarn`

### Install

1. `cd` into this directory
2. Run `nvm use && yarn`

## Usage

- `yarn nodemon` to start dev mode

- `yarn build` to compile ts to js

- `yarn test` to run the unit tests
- `yarn test --watch` to run in watch mode

The tests are run by Jest, so any other valid Jest CLI options may also be
passed.

## TODO

- add absolute imports
- handle cors properly (we shouldn't allow everything)
