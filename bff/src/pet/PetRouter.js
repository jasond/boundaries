const PetRouter = (petService, router) => {
  router.get('/load_pets_and_species', (request, response, next) => {
    petService.listAllPetsAndSpecies((petsAndSpecies) => {
      response.json(petsAndSpecies);
    },
    next);
  });

  router.put('/allocate_species_for_pet', (request, response, next) => {
    petService.updatePetWithSpecies(
      request.body.pet,
      request.body.species,
      updatedPet => response.json(updatedPet),
      next,
    );
  });

  return router;
};

module.exports = PetRouter;
