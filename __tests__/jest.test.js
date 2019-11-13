
//Example testing for template//

import { MyObject, MyObject2 } from './../src/dice-game.js'

describe('MyObject', () => {

    test('should record three numbers from the user', () => {
      var myObject= new MyObject(4,6,9);
      expect(myObject.number1).toEqual(4);
      expect(myObject.number2).toEqual(6);
      expect(myObject.number3).toEqual(9);


    });

});

describe('Numbers Multiply', () => {

    test('should return the product of two numbers', () => {
      var myObject= new MyObject(4,6,9);
      expect(myObject.multiplyNumbers()).toEqual(24);

    });

});

describe('Numbers Multiply', () => {

    test('should return the product of two numbers', () => {
      var myObject= new MyObject2(4,6,9);
      expect(myObject.multiplyNumbers()).toEqual(10);

    });

});


//Example testing for template//
