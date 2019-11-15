import { PlanetAge } from './../src/backend.js'

describe('PlanetAge', () => {

    test('should record the age inputted from user', () => {
      var planetAge= new PlanetAge(28);
      expect(planetAge.age).toEqual(28);
    });
});
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(24);
//
//     });
//
// });
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
