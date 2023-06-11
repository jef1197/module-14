const updateButtonHandler = async (event) => {
  document.location.replace('/update');
  if (event.target.id === 'updateBtn' ) {
    const id = event.target.getAttribute('data-id');

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