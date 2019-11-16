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

    $('#yearsLeftMercury').text(planetAge.yearsLeftMercury);
    $('#yearsLeftVenus').text(planetAge.yearsLeftVenus);
    $('#yearsLeftMars').text(planetAge.yearsLeftMars);
    $('#yearsLeftJupiter').text(planetAge.yearsLeftJupiter);
  });
});
