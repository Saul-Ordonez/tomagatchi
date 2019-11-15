import { PlanetAge } from './../src/backend.js'

describe('PlanetAge', () => {

    test('should record the age inputted from user', () => {
      let planetAge= new PlanetAge(28);
      expect(planetAge.earthAge).toEqual(28);
    });
});

describe('Mercury Age', () => {

    test('should return users age in mercury years', () => {
      let mercuryAge = new PlanetAge(28);
      expect(mercuryAge.calculateMercuryAge()).toEqual(6.72);

    });

});
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject2(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(10);
//
//     });
//
// });


//Example testing for template//
