$(document).ready(function() {

  var songsStored = Object.keys(localStorage);
// checking if local stoarge is empty, else append keys to song list
  if (songsStored.length !== 0){

    for(let i = 0; i < songsStored.length; i++){
      // console.log(songsStored[i]);
      var songInList = `<option class='stored-song' id=${songsStored[i]}>${songsStored[i]}</option>`;
      $('#songs-list').append(songInList); 
    }
  }
  $(".add-data-btn").on("click", function(){

    let songTitle = $(".song-title").val();
    var addedSong =`<option class='stored-song' id='${songTitle}'>${songTitle}</option>`;
    let artist = $(".artist").val();
    let album = $(".album").val();
    let BPM = $(".B-P-M").val();
    let numOfBars = Number($(".number-of-bars").val());
    let instruments = $(".instruments").val();
    let instArray = instruments.split(' ');
    var songStrObj = JSON.stringify({artist: artist, album: album, song: songTitle, BPM: BPM, Bars: numOfBars, instruments: instruments});
    // console.log(instArray.length);

    // store values
    localStorage.setItem(songTitle,songStrObj);

    // table generator
    tableGenerator(numOfBars,instArray);

    // clear values
    $('.song-selector').val('');
    $(".song-title").val("");
    $(".artist").val("");
    $(".album").val("");
    $(".B-P-M").val("");
    $(".number-of-bars").val("");
    $(".instruments").val("");

    // console.log(numOfBars);
    

    $("#songs-list").append(addedSong);


  }); // add btn ends

  $('.song-selector').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){

        var selectedSong =$('.song-selector').val();
        
        if (localStorage.hasOwnProperty(selectedSong)) {

          tableGenerator(JSON.parse(localStorage[selectedSong]).Bars,(JSON.parse(localStorage[selectedSong]).instruments).split(' '));
        }
    }
});
 

  $(".del-data-btn").on("click", function() {
    alert('item deleted? check the console'); // maybe change to a window.confirm
    localStorage.removeItem($('.song-title').val()); // grab the title and plop here

    $(`#${$('.song-title').val()}`).remove();
    // $('#songs-list').remove(`#${$('.song-title').val()}`);
    // console.log($('.song-title').val());
    $('#t1').empty()
    $(`.${$('.song-title').val()}`).remove(); 
    $(`#track`).remove(); 
    $(`.bar`).remove(); 
    $(".song-title").val("");
    $(".artist").val("");
    $(".album").val("");
    $(".B-P-M").val("");
    $(".number-of-bars").val("");
    $(".instruments").val("");
    $(".song-selector").val("");
  });

  $('.cell').on('click', function(){
    $('.cell').css('background-color','black');
  });

}); // end of jquery

