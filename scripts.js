// scripts.js
function submitAppointment() {
    const form = document.getElementById('appointmentForm');
    const formData = new FormData(form);

    fetch('/submit_appointment', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseDiv = document.getElementById('appointmentResponse');
        responseDiv.innerHTML = <p class="success">${data.message}</p>;
    })
    .catch(error => {
        console.error('Error:', error);
        const responseDiv = document.getElementById('appointmentResponse');
        responseDiv.innerHTML = <p class="error">An error occurred. Please try again.</p>;
    });
}

function submitContact() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('/submit_contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseDiv = document.getElementById('contactResponse');
        responseDiv.innerHTML = <p class="success">${data.message}</p>;
    })
    .catch(error => {
        console.error('Error:', error);
        const responseDiv = document.getElementById('contactResponse');
        responseDiv.innerHTML = <p class="error">An error occurred. Please try again.</p>;
    });
}