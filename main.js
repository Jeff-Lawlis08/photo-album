var container = $('.image-container');
var header = $('header');
var nav = $('nav');
//grab albums
//create div for each album cover
function renderNav(album, i, array) {
  var navButtons = $('<a href="#"><h3>' +album.albumName+'</h3></a>');
  navButtons.on('click', function getAlbum(e) {
    albums.filter(function(album, i, arr) {
      if(album.albumName === e.target.innerText) {
        return true;
      }
    });
  });
}
var navButtons = albums.map(renderNav);
albums.forEach(function(a, i, arr) {
  nav.append(a);
});
console.log(navButtons);


var coverImage = albums.map(function(album, i, arr) {
  // console.log(album.albumCover);
  return album.albumCover;
});
// console.log(coverImage);
// console.log(albums[0].albumCover);
var names = albums.map(function(album, i, arr) {
  // console.log(album.albumName);
  return album.albumName;
});

var divCreate = albums.forEach(function(album, i, arr){
  var imageDiv = $('<div class="image-div'+[i]+'""><img src="'+coverImage[i]+'"/><h2>'+names[i]+'</h2></div>');
  return container.append(imageDiv);
});
// console.dir(document.querySelector('.image-div'));
// console.log(albums[0].images[0]);
var albumHeader = $('<h1>My Albums</h1>');
  $('header').append(albumHeader);

// console.log($('.image-div'));
var album1Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album1')
  return true;
})[0].images;
// console.log(album1Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div0').on('click', function(e) {
  // console.log(album1Photos);
  container.html('');
  header.html('<h1>Album 1</h1>');
  var photoDiv = album1Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
var album2Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album2')
  return true;
})[0].images;
// console.log(album2Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div1').on('click', function(e) {
  // console.log(album2Photos);
  container.html('');
  header.html('<h1>Album 2</h1>');
  var photoDiv = album2Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
var album3Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album3')
  return true;
})[0].images;
// console.log(album3Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div2').on('click', function(e) {
  // console.log(album1Photos);
  container.html('');
  header.html('<h1>Album 3</h1>');
  var photoDiv = album3Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
var album4Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album4')
  return true;
})[0].images;
// console.log(album4Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div3').on('click', function(e) {
  // console.log(album1Photos);
  container.html('');
  header.html('<h1>Album 4</h1>');
  var photoDiv = album4Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
var album5Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album5')
  return true;
})[0].images;
// console.log(album5Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div4').on('click', function(e) {
  // console.log(album1Photos);
  container.html('');
  header.html('<h1>Album 5</h1>');
  var photoDiv = album5Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
var album6Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album6')
  return true;
})[0].images;
// console.log(album6Photos);

  // console.log(album1Photos[1][0].url);
$('.image-div5').on('click', function(e) {
  // console.log(album1Photos);
  container.html('');
  header.html('<h1>Album 6</h1>');
  var photoDiv = album6Photos.forEach(function (image, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+image.url+'"/></div>');
    return container.append(imageDiv);

  });
});
