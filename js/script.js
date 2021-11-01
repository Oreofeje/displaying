// let postTitle = document.querySelector('#post-title');
// let postBody = document.querySelector('#post-body');
// let postForm = document.querySelector('#post-form ');
// let userPost =[];

// postForm.addEventListener('submit', createPost)

// to get data from a server
function getPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
  console.log(data)
  // userPost= data
  // console.log(userPost);


  // bring in the parent container that will hold & display our fetched/gotten array content
  let layoutParent = document.querySelector('#postParent');
  // userPost = data
  // console.log(userPost)
  // create an empty container that will be later used in concatenating our array list. Typical of Mr Ogo to call this html
  let layoutChild = " ";
  // next is to loop display through the array elements using forEach
  // had to change the array name from 'data' to 'userPost' for me to fake display the 101 object for the createPost function since we have equated data to userPost on line 20. HOWEVER, i have to change it back to 'data' again so as to work on displaying each object in the data array in a new window or tab (using maybe the window.open() method)
  data.forEach(element => {   
    // console.log(element);
   layoutChild += `
      <div  class="col-6 col-md-4 col-lg-3 my-3" >
        <div class="card h-100">

          <div class="card-body" id= "card-element">
            <div class="d-flex justify-content-end">
              <h6 class="text-info">${element.id}</h6>
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
            <button  class=" mt-0 m-3 px-3 btn btn-info" target="_blank" onclick = 'openNew()'>Open</button>
          </div>
        </div>
      </div>
    ` 
    layoutParent.innerHTML = layoutChild;
    
  }); 

  });
}

function openNew() {
  let cardCon = document.querySelector('#card-element').innerHTML;
  let box = window.open('', '', 'height=500, width= 500');
  box.document.write(cardCon);

  // window.open('#card-element')
}


getPost();




// function createPost(e) {
//   e.preventDefault();
//   let pstTitle = postTitle.value;
//   let pstBody = postBody.value;

//   // console.log('post title', pstTitle);

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: pstTitle,
//       body: pstBody,
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then ((response) => response.json())
//   .then ((datum) => {
//     console.log('datum post here', datum)
//     // console.log(userPost);
//     userPost.push(datum);
//     console.log(userPost);


//     let layoutParent = document.querySelector('#postParent');

//     let layoutChild = " ";

//     userPost.forEach(element => {   
//       // console.log(element);
//      layoutChild += `
//         <div  class="col-6 col-md-4 col-lg-3 my-3" >
//           <div class="card h-100">
  
//             <div class="card-body">
//               <div class="d-flex justify-content-end">
//                 <h6 class="text-info">${element.id}</h6>
//               </div>
//               <h5 class="post-title">${element.title}</h5>
//               <p class="post-body">${element.body} </p>
              
//               <div class="d-flex justify-content-end align-items-end">
//                 <button class="btn btn-danger">Delete</button>
//               </div>
//               <div class="mt-3 d-flex justify-content-end align-items-end">
//                 <button class="btn btn-warning">Update</button>
//               </div>
  
//             </div>
//           </div>
//         </div>
//       ` 
//       layoutParent.innerHTML = layoutChild;
      
//     }); 
//   });
// }











// function getData() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data)
//     //  bring in & assign a variable to the container that will hold all the data when display from the html doc
//     let layoutParent = document.querySelector('#postParent');
    
//     let layoutChild = "";
//     data.forEach(e => {
//       console.log(e)
//     });
    
//     layoutChild += `
//       <div class="col-sm-12 col-md-4 col-lg-3">
//         <div class="card h-100 mb-5 py-4">
//           <div class="card-body ">
//             <div class="d-flex justify-content-end">
//               <p class="text-info">
//               ${e.id}
//               </p>
//             </div>
//             <h5 class="card-title">${e.title}</h5>
      
//             <p class="card-text">${e.body}</p>
            
//             <div class="d-flex justify-content-end">
//               <button class="btn btn-danger">Delete</button>
//             </div>
//             <div class="mt-3 d-flex justify-content-end">
//               <button class="btn btn-warning">Update</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       `
//     layoutParent.innerHTML = layoutChild
    
//   });
    
  
// }




