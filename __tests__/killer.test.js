import { Tomagatchi } from './../src/backend.js'

describe('Greg', () => {
  jest.useFakeTimers();
  let tomagatchi;

  beforeEach(function() {
    tomagatchi = new Tomagatchi('Greg');
    tomagatchi.setHunger();
    tomagatchi.setEnergy();
    tomagatchi.setMood();
    });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a hunger level of 10 when created', () => {
    expect(tomagatchi.name).toEqual('Greg');
    expect(tomagatchi.hunger).toEqual(10);
    expect(tomagatchi.energy).toEqual(10);
    expect(tomagatchi.mood).toEqual(0);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tomagatchi.hunger).toEqual(7);
  });

  test('should have a energy level of 8 after 4001 milliseconds', () => {
    jest.advanceTimersByTime(4001);
    expect(tomagatchi.energy).toEqual(8);
  });

  test('should have a mood level of 7 after 5001 milliseconds', () => {
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.setMood();
    jest.advanceTimersByTime(15001);
    expect(tomagatchi.mood).toEqual(1);
  });

  test('should reset hunger level to 10 when fed',() => {
    jest.advanceTimersByTime(9001);
    tomagatchi.feed();
    expect(tomagatchi.hunger).toEqual(10);
  });

  test('should reset sleep to level 10 when slept',() => {
    jest.advanceTimersByTime(8001);
    tomagatchi.sleep();
    expect(tomagatchi.energy).toEqual(10);
  });

  test('should increment mood by one', () => {
    tomagatchi.play();
    expect(tomagatchi.mood).toEqual(1);
  });

  test('should result in a game win if mood is at 10', () => {
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.play();
    tomagatchi.gameOver();
    expect(tomagatchi.mood).toEqual(10);
  });

  test('should result in a game loss if hunger is at zero', ()=> {
    jest.advanceTimersByTime(10001);
    expect(tomagatchi.hunger).toEqual(0);
  });

});
