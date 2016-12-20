var container = $('.image-container');

// console.log(albums[0].albumCover);
function renderHome(){
  container.empty();
  albums.forEach((album, i, arr)=>{
    var albumDiv = `
    <div class="album-div" id="album-div${i}">
    <img src="${album.albumCover}"/>
    <span>${album.albumName}</span>
    </div>
    `;
    container.append(albumDiv);
  });
  var albumDiv = $('.album-div');
  albumDiv.on('click', function(e){
    var albumNumber = getNumber(e.currentTarget.id);
    renderAlbum("Album"+albumNumber);
  });
}
renderHome();
function renderNav(item){
    var nav = `
    <nav>
      <button class="home">
      Home
      </button>
    </nav>
    `;
    container.append(nav);
    albums.forEach((album, i, arr)=>{
      albumNumber = i+1;
      var navButton = `
      <button class="nav-buttons" id="nav-button${i}">
        ${item+albumNumber}
      </button>
      `;
      $('nav').append(navButton);
    });
    $('.home').on('click', function(e){
      renderHome();
    });
    $('.nav-buttons').on('click', function(e){
      container.empty();
      albumNumber = getNumber(e.currentTarget.id);
      renderAlbum("Album"+albumNumber);
    });
}
function renderAlbum(albumName){
  container.empty();
  var clickedAlbum = albums.filter((album, i, arr)=>{
    if(album.albumName===albumName){
      return true;
    }
  });
  console.log(clickedAlbum);
clickedAlbum[0].images.forEach((image, i, arr)=>{
  var imageDiv = `
  <div class="image-div" id="image-div${i}">
    <img src="${image.url}"
    <span>Photo${i+1}</span>
  </div>
  `;
  container.append(imageDiv);
  $('.image-div').on('click', function(e){
    var imageNumber = getNumber(e.currentTarget.id);
    console.log(imageNumber);
    renderImage(clickedAlbum[0], imageNumber);
  });
});
renderNav("Album");
}
function getNumber(string){
  var charArray = string.split('');
  var index = charArray[charArray.length-1];
  var number = Number(index)+1;
  return number;
}
function renderImage(album, imageNumber){
  var clickedImage = album.images.filter((image, i, arr)=>{
    console.log(image.imageName);
    if(image.imageName===String("Photo "+imageNumber)){
      return true;
    }
  });
  console.log(clickedImage[0].url);
    var photoDiv = `
    <div class="photo-div">
      <img src=${clickedImage[0].url}
      <span>Photo ${imageNumber}
    </div>
    `;
    container.empty();
    container.append(photoDiv);

}
