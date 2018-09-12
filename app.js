$(document).ready(function() {


  $(".add-data-btn").on("click", function(){

    // store values
    let artist = $(".artist").val();
    let album = $(".album").val();
    let songTitle = $(".song-title").val();
    let BPM = $(".B-P-M").val();
    let numOfBars = Number($(".number-of-bars").val());
    let instruments = $(".instruments").val();
    let instArray = instruments.split(' ');
    console.log(instArray.length);
    // clear values
    $(".artist").val("");
    $(".album").val("");

    console.log(typeof numOfBars);
    localStorage.setItem(songTitle,JSON.stringify({artist: artist, album: album, song: songTitle, BPM: BPM, Bars: numOfBars, instruments: instruments}));
    // console.log(localStorage);
    $(".stored-songs").append(`<option>${songTitle}</option>`);
    
    // let bar = `<td class="bar"> ${} </td>`;
    for (let i = 0; i <= numOfBars; i++) {
      // $(".t1").html(`<tr class="bar"> ${i} </tr>`);
      $('#t1').append(`<th class="bar">`+ i +`</th>`)
      
    }
    if (instArray[0] === "") {
      alert('John Cage\'s 4:33 is not accepted. Please input an instrument...')
    } else {
      for (let i = 0; i < instArray.length; i++) {
        var value1 = Math.floor(Math.random() * Math.floor(255))
        var value2 = Math.floor(Math.random() * Math.floor(255))
        var value3 = Math.floor(Math.random() * Math.floor(255))
        $('#t1').append(`<tr><td class="${instArray[i]}">${instArray[i]}</td>`);
        $(`.${instArray[i]}`).css('background-color', `rgb(${value1}, ${value2}, ${value3})`);
      }

    }
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/


  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let album = $(".user-input").val();
   //   localStorage.setItem("testStorage", album);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-data-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.song-title').val() ); // grab the title and plop here
    //  ('.stored-songs').removeItem($('.song-title').val()); // grab the title and plop here
     $(".artist").val("");
     $(".album").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});