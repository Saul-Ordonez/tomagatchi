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
      expect(planetAge.calculateMercuryAge()).toEqual(116.67);
      expect(planetAge.calculateVenusAge()).toEqual(45.16);
      expect(planetAge.calculateMarsAge()).toEqual(14.89);
      expect(planetAge.calculateJupiterAge()).toEqual(2.36);
    });

});

describe('Planet Years Left', () => {

    test('should return users remaining years left for specified planet', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftMercury()).toEqual(183.33);
      expect(planetYearsLeft.calculateYearsLeftVenus()).toEqual(70.97);
      expect(planetYearsLeft.calculateYearsLeftMars()).toEqual(23.40);
      expect(planetYearsLeft.calculateYearsLeftJupiter()).toEqual(3.71);
    });

});

describe('Planet Years Over LEB', () => {

    test('should return users years over the LEB for specified planet', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverMercury()).toEqual(54.17);
      expect(planetYearsOver.calculateYearsOverVenus()).toEqual(20.97);
      expect(planetYearsOver.calculateYearsOverMars()).toEqual(6.91);
      expect(planetYearsOver.calculateYearsOverJupiter()).toEqual(1.1);
    });

});
