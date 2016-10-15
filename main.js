var container = $('.image-container');


//grab albums
//create div for each album cover

console.log(albums[0].albumCover);
var divCreate = albums.forEach(function(album, i, arr){
  var coverImage = albums.map(function(album, i, arr) {
    return album.albumCover;
  });
  var imageDiv = $('<div class="image-div"><img src='+coverImage+'/></div>');
  return container.append(imageDiv);
});

// console.log(albums[0].images[0]);
