export class PlanetAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.lifeExpectancyBirth = 72;
    this.mercuryAge = this.calculateMercuryAge();
    this.venusAge = this.calculateVenusAge();
    this.marsAge = this.calculateMarsAge();
    this.jupiterAge = this.calculateJupiterAge();
    this.mercuryLEB = this.calculateYearsLeftMercury();
    this.venusLEB = this.calculateYearsLeftVenus();
    this.marsLEB = this.calculateYearsLeftMars();
    this.jupiterLEB = this.calculateYearsLeftJupiter();
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
    this.mercuryLEB = parseInt(this.lifeExpectancyBirth / 0.24);
    let mercuryYearsLeft = this.mercuryLEB - this.mercuryAge;
    return mercuryYearsLeft;
  }

  calculateYearsLeftVenus() {
    this.venusAge = parseInt(this.earthAge / 0.62);
    this.venusLEB = parseInt(this.lifeExpectancyBirth / 0.62);
    let venusYearsLeft = this.venusLEB - this.venusAge;
    return venusYearsLeft;
  }

  calculateYearsLeftMars() {
    this.marsAge = parseInt(this.earthAge / 1.88);
    this.marsLEB = parseInt(this.lifeExpectancyBirth / 1.88);
    let marsYearsLeft = this.marsLEB - this.marsAge;
    return marsYearsLeft;
  }

  calculateYearsLeftJupiter() {
    this.jupiterAge = parseInt(this.earthAge / 11.86);

    this.jupiterLEB = parseInt(this.lifeExpectancyBirth / 11.86);
    let jupiterYearsLeft = this.jupiterLEB - this.jupiterAge;
    return jupiterYearsLeft;
  }

  calculateMercuryOverLEB() {
    if (this.earthAge > 72) {
      this.mercuryAge = parseInt(this.earthAge / 0.24);
      this.mercuryLEB = parseInt(this.lifeExpectancyBirth / 0.24);
      let mercuryYearsOver = this.mercuryAge - this.mercuryLEB;
      return mercuryYearsOver;
    }
  }

  calculateVenusOverLEB() {
    if (this.earthAge > 72) {
      this.venusAge = parseInt(this.earthAge / 0.62);
      this.venusLEB = parseInt(this.lifeExpectancyBirth / 0.62);
      let venusYearsOver = this.venusAge - this.venusLEB;
      return venusYearsOver;
    }
  }

  calculateMarsOverLEB() {
    if (this.earthAge > 72) {
      this.marsAge = parseInt(this.earthAge / 1.88);
      this.marsLEB = parseInt(this.lifeExpectancyBirth / 1.88);
      let marsYearsOver = this.marsAge - this.marsLEB;
      return marsYearsOver;
    }
  }

  calculateJupiterOverLEB() {
    if (this.earthAge > 72) {
      this.jupiterAge = parseInt(this.earthAge / 11.86);
      this.jupiterLEB = parseInt(this.lifeExpectancyBirth / 11.86);
      let jupiterYearsOver = this.jupiterAge - this.jupiterLEB;
      return jupiterYearsOver;
    }
  }
}
