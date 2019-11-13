import { MyObject } from './../src/dice-game.js'

describe('MyObject', () => {

    test('should record three numbers from the user', () => {
      var myObject= new MyObject(4,6,9);
      expect(myObject.number1).toEqual(4);
      expect(myObject.number2).toEqual(6);
      expect(myObject.number3).toEqual(9);


    });

});
