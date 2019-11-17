export class PlanetAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.lifeExpectancyBirth = 72;
    this.mercuryAge = this.calculateMercuryAge();
    this.venusAge = this.calculateVenusAge();
    this.marsAge = this.calculateMarsAge();
    this.jupiterAge = this.calculateJupiterAge();
    this.mercuryYearsLeft = this.calculateYearsLeftMercury();
    this.venusYearsLeft = this.calculateYearsLeftVenus();
    this.marsYearsLeft = this.calculateYearsLeftMars();
    this.jupiterYearsLeft = this.calculateYearsLeftJupiter();
    this.mercuryYearsOver = this.calculateYearsOverMercury();
    this.venusYearsOver = this.calculateYearsOverVenus();
    this.marsYearsOver = this.calculateYearsOverMars();
    this.jupiterYearsOver = this.calculateYearsOverJupiter();
  }

  calculateMercuryAge() {
    this.mercuryAge = parseInt(this.earthAge / 0.24);
    return this.mercuryAge;
  }

  calculateVenusAge() {
    this.venusAge = parseInt(this.earthAge / 0.62);
    return this.venusAge;
  }

  calculateMarsAge() {
    this.marsAge = parseInt(this.earthAge / 1.88);
    return this.marsAge;
  }

  calculateJupiterAge() {
    this.jupiterAge = parseInt(this.earthAge / 11.86);
    return this.jupiterAge;
  }

  calculateYearsLeftMercury() {
    if (this.earthAge <= 72) {
      this.mercuryAge = parseInt(this.earthAge / 0.24);
      let mercuryLEB = parseInt(this.lifeExpectancyBirth / 0.24);
      this.mercuryYearsLeft = mercuryLEB - this.mercuryAge;
      return this.mercuryYearsLeft;
    }
  }

  calculateYearsLeftVenus() {
    if (this.earthAge <= 72) {
      this.venusAge = parseInt(this.earthAge / 0.62);
      let venusLEB = parseInt(this.lifeExpectancyBirth / 0.62);
      this.venusYearsLeft = venusLEB - this.venusAge;
      return this.venusYearsLeft;
    }
  }

  calculateYearsLeftMars() {
    if (this.earthAge <= 72) {
      this.marsAge = parseInt(this.earthAge / 1.88);
      let marsLEB = parseInt(this.lifeExpectancyBirth / 1.88);
      this.marsYearsLeft = marsLEB - this.marsAge;
      return this.marsYearsLeft;
    }
  }

  calculateYearsLeftJupiter() {
    if (this.earthAge <= 72) {
      this.jupiterAge = parseInt(this.earthAge / 11.86);
      let jupiterLEB = parseInt(this.lifeExpectancyBirth / 11.86);
      this.jupiterYearsLeft = jupiterLEB - this.jupiterAge;
      return this.jupiterYearsLeft;
    }
  }

  calculateYearsOverMercury() {
    if (this.earthAge > 72) {
      this.mercuryAge = parseInt(this.earthAge / 0.24);
      let mercuryLEB = parseInt(this.lifeExpectancyBirth / 0.24);
      this.mercuryYearsOver = this.mercuryAge - mercuryLEB;
      return this.mercuryYearsOver;
    }
  }

  calculateYearsOverVenus() {
    if (this.earthAge > 72) {
      this.venusAge = parseInt(this.earthAge / 0.62);
      let venusLEB = parseInt(this.lifeExpectancyBirth / 0.62);
      this.venusYearsOver = this.venusAge - venusLEB;
      return this.venusYearsOver;
    }
  }

  calculateYearsOverMars() {
    if (this.earthAge > 72) {
      this.marsAge = parseInt(this.earthAge / 1.88);
      let marsLEB = parseInt(this.lifeExpectancyBirth / 1.88);
      this.marsYearsOver = this.marsAge - marsLEB;
      return this.marsYearsOver;
    }
  }

  calculateYearsOverJupiter() {
    if (this.earthAge > 72) {
      this.jupiterAge = parseInt(this.earthAge / 11.86);
      let jupiterLEB = parseInt(this.lifeExpectancyBirth / 11.86);
      this.jupiterYearsOver = this.jupiterAge - jupiterLEB;
      return this.jupiterYearsOver;
    }
  }
}
