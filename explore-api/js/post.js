function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPost(posts))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for (const post of posts){
        console.log(post)
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>UserId: ${post.userId}</h4>
        <h4>User: ${post.id}</h4>
        <h2>Post: ${post.title}</h2>
        <h3>Post: ${post.body}</h3>
        `
        postContainer.appendChild(div);
    }
}

loadPost();
