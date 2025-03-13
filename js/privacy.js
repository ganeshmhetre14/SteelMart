// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Check if there's a hash in the URL and activate the corresponding tab
    const hash = window.location.hash.substring(1);
    if (hash) {
        activateTab(hash);
    }
    
    // Add click event listeners to tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${tabId}`);
        });
    });
    
    // Function to activate a specific tab
    function activateTab(tabId) {
        // Remove active class from all tab buttons and panes
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Add active class to the selected tab button and pane
        const selectedBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const selectedPane = document.getElementById(tabId);
        
        if (selectedBtn && selectedPane) {
            selectedBtn.classList.add('active');
            selectedPane.classList.add('active');
        }
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // Here you would typically send an AJAX request to subscribe
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Add print functionality
    const printButtons = document.querySelectorAll('.print-policy');
    
    if (printButtons) {
        printButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.print();
            });
        });
    }
});