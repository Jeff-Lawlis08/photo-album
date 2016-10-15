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
  var imageDiv = $('<div class="image-div"><img src="'+coverImage[i]+'"/><h2>'+names[i]+'</h2></div>');
  return container.append(imageDiv);
});

// console.log(albums[0].images[0]);
