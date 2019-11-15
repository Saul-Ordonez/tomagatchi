export class PlanetAge {
  constructor(earthAge, LifeExpentancyBirth) {
  this.earthAge = earthAge;
  this.LifeExpentancyBirth = 72;
  this.mercuryAge = 0;
  this.venusAge = 0;
  this.marsAge = 0;
  this.jupiterAge = 0;
  }

  calculateMercuryAge() {
    this.mercuryAge = parseInt((this.earthAge / 0.24));
    return this.mercuryAge;
  }

  calculateVenusAge() {
    this.venusAge = parseInt((this.earthAge / 0.62));
    return this.venusAge;
  }

  calculateMarsAge() {
    this.marsAge = parseInt((this.earthAge / 1.88));
    return this.marsAge;
  }

  calculateJupiterAge() {
    this.jupiterAge = parseInt((this.earthAge / 11.86));
    return this.jupiterAge;
  }

  calculateYearsLeftMercury() {
    let mercuryAge = parseInt(this.earthAge / 0.24);
    let mercuryLEB = parseInt(this.LifeExpentancyBirth / 0.24);
    let mercuryYearsLeft = mercuryLEB - mercuryAge;
    return mercuryYearsLeft
  }

  calculateYearsLeftVenus() {
    let venusAge = parseInt(this.earthAge / 0.62);
    let venusLEB = parseInt(this.LifeExpentancyBirth / 0.62);
    let venusYearsLeft = venusLEB - venusAge;
    return venusYearsLeft
  }
};
