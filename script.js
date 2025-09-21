document.addEventListener('DOMContentLoaded', function() {
    // Get button and message elements
    const triangleBtn = document.getElementById('triangleBtn');
    const message = document.getElementById('message');
    
    // Track message visibility state
    let isMessageVisible = false;
    
    // Add click event listener to the triangle button
    triangleBtn.addEventListener('click', function() {
        if (isMessageVisible) {
            // Hide the message
            message.classList.remove('show');
            isMessageVisible = false;
        } else {
            // Show the message
            message.classList.add('show');
            isMessageVisible = true;
        }
    });
    
    // Optional: Add click effects to navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Optional: Add hover effects to image cards
    const imageCards = document.querySelectorAll('.image-placeholder');
    imageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});