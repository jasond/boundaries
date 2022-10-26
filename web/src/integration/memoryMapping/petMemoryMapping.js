import * as PetIntents from '../../pet/PetIntents';
import petsAndSpecies from './data/petsAndSpecies';

const allocateSpeciesForPet = ({ params, onSuccess, onFailure }) => {
  const { pet, species } = params;

  console.log(params)
  if (pet.name === 'Smoke') {
    onFailure();
  } else {
    onSuccess({ ...pet, species });
  }
};

const loadPetsAndSpecies = ({ onSuccess }) => {
  onSuccess(petsAndSpecies);
};

export default {
  [PetIntents.LOAD_PETS_AND_SPECIES]: loadPetsAndSpecies,
  [PetIntents.ALLOCATE_SPECIES_FOR_PET]: allocateSpeciesForPet,
};
