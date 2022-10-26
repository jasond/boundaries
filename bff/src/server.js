#!/usr/bin/env node
const http = require('http');
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env)
const app = require('./app');

/**
 *  Create HTTP server.
 *  Get port from environment or args
 */

const port = process.env.PORT || process.argv[2] || 5000;
app.set('port', port);

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  console.info(`Listening on ${addr.port}`);
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // specific listen error gets a friendly message
  switch (error.code) {
    case 'EADDRINUSE':
      console.error(`${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
