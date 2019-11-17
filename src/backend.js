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
    this.mercuryAge = parseFloat((this.earthAge / 0.24).toFixed(2));
    return this.mercuryAge;
  }

  calculateVenusAge() {
    this.venusAge = parseFloat((this.earthAge / 0.62).toFixed(2));
    return this.venusAge;
  }

  calculateMarsAge() {
    this.marsAge = parseFloat((this.earthAge / 1.88).toFixed(2));
    return this.marsAge;
  }

  calculateJupiterAge() {
    this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2));
    return this.jupiterAge;
  }

  calculateYearsLeftMercury() {
    if (this.earthAge <= 72) {
      this.mercuryAge = parseFloat(this.earthAge / 0.24);
      let mercuryLEB = parseFloat(this.lifeExpectancyBirth / 0.24);
      this.mercuryYearsLeft = parseFloat((mercuryLEB - this.mercuryAge).toFixed(2));
      return this.mercuryYearsLeft;
    }
  }

  calculateYearsLeftVenus() {
    if (this.earthAge <= 72) {
      this.venusAge = parseFloat(this.earthAge / 0.62);
      let venusLEB = parseFloat(this.lifeExpectancyBirth / 0.62);
      this.venusYearsLeft = parseFloat((venusLEB - this.venusAge).toFixed(2));
      return this.venusYearsLeft;
    }
  }

  calculateYearsLeftMars() {
    if (this.earthAge <= 72) {
      this.marsAge = parseFloat(this.earthAge / 1.88);
      let marsLEB = parseFloat(this.lifeExpectancyBirth / 1.88);
      this.marsYearsLeft = parseFloat((marsLEB - this.marsAge).toFixed(2));
      return this.marsYearsLeft;
    }
  }

  calculateYearsLeftJupiter() {
    if (this.earthAge <= 72) {
      this.jupiterAge = parseFloat(this.earthAge / 11.86);
      let jupiterLEB = parseFloat(this.lifeExpectancyBirth / 11.86);
      this.jupiterYearsLeft = parseFloat((jupiterLEB - this.jupiterAge).toFixed(2));
      return this.jupiterYearsLeft;
    }
  }

  calculateYearsOverMercury() {
    if (this.earthAge > 72) {
      this.mercuryAge = parseFloat(this.earthAge / 0.24);
      let mercuryLEB = parseFloat(this.lifeExpectancyBirth / 0.24);
      this.mercuryYearsOver = parseFloat((this.mercuryAge - mercuryLEB).toFixed(2));
      return this.mercuryYearsOver;
    }
  }

  calculateYearsOverVenus() {
    if (this.earthAge > 72) {
      this.venusAge = parseFloat(this.earthAge / 0.62);
      let venusLEB = parseFloat(this.lifeExpectancyBirth / 0.62);
      this.venusYearsOver = parseFloat((this.venusAge - venusLEB).toFixed(2));
      return this.venusYearsOver;
    }
  }

  calculateYearsOverMars() {
    if (this.earthAge > 72) {
      this.marsAge = parseFloat(this.earthAge / 1.88);
      let marsLEB = parseFloat(this.lifeExpectancyBirth / 1.88);
      this.marsYearsOver = parseFloat((this.marsAge - marsLEB).toFixed(2));
      return this.marsYearsOver;
    }
  }

  calculateYearsOverJupiter() {
    if (this.earthAge > 72) {
      this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2));
      let jupiterLEB = parseFloat((this.lifeExpectancyBirth / 11.86).toFixed(2));
      this.jupiterYearsOver = parseFloat((this.jupiterAge - jupiterLEB).toFixed(2));
      return this.jupiterYearsOver;
    }
  }
}
