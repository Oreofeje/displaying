function setContent() {
    let post = JSON.parse(localStorage.getItem('post'));

    let textInfo = document.getElementById('text-info');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');

    textInfo.innerText = post.id;
    postTitle.innerText = post.title;
    postBody.innerText = post.body;
}

setContent();
