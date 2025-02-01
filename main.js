// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_1ba99xv', // Add your EmailJS service ID
        'template_doh2mra', // Add your EmailJS template ID
        {
          from_name: document.getElementById('name').value,
          from_email: document.getElementById('email').value,
          message: document.getElementById('message').value,
        }
      );
  
      alert('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  });