import fetch from 'cross-fetch';

import intentMapping from './bffMapping/bffIntentMapping';
import handleResponse from './bffMapping/handleResponse';
import Config from '../Config'


const config = {
    // all requests go to the BFF, intents provide relative paths from here.
  baseUrl: Config.BFF_BASE_URL,
};

function getQueryFromParams(params = {}) {
  const encode = encodeURIComponent;
  const query = Object.keys(params)
    .map(key => `${encode(key)}=${encode(params[key])}`)
    .join('&');
  return query;
}

const defaultHttpHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default (getAdditionalHeaders = () => ({})) => {


  return {
    read: ({
      intent, params, onSuccess, onFailure,
    }) => {
      const { baseUrl } = config;
      const requestSpec = intentMapping[intent];
      const requestOptions = {
        method: requestSpec.method,
        headers: { ...defaultHttpHeaders, ...getAdditionalHeaders() },
      };

      const intentUrlPath = requestSpec.path;
      const query = getQueryFromParams(params);
      const url = `${baseUrl}${intentUrlPath}?${query}`;

      handleResponse(
        fetch(url, requestOptions),
        onSuccess,
        onFailure,
      );
    },

    write: ({
      intent, params, onSuccess, onFailure,
    }) => {
      const { baseUrl } = config;
      const requestSpec = intentMapping[intent];
      const requestOptions = {
        method: requestSpec.method,
        headers: { ...defaultHttpHeaders, ...getAdditionalHeaders() },
        body: JSON.stringify(params),
      };

      const intentUrlPath = requestSpec.path;
      const url = `${baseUrl}${intentUrlPath}`;

      handleResponse(
        fetch(url, requestOptions),
        onSuccess,
        onFailure,
      );
    },
  };
};
