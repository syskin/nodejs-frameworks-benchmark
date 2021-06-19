# NodeJS Frameworks benchmark with autocannon

This project allow you to benchmark requests performance of NodeJS Frameworks.

## How to use it

### Setup

Run `yarn install` or `npm install` to install dependencies

### Benchmark

Run `yarn bench:<nodejs-framework>` or `npm run bench:<nodejs-framework>` with one of the following framework :

- express

- fastify

### Examples

Run `yarn bench:express`

It will run `express.js` file and send as many as possible `GET` requests to `/`

You should have brief summary after 10s, that show you how many requests has been sent and how much memory used : `27k requests in 10.05s, 4.91 MB read`
