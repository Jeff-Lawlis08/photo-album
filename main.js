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
// console.dir(document.querySelector('.image-div'));
// console.log(albums[0].images[0]);
var albumHeader = $('<h1>My Albums</h1>');
  $('header').append(albumHeader);

// console.log($('.image-div'));
var album1Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album1')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div0').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album1Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });

  $('.photo-div1').on('click', function(e) {
    $('.photo-div1').css('background', 'pink');
  });

});
var album2Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album2')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div1').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album2Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });
});
var album3Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album3')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div2').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album3Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });
});
var album4Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album4')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div3').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album4Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });
});
var album5Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album5')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div4').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album5Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });
});
var album6Photos = albums.filter(function(album, i, arr) {
  if(album.albumName === 'Album6')
  return true;
}).map(function(album, i, arr) {
  return album.images;
});

  // console.log(album1Photos[1][0].url);
$('.image-div5').on('click', function(e) {
  var photoDiv = albums.forEach(function (album, i, arr) {
    var imageDiv = $('<div class="photo-div1"><img src="'+album6Photos[i][i].url+'"/></div>');
    return container.html(imageDiv);

  });
});

  // var photoImage = albums.map(function(album, i, arr) {
  //   // console.log(album.images[i].url);
  //   return album.images[i].url;
  // });

//when image-div is clicked clear container contents
//run divCreate using images.url to grab album images
