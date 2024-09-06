document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.sidenav-trigger');
    const navLinks = document.querySelector('#mobile-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Show the questions section when "Get Started" is clicked
    const getStartedButton = document.getElementById('getStartedButton');
    const questionsSection = document.getElementById('questions');

    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            questionsSection.style.display = 'block';
            getStartedButton.style.display = 'none'; // Hide the button after clicking
        });
    }

    const formSteps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    }

    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.min(formSteps.length - 1, currentStep + 1);
            showStep(currentStep);
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', () => {
            currentStep = Math.max(0, currentStep - 1);
            showStep(currentStep);
        });
    });

    document.getElementById('assessment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interests = document.getElementById('interests').value;
        const skills = document.getElementById('skills').value;

        // Mock recommendations
        const recommendationsList = document.getElementById('recommendations-list');
        recommendationsList.innerHTML = `
            <h3>Recommended Careers for ${name}:</h3>
            <ul>
                <li>Career Path 1</li>
                <li>Career Path 2</li>
                <li>Career Path 3</li>
            </ul>
        `;

        // Mock skill development recommendations
        const skillRecommendations = document.getElementById('skill-recommendations');
        skillRecommendations.innerHTML = `
            <h3>Recommended Courses:</h3>
            <ul>
                <li>Course 1</li>
                <li>Course 2</li>
                <li>Course 3</li>
            </ul>
        `;
    });

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        alert('Thank you for contacting us. We will get back to you soon.');
        event.target.reset();
    });

    // Initialize form
    showStep(currentStep);
});
