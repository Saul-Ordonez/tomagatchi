export class PlanetAge {
  constructor(earthAge, LifeExpentancyBirth) {
  this.earthAge = earthAge;
  this.lifeExpentancyBirth = 72;
  this.mercuryAge = 0;
  this.venusAge = 0;
  this.marsAge = 0;
  this.jupiterAge = 0;
  this.mercuryLEB = 0;
  this.venusLEB = 0;
  this.marsLEB = 0;
  this.jupiterLEB = 0;
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
    this.mercuryAge = parseInt((this.earthAge / 0.24));
    this.mercuryLEB = parseInt(this.lifeExpentancyBirth / 0.24);
    let mercuryYearsLeft = this.mercuryLEB - this.mercuryAge;
    return mercuryYearsLeft
  }

  calculateYearsLeftVenus() {
    this.venusAge = parseInt(this.earthAge / 0.62);
    this.venusLEB = parseInt(this.lifeExpentancyBirth / 0.62);
    let venusYearsLeft = this.venusLEB - this.venusAge;
    return venusYearsLeft
  }

  calculateYearsLeftMars() {
    this.marsAge = parseInt(this.earthAge / 1.88);
    this.marsLEB = parseInt(this.lifeExpentancyBirth / 1.88);
    let marsYearsLeft = this.marsLEB - this.marsAge;
    return marsYearsLeft
  }

  calculateYearsLeftJupiter() {
    this.jupiterAge = parseInt(this.earthAge / 11.86);
    this.jupiterLEB = parseInt(this.lifeExpentancyBirth / 11.86);
    let jupiterYearsLeft = this.jupiterLEB - this.jupiterAge;
    return jupiterYearsLeft
  }
  //
  // calculateMercuryOverLEB() {
  //   if (this.earthAge > 72) {
  //     let mercuryAgeOverLEB =
  //   }
  // }
};
