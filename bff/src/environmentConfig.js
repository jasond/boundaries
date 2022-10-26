const fs = require('fs');

const { NODE_ENV } = process.env;
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.',
  );
}

const dotenvFiles = [
  `../.env.${NODE_ENV}.local`,
  `../.env.${NODE_ENV}`,
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({ // eslint-disable-line
      path: dotenvFile,
    });
  }
});


// This code is a cut down version of Create react app's environment variable loader using dotenv.
// If looking to expand this feature to further mimic CRA, reference CRA's implementation here:
// https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/env.js
