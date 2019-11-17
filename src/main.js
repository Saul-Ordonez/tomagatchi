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
    $('#mercuryAge').text(planetAge.mercuryAge.toFixed(2));
    $('#venusAge').text(planetAge.venusAge.toFixed(2));
    $('#marsAge').text(planetAge.marsAge.toFixed(2));
    $('#jupiterAge').text(planetAge.jupiterAge.toFixed(2));

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
