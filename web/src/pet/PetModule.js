import React from 'react';

import { ALLOCATE_SPECIES_FOR_PET, LOAD_PETS_AND_SPECIES } from './PetIntents';
import PetReducer from './PetReducer';
import PetView from './components/PetView';
import Store from '../store/Store';

export default class PetModule {
  constructor(integration, setRootView) {
    this.integration = integration;
    this.store = new Store(PetReducer);
    this.setRootView = setRootView;
  }

  loadPetsAndSpecies = () => {
    const intent = LOAD_PETS_AND_SPECIES;

    const onSuccess = ({ pets, species }) => {
      this.store.publish({
        intent,
        pets,
        species,
      });
    };

    const onFailure = error => console.error(error);

    this.integration.read({
      intent,
      onSuccess,
      onFailure,
    });
  };

  allocateSpeciesForPet = (pet, species) => {
    const intent = ALLOCATE_SPECIES_FOR_PET;

    const onSuccess = (updatedPet) => {
      this.store.publish({
        intent,
        updatedPet,
      });
    };

    const onFailure = () => {
      console.error('Failure to allocate species');
    };

    this.integration.write({
      intent,
      params: { pet, species },
      onSuccess,
      onFailure,
    });
  };

  render = (state) => {
    this.setRootView(<PetView
      pets={state.pets}
      species={state.species}
      onAllocate={this.allocateSpeciesForPet}
    />);
  }

  run = () => {
    this.store.subscribe(this.render);
    this.loadPetsAndSpecies();
  }
}
