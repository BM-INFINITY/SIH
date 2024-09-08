
// api.js - Career Comparison Data Fetching Example
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.yourbackend.com/careers')
      .then(response => response.json())
      .then(data => {
        document.getElementById('loading-message').style.display = 'none';
        document.getElementById('career-table').style.display = 'table';
        
        const careerTableBody = document.querySelector('#career-table tbody');
        data.forEach(career => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${career.name}</td>
            <td>${career.salary}</td>
            <td>${career.skills.join(', ')}</td>
            <td>${career.growth}</td>
          `;
          careerTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching career data:', error);
        document.getElementById('loading-message').textContent = 'Failed to load career data.';
      });
  });
  