const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const date = new Date().toDateString();
  
  if (title && content && date) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.id === 'deleteBtn' ) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  } 
};

const newPost = () => {
  let form = document.querySelector('.form-container');
  form.classList.remove("hidden");
  document.querySelector('#newPost').classList.add('hidden')
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

document.querySelector('.post-list').addEventListener('click', delButtonHandler);

document.querySelector('#newPost').addEventListener('click', newPost);
document.querySelector('#cancel-form').addEventListener('click', () => {
  let form = document.querySelector('.form-container');
  form.classList.add("hidden");
  document.querySelector('#newPost').classList.remove('hidden')
});