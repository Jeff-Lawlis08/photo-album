var container = $('.image-container');


//grab albums
//create div for each album cover

var coverImage = albums.map(function(album, i, arr) {
  console.log(album.albumCover);
  return album.albumCover;
});
// console.log(coverImage);
// console.log(albums[0].albumCover);
var names = albums.map(function(album, i, arr) {
  console.log(album.albumName);
  return album.albumName;
});

var divCreate = albums.forEach(function(album, i, arr){
  var imageDiv = $('<div class="image-div'+[i]+'""><img src="'+coverImage[i]+'"/><h2>'+names[i]+'</h2></div>');
  return container.append(imageDiv);
});
console.dir(document.querySelector('.image-div'));
// console.log(albums[0].images[0]);
var albumHeader = $('<h1>My Albums</h1>');
  $('header').append(albumHeader);

// console.log($('.image-div'));



$('.image-div0').on('click', function(e) {
  var album1Photos = albums.filter(function(album, i, arr) {
    if(album.albumName === 'Album 1')
    return true;
  }).map(function(album, i, arr) {
    return album.images;
  });
  // var photoImage = albums.map(function(album, i, arr) {
  //   // console.log(album.images[i].url);
  //   return album.images[i].url;
  // });
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="image-div1"><img src="'+album1Photos[i]+'"/><h2>'+names[i]+'</h2></div>');
    return container.html(imageDiv);
  });

});
//when image-div is clicked clear container contents
//run divCreate using images.url to grab album images
