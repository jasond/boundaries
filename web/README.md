# boundaries-web

A React frontend demonstrating separation of integration concerns

This web app provides the front end of [boundaries-bff](../bff) BFF in this repository.

Read the [docs](../README.md) in the parent directory for the description

## getting started

the web app is self contained react application and requires a few dependencies through npm. A working node environment is assumed, along with yarn.

`$> yarn install`

## running

[package.json](package.json) defines a few convenience scripts for running in different modes.

a fully local mode using memory integration for data (where the data the app renders is from static files in the [data](./src/integration/memoryMapping/data) directory) is started thusly:

`$> yarn start`

this will start a simple http service and publish the app on http://localhost:3000 and should pop open a browser window to show it.

integrating through http to get data from the bff ([presuming it is also running](../bff/README.md) ) is similarly:

`$> yarn start-development`

different configuration options can be set in the environment variables, or by editing the contents of `public/config-*.json`

## extending

This repo is intended to be a sandbox demonstrator for keeping boundaries within a system to reduce the overall complexity, while making it simple to run and easy to change.

The initial deposit here is only one module - 'pets', i'm sure it wont take long to hash out a few more..

have at it.

