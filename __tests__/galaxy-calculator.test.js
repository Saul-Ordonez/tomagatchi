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

describe('Planet Years Left', () => {

    test('should return users remaining years left for specified planet', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftMercury()).toEqual(184);
      expect(planetYearsLeft.calculateYearsLeftVenus()).toEqual(71);
      expect(planetYearsLeft.calculateYearsLeftMars()).toEqual(24);
      expect(planetYearsLeft.calculateYearsLeftJupiter()).toEqual(4);
    });

});

describe('Mercury Years Over', () => {

    test('should return users years over the LEB for Mercury', () => {
      let mercuryYearsOver = new PlanetAge(85);
      expect(mercuryYearsOver.calculateMercuryOverLEB()).toEqual(54);
    });

});

describe('Venus Years Over', () => {

    test('should return users years over the LEB for Venus', () => {
      let venusYearsOver = new PlanetAge(85);
      expect(venusYearsOver.calculateVenusOverLEB()).toEqual(21);
    });

});

describe('Mars Years Over', () => {

    test('should return users years over the LEB for Mars', () => {
      let marsYearsOver = new PlanetAge(85);
      expect(marsYearsOver.calculateMarsOverLEB()).toEqual(7);
    });

});
