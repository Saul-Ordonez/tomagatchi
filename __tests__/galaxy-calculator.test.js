import { PlanetAge } from './../src/backend.js'

describe('Earth Age', () => {

    test('should record the age inputted from user', () => {
      let planetAge= new PlanetAge(28);
      expect(planetAge.earthAge).toEqual(28);
    });
});

describe('Planet Age', () => {

    test('should return users age in specified planet years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateMercuryAge()).toEqual(116);
      expect(planetAge.calculateVenusAge()).toEqual(45);
      expect(planetAge.calculateMarsAge()).toEqual(14);
      expect(planetAge.calculateJupiterAge()).toEqual(2);
    });
});

describe('Mercury Years Left', () => {

    test('should return users remaining years left in mercury years', () => {
      let mercuryYearsLeft = new PlanetAge(28);
      expect(mercuryYearsLeft.calculateYearsLeftMercury()).toEqual(184);
    });
});

describe('Venus Years Left', () => {

    test('should return users remaining years left in venus years', () => {
      let venusYearsLeft = new PlanetAge(28);
      expect(venusYearsLeft.calculateYearsLeftVenus()).toEqual(71);
    });
});

describe('Mars Years Left', () => {

    test('should return users remaining years left in mars years', () => {
      let marsYearsLeft = new PlanetAge(28);
      expect(marsYearsLeft.calculateYearsLeftMars()).toEqual(24);
    });
});

describe('Jupiter Years Left', () => {

    test('should return users remaining years left in jupiter years', () => {
      let jupiterYearsLeft = new PlanetAge(28);
      expect(jupiterYearsLeft.calculateYearsLeftJupiter()).toEqual(4);
    });
});
