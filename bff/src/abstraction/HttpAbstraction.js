const fetch = require('node-fetch');

const intentMapping = require('./httpIntentMapping/httpIntentMapping');

const HttpAbstraction = () => {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const read = ({
    intent, context, params, additionalHeaders,
  }) => {
    const { method, url } = intentMapping[intent];
    return fetch(url({ context, params }), {
      method,
      headers: { ...defaultHeaders, ...additionalHeaders },
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error(`Failed to execute=${intent.toString()} response=${res.statusText} status=${res.status}`);
        }
        return res.json();
      });
  };

  const readMany = async ({
    intents, context, params, onSuccess, onFailure,
  }) => {
//    const { authorizationToken, ...rest } = context;
//    const exchangedToken = await exchangeToken(authorizationToken);
    const additionalHeaders = { XSomething: `hello` };

    Promise.all(intents.map(intent => read({
      intent, context, params, additionalHeaders,
    })))
      .then(onSuccess)
      .catch(onFailure);
  };

  const write = async ({
    intent, context, params, onSuccess, onFailure,
  }) => {
    const { method, url } = intentMapping[intent];

//    const exchangedToken = await exchangeToken(context.authorizationToken);
//    const additionalHeaders = { Authorization: `bearer ${exchangedToken}` };

    fetch(url(context), {
      method,
      headers: { ...defaultHeaders}, //, ...additionalHeaders },
      body: JSON.stringify(params),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error(`Failed to execute=${intent.toString()} response=${res.statusText} status=${res.status}`);
        }
        return res.json();
      })
      .then(onSuccess)
      .catch(onFailure);
  };

  return { readMany, write };
};

module.exports = HttpAbstraction;
