// handle-assessment.js - AJAX Form Submission
document.getElementById('career-assessment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
  
    fetch('/submit-assessment', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submission successful:', data);
      // Handle success (e.g., show a thank-you message)
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
    });
  });
  