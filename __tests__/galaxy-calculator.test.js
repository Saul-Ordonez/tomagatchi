import { PlanetAge } from './../src/backend.js'

describe('PlanetAge', () => {

    test('should record the age inputted from user', () => {
      let planetAge= new PlanetAge(28);
      expect(planetAge.earthAge).toEqual(28);
    });
});

describe('Mercury Age', () => {

    test('should return users age in Mercury years', () => {
      let mercuryAge = new PlanetAge(28);
      expect(mercuryAge.calculateMercuryAge()).toEqual(116);
    });
});

describe('Venus Age', () => {

    test('should return users age in Venus years', () => {
      let venusAge = new PlanetAge(28);
      expect(venusAge.calculateVenusAge()).toEqual(45);
    });
});
