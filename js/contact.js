// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    
    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Validate the form
            if (validateForm()) {
                // If validation passes, submit the form via AJAX
                submitFormAjax();
            }
        });
    }
    
    // Validate the form inputs
    function validateForm() {
        let isValid = true;
        
        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Clear previous error messages
        clearErrorMessages();
        
        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        if (!subject.value.trim()) {
            showError(subject, 'Please enter a subject');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Please enter your message');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Function to show error message
    function showError(inputElement, message) {
        const formGroup = inputElement.parentElement;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        formGroup.appendChild(errorDiv);
        inputElement.classList.add('error-input');
    }
    
    // Function to clear all error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(errorMsg) {
            errorMsg.remove();
        });
        
        const errorInputs = document.querySelectorAll('.error-input');
        errorInputs.forEach(function(input) {
            input.classList.remove('error-input');
        });
    }
    
    // Submit form using AJAX
    function submitFormAjax() {
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Create and send AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', contactForm.getAttribute('action'), true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        // Show success message
                        showFormMessage('success', 'Thank you! Your message has been sent successfully.');
                        // Reset the form
                        contactForm.reset();
                    } else {
                        // Show error message
                        showFormMessage('error', response.message || 'There was a problem sending your message. Please try again.');
                    }
                } catch (e) {
                    // Show error if JSON parsing fails
                    showFormMessage('error', 'There was a problem processing the response. Please try again.');
                }
            } else {
                // Show error if HTTP request fails
                showFormMessage('error', 'There was a problem sending your message. Please try again.');
            }
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        };
        
        xhr.onerror = function() {
            // Show error if network request fails
            showFormMessage('error', 'Network error. Please check your connection and try again.');
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        };
        
        xhr.send(formData);
    }
    
    // Function to show form submission message
    function showFormMessage(type, message) {
        const messageContainer = document.createElement('div');
        messageContainer.className = `form-message ${type}-message`;
        messageContainer.innerText = message;
        
        // Insert message after form
        contactForm.parentNode.insertBefore(messageContainer, contactForm.nextSibling);
        
        // Remove message after 5 seconds if it's a success message
        if (type === 'success') {
            setTimeout(function() {
                messageContainer.remove();
            }, 5000);
        }
    }
    
    // Google Maps functionality - can be expanded if needed
    const mapContainer = document.querySelector('.google-map');
    if (mapContainer) {
        // Add any custom map interactions here if needed
        // For example, click to show directions, etc.
    }
    
    // Initialize animation for contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length > 0) {
        // Add animation classes when scrolled into view
        window.addEventListener('scroll', function() {
            contactCards.forEach(function(card) {
                if (isElementInViewport(card) && !card.classList.contains('animated')) {
                    card.classList.add('animated', 'fadeIn');
                }
            });
        });
        
        // Trigger initial check
        window.dispatchEvent(new Event('scroll'));
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Phone number formatting (optional)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Format phone number as user types (example for US numbers)
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
                e.target.value = value;
            }
        });
    }
});