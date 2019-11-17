import { PlanetAge } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('form#formInput').submit(function(event) {
    event.preventDefault();

    const ageInput = $('#ageInput').val();
    let planetAge = new PlanetAge(ageInput);

    $('#planetAge').show();
    $('#mercuryAge').text(planetAge.mercuryAge);
    $('#venusAge').text(planetAge.venusAge);
    $('#marsAge').text(planetAge.marsAge);
    $('#jupiterAge').text(planetAge.jupiterAge);

    if (planetAge.earthAge <= 72) {
      $('#planetYearsLeft').show();
    }
    $('#yearsLeftMercury').text(planetAge.mercuryYearsLeft);
    $('#yearsLeftVenus').text(planetAge.venusYearsLeft);
    $('#yearsLeftMars').text(planetAge.marsYearsLeft);
    $('#yearsLeftJupiter').text(planetAge.jupiterYearsLeft);

    if (planetAge.earthAge > 72) {
      $('#planetYearsOver').show();
    }
    $('#yearsOverMercury').text(planetAge.mercuryYearsOver);
    $('#yearsOverVenus').text(planetAge.venusYearsOver);
    $('#yearsOverMars').text(planetAge.marsYearsOver);
    $('#yearsOverJupiter').text(planetAge.jupiterYearsOver);
  });
});
