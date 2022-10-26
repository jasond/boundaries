const { GET_PETS, GET_SPECIES, UPDATE_PET_SPECIES } = require('../../pet/PetIntents');

/*
    when using the http integrations, this intent mapping calls mockaroo which has
    a couple of custom schemas set up to return some generated data.

    the 'update' method loops back into a quick and dirty 'put' that is fired up locally,
    and is defined in app.js
*/
const petsUrl = 'https://api.mockaroo.com/api/276d3950?count=100&key=5bec28e0';
const speciesUrl = 'https://api.mockaroo.com/api/b7dbb500?count=50&key=5bec28e0'
const always_ok = 'http://localhost:5000/always_ok'

module.exports = {
  [GET_PETS]: { method: 'GET', url: () => `${petsUrl}` },
  [GET_SPECIES]: { method: 'GET', url: () => `${speciesUrl}` },
  [UPDATE_PET_SPECIES]: { method: 'PUT', url: () => `${always_ok}` },
};
