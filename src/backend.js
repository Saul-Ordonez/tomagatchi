export let PlanetAge = function(earthAge) {
  this.earthAge = earthAge;
}

PlanetAge.prototype.calculateMercuryAge = function(age) {
  let mercuryAge = (this.age / 0.24).toFixed(2);
  return mercuryAge;
}
