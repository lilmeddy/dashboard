// let posts = JSON.parse(localStorage.getItem('posts')) || [];

// function renderContent() {
//   let contentContainer = document.getElementById('contentContainer');
//    contentContainer.innerHTML = '';
 
// posts.forEach((post, index) => {
//   let postElement = document.createElement('div');
//   postElement.classList.add('post');
//   postElement.innerHTML = `
//     <h3>${post.title}</h3>
//     <p>${post.content}</p>
//     <div class="btn-group">
//       <button onclick="editPost(${index})">Edit</button>
//       <button onclick="deletePost(${index})">Delete</button>
//       <button onclick="toggleLike(${index})" class="${post.liked ? 'liked' : ''}">
//         ${post.liked ? 'Unlike' : 'Like'}
//       </button>
//     </div>
//   `;
 
//   contentContainer.appendChild(postElement);
  
// });
// function createPost(event) {
//   event.preventDefault();

//   let titleInput = document.getElementById('title');
//   let contentInput = document.getElementById('content');

//   let post = {
//     title: titleInput.value,
//     content: contentInput.value,
//     liked: false
//   };

//   posts.push(post);
//   localStorage.setItem('posts', JSON.stringify(posts));

//   titleInput.value = '';
//   contentInput.value = '';

//   renderPosts();
// }
// }
// function showCreatePostForm() {
//     let createPostForm = document.getElementById('createPostForm');
//      createPostForm.style.display = 'block';
//     //  createPost(event)
    
//    }


  //  function showCreatePostForm() {
  //   let createPostForm = document.getElementById('createPostForm');
  //    createPostForm.style.display = 'block';

  //    renderContent('');
  //  }
  //  function showAllPosts() {
  //   if (posts.length > 0) {
  //    let content = posts
  //       .map(post => `
  //         <div class="post">
  //           <h3>${post.title}</h3>
  //           <p>${post.content}</p>
  //         </div>
  //       `)
  //       .join('');

  //     renderContent(content);
  //   } else {
  //     renderContent('<p>No posts found.</p>');
  //   }
  // }
  // function createPost(event) {
  //   event.preventDefault();

  //  let titleInput = document.getElementById('title');
  //  let contentInput = document.getElementById('content');

  //  let post = {
  //     title: titleInput.value,
  //     content: contentInput.value,
  //     liked: false
  //   };

  //   posts.unshift(post);
  //   localStorage.setItem('posts', JSON.stringify(posts));

  //   titleInput.value = '';
  //   contentInput.value = '';

  //   showAllPosts();

  //  let createPostForm = document.getElementById('createPostForm');
  //   createPostForm.style.display = 'none';
  // }
  // let postForm = document.getElementById('postForm');
  // postForm.addEventListener('submit', createPost);
  // showAllPosts();