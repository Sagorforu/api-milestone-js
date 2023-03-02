function loadComments (){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => displayComments(comments))
}
function displayComments(comments){
    const commentsContainer = document.getElementById('comments-container');
    for(const comment of comments){
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <h4>PostId: ${comment.postId}</h4>
        <h4>Id: ${comment.id}</h4>
        <h2>Name: ${comment.name}</h2>
        <h3>Email: ${comment.email}</h3>
        <h4>Comment Description: ${comment.body}</h4>
        `
        commentsContainer.appendChild(commentDiv);
    }
}
loadComments();