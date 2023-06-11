const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#put-title').value.trim();
  const content = document.querySelector('#put-content').value.trim();
  const date = new Date().toDateString();
  let url = window.location.toLocaleString();
  let path = new URL(url).pathname.split('/');
  let id = path[path.length - 1];
  console.log(id)
  console.log(title)
  console.log(content)
  if (content && title) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to Update post');
    }
  }  
};

document.querySelector('.new-put-form').addEventListener('submit', updateButtonHandler);
