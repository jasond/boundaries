import * as PetIntents from '../../pet/PetIntents';

export default {
  [PetIntents.LOAD_PETS_AND_SPECIES]: {
    method: 'GET',
    path: '/1/pets/load_pets_and_species',
  },
  [PetIntents.ALLOCATE_SPECIES_FOR_PET]: {
    method: 'PUT',
    path: '/1/pets/allocate_species_for_pet',
  },
};
