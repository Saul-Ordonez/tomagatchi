export class PlanetAge {
  constructor(earthAge, LifeExpentancyBirth) {
  this.earthAge = earthAge;
  this.LifeExpentancyBirth = 72;
  }

  calculateMercuryAge() {
    let mercuryAge = parseInt((this.earthAge / 0.24));
    return mercuryAge;
  }

  calculateVenusAge() {
    let venusAge = parseInt((this.earthAge / 0.62));
    return venusAge;
  }
};
