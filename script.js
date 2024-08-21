window.onload = function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    });

    // Contact modal functionality
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactBtn');
    const span = document.getElementsByClassName('close')[0];
    const email = document.getElementById('email');
    const notification = document.getElementById('notification');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    email.onclick = function() {
        navigator.clipboard.writeText(email.innerText)
            .then(() => {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000); // Hide notification after 2 seconds
            });
    }
};


//TEST
