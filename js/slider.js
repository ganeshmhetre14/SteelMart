/**
 * SteelMart - Slider JavaScript File
 * Handles functionality for all slider components
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sliders
    initHeroSlider();
    initTestimonialSlider();
});

/**
 * Initialize the hero slider functionality
 */
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.slide');
        const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');
        
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        const slideCount = slides.length;
        let slideInterval;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Show the target slide
            slides[index].classList.add('active');
            
            // Update current slide index
            currentSlide = index;
        }
        
        // Function to show the next slide
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slideCount;
            showSlide(nextIndex);
        }
        
        // Function to show the previous slide
        function prevSlide() {
            let prevIndex = (currentSlide - 1 + slideCount) % slideCount;
            showSlide(prevIndex);
        }
        
        // Add event listeners to the control buttons
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                prevSlide();
                resetSlideInterval();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                nextSlide();
                resetSlideInterval();
            });
        }
        
        // Function to start automatic slide transition
        function startSlideInterval() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        // Function to reset slide interval after manual navigation
        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }
        
        // Add swipe gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        heroSlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroSlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for a swipe
            
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left, show next slide
                nextSlide();
                resetSlideInterval();
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right, show previous slide
                prevSlide();
                resetSlideInterval();
            }
        }
        
        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetSlideInterval();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetSlideInterval();
                }
            }
        });
        
        // Create slide indicators if there are multiple slides
        if (slideCount > 1) {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'slide-indicators';
            
            for (let i = 0; i < slideCount; i++) {
                const indicator = document.createElement('button');
                indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
                
                if (i === 0) {
                    indicator.classList.add('active');
                }
                
                indicator.addEventListener('click', function() {
                    showSlide(i);
                    resetSlideInterval();
                });
                
                indicatorsContainer.appendChild(indicator);
            }
            
            heroSlider.appendChild(indicatorsContainer);
            
            // Update indicators when slide changes
            const updateIndicators = function() {
                const indicators = indicatorsContainer.querySelectorAll('button');
                indicators.forEach((indicator, index) => {
                    if (index === currentSlide) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            };
            
            // Override showSlide to include indicator updates
            const originalShowSlide = showSlide;
            showSlide = function(index) {
                originalShowSlide(index);
                updateIndicators();
            };
        }
        
        // Initialize the slider
        showSlide(0);
        startSlideInterval();
        
        // Pause autoplay when user hovers over the slider
        heroSlider.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        // Resume autoplay when user leaves the slider
        heroSlider.addEventListener('mouseleave', function() {
            startSlideInterval();
        });
    }
}

/**
 * Initialize the testimonial slider functionality
 */
function initTestimonialSlider() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        
        if (testimonials.length === 0) return;
        
        let currentTestimonial = 0;
        const testimonialCount = testimonials.length;
        let testimonialInterval;
        
        // Function to show a specific testimonial
        function showTestimonial(index) {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Show the target testimonial
            testimonials[index].classList.add('active');
            
            // Update current testimonial index
            currentTestimonial = index;
        }
        
        // Function to show the next testimonial
        function nextTestimonial() {
            let nextIndex = (currentTestimonial + 1) % testimonialCount;
            showTestimonial(nextIndex);
        }
        
        // Function to show the previous testimonial
        function prevTestimonial() {
            let prevIndex = (currentTestimonial - 1 + testimonialCount) % testimonialCount;
            showTestimonial(prevIndex);
        }
        
        // Add event listeners to the control buttons
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                prevTestimonial();
                resetTestimonialInterval();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                nextTestimonial();
                resetTestimonialInterval();
            });
        }
        
        // Function to start automatic testimonial transition
        function startTestimonialInterval() {
            testimonialInterval = setInterval(nextTestimonial, 7000); // Change testimonial every 7 seconds
        }
        
        // Function to reset testimonial interval after manual navigation
        function resetTestimonialInterval() {
            clearInterval(testimonialInterval);
            startTestimonialInterval();
        }
        
        // Add swipe gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        testimonialSlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        testimonialSlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for a swipe
            
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left, show next testimonial
                nextTestimonial();
                resetTestimonialInterval();
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right, show previous testimonial
                prevTestimonial();
                resetTestimonialInterval();
            }
        }
        
        // Create testimonial indicators if there are multiple testimonials
        if (testimonialCount > 1) {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'testimonial-indicators';
            
            for (let i = 0; i < testimonialCount; i++) {
                const indicator = document.createElement('button');
                indicator.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                
                if (i === 0) {
                    indicator.classList.add('active');
                }
                
                indicator.addEventListener('click', function() {
                    showTestimonial(i);
                    resetTestimonialInterval();
                });
                
                indicatorsContainer.appendChild(indicator);
            }
            
            testimonialSlider.appendChild(indicatorsContainer);
            
            // Update indicators when testimonial changes
            const updateIndicators = function() {
                const indicators = indicatorsContainer.querySelectorAll('button');
                indicators.forEach((indicator, index) => {
                    if (index === currentTestimonial) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            };
            
            // Override showTestimonial to include indicator updates
            const originalShowTestimonial = showTestimonial;
            showTestimonial = function(index) {
                originalShowTestimonial(index);
                updateIndicators();
            };
        }
        
        // Initialize the slider
        showTestimonial(0);
        startTestimonialInterval();
        
        // Pause autoplay when user hovers over the slider
        testimonialSlider.addEventListener('mouseenter', function() {
            clearInterval(testimonialInterval);
        });
        
        // Resume autoplay when user leaves the slider
        testimonialSlider.addEventListener('mouseleave', function() {
            startTestimonialInterval();
        });
    }
}