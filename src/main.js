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

    $('#mercuryAge').text(planetAge.mercuryAge);
    $('#venusAge').text(planetAge.venusAge);
    $('#marsAge').text(planetAge.marsAge);
    $('#jupiterAge').text(planetAge.jupiterAge);

    $('#yearsLeftMercury').text(planetAge.mercuryYearsLeft);
    $('#yearsLeftVenus').text(planetAge.venusYearsLeft);
    $('#yearsLeftMars').text(planetAge.marsYearsLeft);
    $('#yearsLeftJupiter').text(planetAge.jupiterYearsLeft);

    $('#yearsOverMercury').text(planetAge.mercuryYearsOver);
    $('#yearsOverVenus').text(planetAge.venusYearsOver);
    $('#yearsOverMars').text(planetAge.marsYearsOver);
    $('#yearsOverJupiter').text(planetAge.jupiterYearsOver);


  });
});
