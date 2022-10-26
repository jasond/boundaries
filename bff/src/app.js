const cors = require('cors');
const express = require('express');
const logger = require('morgan');


const authenticationType = process.env.AUTHENTICATION_TYPE || 'noAuthenticationMiddleware';
//const authenticationMiddleware = require(`./middleware/${authenticationType}`); // eslint-disable-line
const authenticationMiddleware = require(`./middleware/${authenticationType}`); // eslint-disable-line
const contextExtractionMiddleware = require('./middleware/contextExtractionMiddleware');
const excludePaths = require('./middleware/pathExclusionMiddleware');


// from the environment select which abstraction we're working with
const abstractionType = process.env.ABSTRACTION_TYPE || 'FileAbstraction';
const Abstraction = require(`./abstraction/${abstractionType}`)(); // eslint-disable-line

const createDomain = ({
  module, router, transformer, abstraction,
}, routerService) => router(module(transformer, abstraction), routerService);

/* eslint-disable global-require */

const petConfiguration = {
  module: require('./pet/PetModule'),
  router: require('./pet/PetRouter'),
  transformer: require('./pet/PetTransformer'),
  abstraction: Abstraction,
};


/* eslint-enable global-require */

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const unAuthenticatedPaths = ['/health', '/ready', '/always_ok'];
app.use(excludePaths(unAuthenticatedPaths)(authenticationMiddleware));
app.use(contextExtractionMiddleware);

app.get('/health', (req, res) => res.send('ok'));
app.get('/ready', (req, res) => res.send('ok'));
//
app.put('/always_ok', (req, res) => res.send({}));

const router = express.Router({
  mergeParams: true,
});

app.use('/bff/:customerId/pets', createDomain(petConfiguration, router));


// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send(`error: ${err.message}`);
});

module.exports = app;
