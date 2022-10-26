const { GET_PETS, GET_SPECIES, UPDATE_PET_SPECIES } = require('../pet/PetIntents');

const PetModule = (petTransformer, abstraction) => {

  const listAllPetsAndSpecies = (onSuccess, onFailure) => {
    abstraction.readMany({
      intents: [GET_PETS, GET_SPECIES],
      onSuccess: ([petsData, speciesData]) => {
        const petAndSpecies = petTransformer.buildPetsAndSpecies(
          petsData,
          speciesData,
        );
        onSuccess(petAndSpecies);
      },
      onFailure,
    });
  };

  const updatePetWithSpecies = (pet, species, onSuccess, onFailure) => {
    abstraction.write({
      intent: UPDATE_PET_SPECIES,
      params: { pet, species },
      onSuccess,
      onFailure,
    });
  };

  return { listAllPetsAndSpecies, updatePetWithSpecies };
};

module.exports = PetModule;
