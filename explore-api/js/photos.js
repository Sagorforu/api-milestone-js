function loadPhotos (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => displayPhotos(photos))
}
function displayPhotos(photos){
    const photosContainer = document.getElementById('photos-container');
    for(const photo of photos){
        const photosDiv = document.createElement('div');
        photosDiv.innerHTML = `
        <h4>AlbumId: ${photo.albumId}</h4>
        <h4>Id: ${photo.id}</h4>
        <h2>Photo Name: ${photo.title}</h2>
        <h3>Photo url: ${photo.url}</h3>
        <h4>Thumbnail url: ${photo.thumbnailUrl}</h4>
        `
        photosContainer.appendChild(photosDiv)
    }
}