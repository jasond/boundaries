import { fetch } from 'whatwg-fetch';

// a means of configuring the application running in the browser with an externally loaded set of props
// loads the 'config-${environment}.json file over http(s) from the public directory
// a sort of dotenv but for the browser app
const configURL = `${window.location.origin}/config-${process.env.REACT_APP_ENVIRONMENT || 'local'}.json`;

const Config = {};

const initializeConfig = async () => {
  const isConfigInitalized = Object.keys(Config).length !== 0;
  if (isConfigInitalized) {
    return;
  }

  const res = await fetch(configURL);
  const localConfig = await res.json();

  Object.assign(Config, localConfig);
  Object.freeze(Config);
};

export default Config
export { initializeConfig };
