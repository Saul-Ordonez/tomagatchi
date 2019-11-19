export class Tomagatchi {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.energy = 10;
    this.mood = 0;

    this.setHunger();
    this.setEnergy();
    this.setMood();
    this.gameOver();
  }

  setHunger() {
      setInterval(() => {
        if (this.hunger > 0) {
        this.hunger-- ;
      }
    }, 1000);

  }

  setEnergy() {
      setInterval(() => {
        if(this.energy > 0) {
        this.energy--;
      }
    }, 2000);
  }

  setMood() {

      setInterval(() => {
        if(this.mood > 0) {
          this.mood--;
        }
      }, 5000);
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
    setInterval(() => {
      if (this.mood === 10) {
        $('.gameOver').show();
      }
      if (this.hunger < 1) {
        $('.gameOver').show();
      }
    }, 500);
  }

}
