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
  
  let songTitle = $(".song-title").val();
  let addedSong =`<option class='stored-song' id='${songTitle}'>${songTitle}</option>`;
  let artist = $(".artist").val();
  let album = $(".album").val();
  let BPM = $(".B-P-M").val();
  let numOfBars = Number($(".number-of-bars").val());
  let instruments = $(".instruments").val();
  let instArray = instruments.split(' ');
  // let tableData = $("table").children();
  let songObj = {artist: artist, album: album, song: songTitle, BPM: BPM, Bars: numOfBars, instruments: instruments};
  // console.log(instArray.length);
  // add song button
  $(".add-data-btn").on("click", function(){
    // declaring 
    let songTitle = $(".song-title").val();
    let addedSong =`<option class='stored-song' id='${songTitle}'>${songTitle}</option>`;
    let artist = $(".artist").val();
    let album = $(".album").val();
    let BPM = $(".B-P-M").val();
    let numOfBars = Number($(".number-of-bars").val());
    let instruments = $(".instruments").val();
    let instArray = instruments.split(' ');
    let tableData = $("table").children();
    let songObj = JSON.stringify({artist: artist, album: album, song: songTitle, BPM: BPM, Bars: numOfBars, instruments: instruments});
    // console.log(instArray.length);

    // store values
    if (songTitle.length === 0 || songTitle.trim().length === 0) {
      alert('songs need names');
    } else {
      localStorage.setItem(songTitle,songObj);
      tableGenerator(numOfBars,instArray);
    }

    // table generator
    // JSON.parse(localStorage[songTitle]).tableData = tableData;

    // clear values
    $('.song-selector').val('');
    // $(".song-title").val("");
    $(".artist").val("");
    $(".album").val("");
    $(".B-P-M").val("");
    $(".number-of-bars").val("");
    $(".instruments").val("");


    

    $("#songs-list").append(addedSong);


  }); // add btn ends


  // cell highlighter
  $("table").on('click',function(){
    if ($(event.target).attr('class') === 'cell' && $(event.target).attr('style') === 'background-color: red; opacity: 0.9;') {
      $(event.target).css('background-color', 'aliceblue');
      $(event.target).css('opacity', '.3');
    } else {
      if ($(event.target).attr('class') === 'cell') {
        $(event.target).css('background-color', 'red');
        $(event.target).css('opacity', '.9');
      };
    }
    // tableData = $("table").children();
    // JSON.parse(localStorage[$('.song-title').val()])
    // console.log(localStorage.table);
  });

   // selector of songs
  $('.song-selector').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var selectedSong =$('.song-selector').val();
      $(".song-title").val(`${selectedSong}`);
      if (localStorage.hasOwnProperty(selectedSong)) {
        tableGenerator(JSON.parse(localStorage[selectedSong]).Bars, (JSON.parse(localStorage[selectedSong]).instruments).split(' '));
        $('#t1').append(JSON.parse(localStorage[selectedSong]).tableData);

        console.log(JSON.parse(localStorage[selectedSong]).tableData);
      }
    }
  });


 

  $(".del-data-btn").on("click", function() {
    alert('item deleted? check the console'); // maybe change to a window.confirm
    localStorage.removeItem($('.song-title').val()); // grab the title and plop here

    $(`#${$('.song-title').val()}`).remove();
    $('#t1').empty();
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



}); // end of jquery

