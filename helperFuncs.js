// var _= require('underscore');

let tableGenerator = function(num, array) {
  $('#t1').empty();
  $('.song-selector').val('');
  
  if (num === 0) {
    alert('You need bars once in a while to nurture the soul, so do songs... Please enter the NUMBER of bars.')
  } else {
    for (let i = 0; i <= num; i++) {
      if (i === 0) {
        $('#t1').append(`<th class="bar1">Instruments</th>`); 
      } else {
        $('#t1').append(`<th class="bar">${i}</th>`); 
      }
    }

  // track generator
    if (array[0] === "") {
      alert('John Cage\'s 4:33 is not accepted. Please input your instruments...');
    } else {
      for (let i = 0; i < array.length; i++) {
        var value1 = Math.floor(Math.random() * Math.floor(255));
        var value2 = Math.floor(Math.random() * Math.floor(255));
        var value3 = Math.floor(Math.random() * Math.floor(255));
        $('#t1').append(`<tr class=${array[i]}-row><td id='track' class=${array[i]}>${array[i]}</td>`);
        $(`.${array[i]}`).css('background-color', `rgb(${value1}, ${value2}, ${value3})`);
      }
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = -1; j < num; j++) {
        $(`.${array[i]}-row`).append(`<th class='cell'></th>`);
      }
    }
  }
}; 

