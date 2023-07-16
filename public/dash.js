let posts = JSON.parse(localStorage.getItem('posts')) || [];
function renderContent(content) {
    let contentContainer = document.getElementById('contentContainer');
     contentContainer.innerHTML = content;
   }
   function renderContent(content) {
    let contentContainer = document.getElementById('contentContainer');
     contentContainer.innerHTML = content;
   }
   function showCreatePostForm() {
    let createPostForm = document.getElementById('createPostForm');
     createPostForm.style.display = 'block';

     renderContent('');
   }
   function showAllPosts() {
    if (posts.length > 0) {
     let content = posts
        .map(post => `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
          </div>
        `)
        .join('');

      renderContent(content);
    } else {
      renderContent('<p>No posts found.</p>');
    }
  }
  function createPost(event) {
    event.preventDefault();

   let titleInput = document.getElementById('title');
   let contentInput = document.getElementById('content');

   let post = {
      title: titleInput.value,
      content: contentInput.value,
      liked: false
    };

    posts.unshift(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    titleInput.value = '';
    contentInput.value = '';

    showAllPosts();

   let createPostForm = document.getElementById('createPostForm');
    createPostForm.style.display = 'none';
  }
  let postForm = document.getElementById('postForm');
  postForm.addEventListener('submit', createPost);
  showAllPosts();