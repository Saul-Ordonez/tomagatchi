export class Tomagatchi {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.energy = 10;
    this.mood = 0;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 1000);
  }

  setEnergy() {
    setInterval(() => {
      this.energy--;
    }, 2000);
  }

  setMood() {
    if(this.mood > 0) {
      setInterval(() => {
        this.mood--;
      }, 5000);
    }
  }

  feed() {
    this.hunger = 10;
  }

  sleep() {
    this.energy = 10;
  }

  play() {
    if (this.hunger === 10 && this.energy === 10) {
      this.mood += 1;
    }
  }

  gameOver() {
    if (this.mood === 10) {
      alert('You Won! Play Again?');
    }
    if (this.hunger < 1) {
      alert('Your Tomagatchi is DEAD.');
    }
  }

}
