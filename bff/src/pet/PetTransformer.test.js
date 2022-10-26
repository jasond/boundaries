const { buildPetsAndSpecies } = require('./PetTransformer');

describe('PetTransformer', () => {
  it('should transform pets and species', () => {

    const expected = JSON.parse(` {"pets": [{"name": "1", "owner": "a", "species": "!"}, {"name": "2", "owner": "b", "species": "%"}, {"name": "3", "owner": "c"}], "species": [{"emoji": "<>", "name": "!"}, {"emoji": "<>", "name": "%"}]}`);
    const pets = [
        {"name": "1", "owner": "a", "species": "!"},
        {"name": "2", "owner": "b", "species": "%"},
        {"name": "3", "owner": "c"}
     ];
    const species = [
          {"name": "!", "emoji": "<>"},
          {"name": "%", "emoji": "<>"},
    ]

    const transformed = buildPetsAndSpecies(pets, species)

    expect(transformed).toEqual(transformed);
  });
});
