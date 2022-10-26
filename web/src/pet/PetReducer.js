import { ALLOCATE_SPECIES_FOR_PET, LOAD_PETS_AND_SPECIES } from './PetIntents';

export default (state = { pets: [], species: [] }, action) => {
  switch (action.intent) {
    case LOAD_PETS_AND_SPECIES:
      return { ...state, pets: action.pets, species: action.species };

    case ALLOCATE_SPECIES_FOR_PET: {
      const { name, species } = action.updatedPet;
      return {
        ...state,
        pets: state.pets.map(pet => (
          name === pet.name
            ? { ...pet, species }
            : pet
        )),
      };
    }
    default:
      return state;
  }
};
