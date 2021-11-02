let posts = [];

// to get data from a server
function getPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      // bring in the parent container that will hold & display our fetched/gotten array content
      let layoutParent = document.querySelector('#postParent');
      // userPost = data
      // console.log(userPost)
      // create an empty container that will be later used in concatenating our array list. Typical of Mr Ogo to call this html
      let layoutChild = " ";
      // next is to loop display through the array elements using forEach
      // had to change the array name from 'data' to 'userPost' for me to fake display the 101 object for the createPost function since we have equated data to userPost on line 20. HOWEVER, i have to change it back to 'data' again so as to work on displaying each object in the data array in a new window or tab (using maybe the window.open() method)
      posts = data;

      posts.forEach((element, index) => {
        let stringiFiedElem = JSON.stringify(element);

        layoutChild += `
          <div class="col-6 col-md-4 col-lg-3 my-3" >
            <div class="card h-100">

              <div class="card-body" id= "card-element">
                <div class="d-flex justify-content-end">
                  <h6 class="text-info">${stringiFiedElem}</h6>
                </div>
                <h5 class="post-title">${element.title}</h5>
                <p class="post-body">${element.body} </p>
                
                <div class="d-flex justify-content-end align-items-end">
                  <button class="btn btn-danger">Delete</button>
                </div>
                <div class="mt-3 d-flex justify-content-end align-items-end">
                  <button class="btn btn-warning">Update</button>
                </div>

              </div>
                
              <div class="mt-3 d-flex justify-content-end">
                <button class=" mt-0 m-3 px-3 btn btn-info" target="_blank" onclick="openNew(\' ${index} '\)">Open</button>
              </div>
            </div>
          </div>
        `;

        layoutParent.innerHTML = layoutChild;
      });

    });
}

function openNew(element) {
  localStorage.setItem('post', JSON.stringify(posts[parseInt(element)]));
  
  location.href = 'post.html';
}

getPost();
