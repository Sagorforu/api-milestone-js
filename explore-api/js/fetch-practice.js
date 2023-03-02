function usersPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(postData => displayPost(postData))
}

function displayPost(postData) {
    const ul = document.getElementById('post-list');
    for (const post of postData) {
        console.log(post);
        const li = document.createElement('li');
        li.innerText = post.body;
        ul.appendChild(li);
    }
}

function usersComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => displayComment(comments));
}
function displayComment(comments) {
    const ul = document.getElementById('comment-list')
    for (const comment of comments){
        console.log(comment)
        const li = document.createElement('li');
        li.innerText = comment.body;
        ul.appendChild(li)
    }
}

function usersAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(albums => displayAlbums(albums))
}
function displayAlbums(albums) {
    const ul = document.getElementById('album-list');
    for(const album of albums){
        const li = document.createElement('li');
        li.innerText = album.title;
        ul.appendChild(li);
    }
}

function usersPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(photos => displayPhotos(photos))
}
function displayPhotos(photos) {
    const ul = document.getElementById('li-list-photos');
    for (const photo of photos) {
        console.log(photo.title);
        const li = document.createElement('li');
        li.innerText = photo.url;
        ul.appendChild(li);
    }
}

function usersTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => displayTodos(todos))
}
function displayTodos(todos) {
    const ul = document.getElementById('todos-list');
    for (const todo of todos){
        const li = document.createElement('li');
        li.innerText = todo.completed;
        ul.appendChild(li);
    }
}