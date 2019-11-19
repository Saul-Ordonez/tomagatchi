import { Tomagatchi } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#start').click(function(event){
    event.preventDefault();

    let tomagatchi = new Tomagatchi();

    $('#energyLevel').text(tomagatchi.hunger);
    $('#sleep').text(tomagatchi.energy);
    $('#mood').text(tomagatchi.mood);
    setInterval(() => {
      $('#energyLevel').text(tomagatchi.hunger);
      $('#sleep').text(tomagatchi.energy);
      $('#mood').text(tomagatchi.mood);
    }, 1000);

    $('#feed').click(function(){
      tomagatchi.feed();
      $('#energyLevel').text(tomagatchi.hunger);
    });

    $('#rest').click(function() {
      tomagatchi.sleep();
      $('#sleep').text(tomagatchi.energy);
    });

    $('#play').click(function() {
      tomagatchi.play();
      $('#mood').text(tomagatchi.mood);
    });

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=Ho7J61QsxL7wbzY2CXyPYUenr8U2ixum&s=tamagotchi&weirdness=4`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('#gif').attr("src", response.data.images.original.url);
    }


  });

});
