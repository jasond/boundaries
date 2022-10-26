# boundaries-bff

A Backend for Frontend demonstrating separation of integration concerns

This bff provides http integration for the [boundaries-web](../web) frontend in this repository.

Read the [docs](../README.md) in the parent directory for the description

## getting started

the bff is self contained node.js application and requires a few dependencies through npm. A working node environment is assumed, along with yarn.

`$> yarn install`

## running

[package.json](package.json) defines a few convenience scripts for running in different modes.

a fully local mode using file abstraction for data (where the data the bff returns is from static files in the [data](./data) directory) is started thusly:

`$> yarn start`

using a remote [json api service](https://mockaroo.com) where several sample endpoints have been created, you can also run in http abstraction mode with:

`$> yarn start-integration`

## extending

This repo is intended to be a sandbox demonstrator for keeping boundaries within a system to reduce the overall complexity, while making it simple to run and easy to change.

have at it.

