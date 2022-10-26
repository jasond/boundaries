const petsData = require('../../../data/pets/pets.json');
const speciesData = require('../../../data/pets/species.json');
const { GET_PETS, GET_SPECIES, UPDATE_PET_SPECIES } = require('../../pet/PetIntents');

const petMapping = {
  [GET_PETS]: () => petsData,
  [GET_SPECIES]: () => speciesData,
  [UPDATE_PET_SPECIES]: (params) => {
    const { pet, species } = params;
    if (pet.name === 'Smoke') {
      throw Error({ message: `Cannot assign ${pet.name} to species ${species}` });
    }
    return { ...pet, species };
  },
};

module.exports = petMapping;
