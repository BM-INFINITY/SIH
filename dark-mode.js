// dark-mode.js - Toggle Dark Mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the current mode in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load the saved theme from localStorage on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}
