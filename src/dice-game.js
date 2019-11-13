// export function test() {
//   console.log('this is the back-end');
// } test();

//Example code for running tests in jest.test.js//

export var MyObject = function(number1,number2,number3){

  this.number1 = number1,
  this.number2= number2,
  this.number3 = number3

}

MyObject.prototype.multiplyNumbers = function() {
  var multiply = this.number1 * this.number2;
  return multiply;
}

export var MyObject2 = function(number1,number2,number3){

  this.number1 = number1,
  this.number2= number2,
  this.number3 = number3

}

MyObject2.prototype.multiplyNumbers = function() {
  var multiply = this.number1 + this.number2;
  return multiply;
}

//Example code for running tests in jest.test.js//
