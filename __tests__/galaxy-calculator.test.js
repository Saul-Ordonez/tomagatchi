import { PlanetAge } from './../src/backend.js'

describe('Earth Age', () => {

    test('should record the age inputted from user', () => {
      let planetAge = new PlanetAge(28);
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

describe('Planet Years Left', () => {

    test('should return users remaining years left for specified planet', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftMercury()).toEqual(184);
      expect(planetYearsLeft.calculateYearsLeftVenus()).toEqual(71);
      expect(planetYearsLeft.calculateYearsLeftMars()).toEqual(24);
      expect(planetYearsLeft.calculateYearsLeftJupiter()).toEqual(4);
    });

});

describe('Planet Years Over LEB', () => {

    test('should return users years over the LEB for specified planet', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverMercury()).toEqual(54);
      expect(planetYearsOver.calculateYearsOverVenus()).toEqual(21);
      expect(planetYearsOver.calculateYearsOverMars()).toEqual(7);
      expect(planetYearsOver.calculateYearsOverJupiter()).toEqual(1);
    });

});
