import { PlanetAge } from './../src/backend.js'

describe('Earth Age', () => {

    test('should record the age inputted from user', () => {
      let planetAge= new PlanetAge(28);
      expect(planetAge.earthAge).toEqual(28);
    });
});

describe('Planet Age', () => {

    test('should return users age in Mercury years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateMercuryAge()).toEqual(116);
      expect(planetAge.calculateVenusAge()).toEqual(45);
      expect(planetAge.calculateMarsAge()).toEqual(14);
      expect(planetAge.calculateJupiterAge()).toEqual(2);
    });
});

// describe('Mercury Years Left', () => {
// 
//     test('should return users age in Venus years', () => {
//       let mercuryYearsLeft = new PlanetAge(28);
//       expect(mercuryYearsLeft.calculateYearsLeftMercury()).toEqual(2);
//     });
// });
