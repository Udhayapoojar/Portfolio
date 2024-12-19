const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', async () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json(); // Parse JSON response

    if (response.ok) {
      alert('Your message has been sent. Thank you!');
      contactForm.reset();
    } else {
      console.error('Response error:', result.error || 'Unknown error');
      alert(result.error || 'Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred. Please try again later.');
  }
});
