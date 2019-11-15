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

// describe('Venus Age', () => {
//
//     test('should return users age in Venus years', () => {
//       let venusAge = new PlanetAge(28);
//
//     });
// });
//
// describe('Mars Age', () => {
//
//     test('should return users age in Mars years', () => {
//       let marsAge = new PlanetAge(28);
//
//     });
// });
//
// describe('Jupiter Age', () => {
//
//     test('should return users age in Jupiter years', () => {
//       let jupiterAge = new PlanetAge(28);
//
//     });
// });
