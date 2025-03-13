// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Image gallery functionality
    setupImageGallery();
    
    // Quantity controls
    setupQuantityControls();
    
    // Tab switching functionality
    setupTabSwitching();
    
    // Review form functionality
    setupReviewForm();
    
    // Product variant selection
    setupVariantSelection();
    
    // Add to cart functionality
    setupAddToCart();
    
    // Wishlist functionality
    setupWishlist();
    
    // Related product interactions
    setupRelatedProducts();
});

// Image gallery functionality
function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.getElementById('main-product-image');
    
    // Add click event to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image src with clicked thumbnail src
            mainImage.src = this.src;
            
            // Remove active class from all thumbnails and add to clicked
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Quantity selector functionality
function setupQuantityControls() {
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityInput = document.getElementById('product-quantity');
    
    // Decrease quantity
    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    // Increase quantity
    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    // Ensure only valid numbers are entered
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            this.value = 1;
        }
    });
}

// Tab switching functionality
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get tab ID from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Review form functionality
function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    const ratingStars = document.querySelectorAll('.rating-star');
    let selectedRating = 0;
    
    // Star rating functionality
    ratingStars.forEach(star => {
        // Hover effect
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
        
        // Click to select rating
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            highlightStars(selectedRating);
        });
    });
    
    // Remove highlight when mouse leaves rating area
    document.querySelector('.rating-select').addEventListener('mouseleave', function() {
        highlightStars(selectedRating);
    });
    
    // Form submission
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const reviewTitle = document.getElementById('review-title').value;
            const reviewContent = document.getElementById('review-content').value;
            
            // Validate form
            if (selectedRating === 0) {
                alert('Please select a rating');
                return;
            }
            
            if (reviewTitle.trim() === '') {
                alert('Please enter a review title');
                return;
            }
            
            if (reviewContent.trim() === '') {
                alert('Please enter your review');
                return;
            }
            
            // Prepare data for submission
            const reviewData = {
                rating: selectedRating,
                title: reviewTitle,
                content: reviewContent,
                productId: getProductId() // You'll need to implement this function
            };
            
            // Submit review via AJAX
            submitReview(reviewData);
            
            // Reset form
            reviewForm.reset();
            selectedRating = 0;
            highlightStars(0);
        });
    }
    
    // Function to highlight stars based on rating
    function highlightStars(rating) {
        ratingStars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.remove('far');
                star.classList.add('fas');
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
            }
        });
    }
    
    // Function to submit review via AJAX
    function submitReview(reviewData) {
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit-review.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        alert('Thank you for your review!');
                        // Optionally reload the page to show the new review
                        // window.location.reload();
                    } else {
                        alert('Error submitting review: ' + response.message);
                    }
                } catch (e) {
                    alert('Error processing response');
                }
            } else {
                alert('Error submitting review. Please try again later.');
            }
        };
        
        xhr.onerror = function() {
            alert('Network error occurred. Please try again.');
        };
        
        xhr.send(JSON.stringify(reviewData));
    }
    
    // Load more reviews functionality
    const loadMoreButton = document.getElementById('load-more-reviews');
    if (loadMoreButton) {
        let currentPage = 1;
        
        loadMoreButton.addEventListener('click', function() {
            currentPage++;
            loadMoreReviews(currentPage);
        });
    }
    
    function loadMoreReviews(page) {
        // Get current sort option
        const sortSelect = document.getElementById('review-sort');
        const sortOption = sortSelect ? sortSelect.value : 'newest';
        
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `get-reviews.php?product_id=${getProductId()}&page=${page}&sort=${sortOption}`, true);
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    
                    if (response.reviews && response.reviews.length > 0) {
                        // Append new reviews to the list
                        const reviewsContainer = document.querySelector('.customer-reviews');
                        const loadMoreContainer = document.querySelector('.load-more');
                        
                        response.reviews.forEach(review => {
                            const reviewHTML = createReviewHTML(review);
                            // Insert before the load more button container
                            reviewsContainer.insertBefore(reviewHTML, loadMoreContainer);
                        });
                        
                        // Hide load more button if no more reviews
                        if (!response.hasMore) {
                            loadMoreButton.style.display = 'none';
                        }
                    } else {
                        // No more reviews
                        loadMoreButton.style.display = 'none';
                    }
                } catch (e) {
                    console.error('Error parsing response', e);
                }
            }
        };
        
        xhr.send();
    }
    
    // Function to create review HTML element
    function createReviewHTML(review) {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        // Create stars HTML
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= review.rating) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        
        reviewItem.innerHTML = `
            <div class="reviewer-info">
                <img src="${review.avatar || 'images/avatars/default.jpg'}" alt="Reviewer">
                <div>
                    <h4>${review.name}</h4>
                    <p class="review-date">${review.date}</p>
                </div>
            </div>
            <div class="review-rating">
                <div class="stars">
                    ${starsHTML}
                </div>
            </div>
            <div class="review-content">
                <h4>${review.title}</h4>
                <p>${review.content}</p>
            </div>
        `;
        
        return reviewItem;
    }
    
    // Handle review sorting
    const sortSelect = document.getElementById('review-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // Reset page count and reload reviews
            currentPage = 1;
            
            // Clear existing reviews
            const reviewItems = document.querySelectorAll('.review-item');
            reviewItems.forEach(item => {
                if (!item.classList.contains('load-more')) {
                    item.remove();
                }
            });
            
            // Show load more button in case it was hidden
            if (loadMoreButton) {
                loadMoreButton.style.display = 'block';
            }
            
            // Load first page of sorted reviews
            loadMoreReviews(1);
        });
    }
}

// Product variant selection
function setupVariantSelection() {
    const variantButtons = document.querySelectorAll('.variant-btn');
    
    variantButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all variant buttons
            variantButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update product details based on selected variant
            updateProductDetails(this.textContent);
        });
    });
    
    // Product length dropdown
    const lengthSelect = document.getElementById('product-length');
    if (lengthSelect) {
        lengthSelect.addEventListener('change', function() {
            updateProductPrice();
        });
    }
    
    // Function to update product details based on selected variant
    function updateProductDetails(size) {
        // This would typically fetch product data via AJAX
        // For demonstration, we'll simulate the data update
        
        const productData = {
            '32mm': {
                price: 1499,
                originalPrice: 1799,
                sku: 'SP32G-6M',
                image: 'images/products/steel-pipe-32mm.jpg'
            },
            '48mm': {
                price: 1899,
                originalPrice: 2199,
                sku: 'SP48G-6M',
                image: 'images/products/steel-pipe-large.jpg'
            },
            '60mm': {
                price: 2299,
                originalPrice: 2599,
                sku: 'SP60G-6M',
                image: 'images/products/steel-pipe-60mm.jpg'
            },
            '76mm': {
                price: 2899,
                originalPrice: 3299,
                sku: 'SP76G-6M',
                image: 'images/products/steel-pipe-large.jpg'
            }
        };
        
        // Get data for selected size
        const data = productData[size];
        if (!data) return;
        
        // Update price
        document.querySelector('.current-price').textContent = `₹${data.price.toFixed(2)}`;
        document.querySelector('.original-price').textContent = `₹${data.originalPrice.toFixed(2)}`;
        
        // Calculate and update discount percentage
        const discount = Math.round((data.originalPrice - data.price) / data.originalPrice * 100);
        document.querySelector('.discount').textContent = `${discount}% OFF`;
        
        // Update SKU
        document.querySelector('.product-meta strong:contains("SKU")').nextSibling.textContent = `: ${data.sku}`;
        
        // Update product name
        document.getElementById('detail-product-name').textContent = `Galvanized Steel Pipe - ${size}`;
        document.getElementById('product-name').textContent = `Galvanized Steel Pipe - ${size}`;
        
        // Update main image if available
        const mainImage = document.getElementById('main-product-image');
        if (mainImage && data.image) {
            mainImage.src = data.image;
        }
    }
    
    // Function to update product price based on length and quantity
    function updateProductPrice() {
        const lengthSelect = document.getElementById('product-length');
        const quantityInput = document.getElementById('product-quantity');
        
        if (!lengthSelect || !quantityInput) return;
        
        const selectedLength = lengthSelect.value;
        const quantity = parseInt(quantityInput.value);
        
        // Get base price
        let basePrice = parseFloat(document.querySelector('.current-price').textContent.replace('₹', ''));
        let originalPrice = parseFloat(document.querySelector('.original-price').textContent.replace('₹', ''));
        
        // Adjust price based on length
        let lengthMultiplier = 1;
        switch (selectedLength) {
            case '3m':
                lengthMultiplier = 0.5;  // Half the price for half the length
                break;
            case '6m':
                lengthMultiplier = 1;    // Base price for standard length
                break;
            case '9m':
                lengthMultiplier = 1.5;  // 1.5x price for 1.5x length
                break;
            default:
                lengthMultiplier = 1;
        }
        
        // Calculate adjusted prices
        const adjustedPrice = basePrice * lengthMultiplier;
        const adjustedOriginalPrice = originalPrice * lengthMultiplier;
        
        // Update displayed prices
        document.querySelector('.current-price').textContent = `₹${adjustedPrice.toFixed(2)}`;
        document.querySelector('.original-price').textContent = `₹${adjustedOriginalPrice.toFixed(2)}`;
    }
}

// Add to cart functionality
function setupAddToCart() {
    const addToCartBtn = document.getElementById('add-to-cart');
    const buyNowBtn = document.getElementById('buy-now');
    
    // Add to cart button
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productData = getProductData();
            addProductToCart(productData);
        });
    }
    
    // Buy now button
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const productData = getProductData();
            addProductToCart(productData);
            // Redirect to checkout page
            window.location.href = 'checkout.php';
        });
    }
    
    // Function to get current product data
    function getProductData() {
        const productName = document.getElementById('detail-product-name').textContent;
        const productPrice = document.querySelector('.current-price').textContent;
        const productSize = document.querySelector('.variant-btn.active').textContent;
        const productLength = document.getElementById('product-length').value;
        const productQuantity = document.getElementById('product-quantity').value;
        const productSku = document.querySelector('.product-meta strong:contains("SKU")').nextSibling.textContent.trim().replace(': ', '');
        
        return {
            id: productSku,
            name: productName,
            price: productPrice,
            size: productSize,
            length: productLength,
            quantity: parseInt(productQuantity),
            image: document.getElementById('main-product-image').src
        };
    }
    
    // Function to add product to cart
    function addProductToCart(productData) {
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'add-to-cart.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        // Show success message
                        showNotification('Product added to cart', 'success');
                        
                        // Update cart count in header if it exists
                        const cartCountElement = document.querySelector('.cart-count');
                        if (cartCountElement) {
                            cartCountElement.textContent = response.cartCount;
                        }
                    } else {
                        showNotification('Error adding product to cart: ' + response.message, 'error');
                    }
                } catch (e) {
                    showNotification('Error processing response', 'error');
                }
            } else {
                showNotification('Error adding product to cart. Please try again.', 'error');
            }
        };
        
        xhr.onerror = function() {
            showNotification('Network error occurred. Please try again.', 'error');
        };
        
        xhr.send(JSON.stringify(productData));
    }
    
    // Function to show notification
    function showNotification(message, type) {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector('.notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'notification-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', function() {
            notification.remove();
        });
        
        notification.appendChild(closeBtn);
        
        // Add notification to container
        notificationContainer.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Wishlist functionality
function setupWishlist() {
    const wishlistBtn = document.getElementById('add-to-wishlist');
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            // Toggle heart icon
            const heartIcon = this.querySelector('i');
            
            if (heartIcon.classList.contains('far')) {
                // Add to wishlist
                addToWishlist();
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas');
            } else {
                // Remove from wishlist
                removeFromWishlist();
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');
            }
        });
    }
    
    // Function to add product to wishlist
    function addToWishlist() {
        const productId = getProductId();
        
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'add-to-wishlist.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        showNotification('Product added to wishlist', 'success');
                    } else {
                        showNotification(response.message || 'Error adding to wishlist', 'error');
                    }
                } catch (e) {
                    console.error('Error parsing response', e);
                }
            }
        };
        
        xhr.send(`product_id=${productId}`);
    }
    
    // Function to remove product from wishlist
    function removeFromWishlist() {
        const productId = getProductId();
        
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'remove-from-wishlist.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        showNotification('Product removed from wishlist', 'success');
                    } else {
                        showNotification(response.message || 'Error removing from wishlist', 'error');
                    }
                } catch (e) {
                    console.error('Error parsing response', e);
                }
            }
        };
        
        xhr.send(`product_id=${productId}`);
    }
}

// Related products functionality
function setupRelatedProducts() {
    const relatedProductCards = document.querySelectorAll('.related-products .product-card');
    
    relatedProductCards.forEach(card => {
        // Quick view button
        const quickViewBtn = card.querySelector('.action-btn:nth-child(3)');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', function() {
                const productName = card.querySelector('h3').textContent;
                const productImage = card.querySelector('.product-image img').src;
                
                showQuickView(productName, productImage);
            });
        }
        
        // Add to cart button
        const addToCartBtn = card.querySelector('.action-btn:nth-child(1)');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                const productName = card.querySelector('h3').textContent;
                const productPrice = card.querySelector('.current-price').textContent;
                
                // Add related product to cart
                addRelatedProductToCart(productName, productPrice);
            });
        }
        
        // Wishlist button
        const wishlistBtn = card.querySelector('.action-btn:nth-child(2)');
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                // Toggle heart icon
                const heartIcon = this.querySelector('i');
                
                if (heartIcon.classList.contains('far')) {
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                    
                    // Add to wishlist logic here
                    showNotification('Product added to wishlist', 'success');
                } else {
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                    
                    // Remove from wishlist logic here
                    showNotification('Product removed from wishlist', 'success');
                }
            });
        }
        
        // Make entire card clickable
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            // Redirect to product page
            window.location.href = `product-details.php?product=${encodeURIComponent(productName)}`;
        });
    });
    
    // Function to show quick view modal
    function showQuickView(productName, productImage) {
        // Check if modal container already exists
        let modalContainer = document.querySelector('.modal-container');
        
        if (!modalContainer) {
            // Create modal container
            modalContainer = document.createElement('div');
            modalContainer.className = 'modal-container';
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'quick-view-modal';
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', function() {
                modalContainer.remove();
            });
            
            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            modalContent.innerHTML = `
                <div class="quick-view-image">
                    <img src="${productImage}" alt="${productName}">
                </div>
                <div class="quick-view-info">
                    <h2>${productName}</h2>
                    <p>Quick view content here...</p>
                    <button class="primary-btn">View Full Details</button>
                </div>
            `;
            
            // Assemble modal
            modal.appendChild(closeBtn);
            modal.appendChild(modalContent);
            modalContainer.appendChild(modal);
            
            // Add to body
            document.body.appendChild(modalContainer);
            
            // Close modal when clicking outside
            modalContainer.addEventListener('click', function(event) {
                if (event.target === modalContainer) {
                    modalContainer.remove();
                }
            });
            
            // View full details button
            const viewDetailsBtn = modalContent.querySelector('.primary-btn');
            viewDetailsBtn.addEventListener('click', function() {
                window.location.href = `product-details.php?product=${encodeURIComponent(productName)}`;
            });
        }
    }
    
    // Function to add related product to cart
    function addRelatedProductToCart(productName, productPrice) {
        // Create basic product data
        const productData = {
            name: productName,
            price: productPrice,
            quantity: 1
        };
        
        // Create AJAX request (reuse the same logic as main product)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'add-to-cart.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    const response = JSON.parse(this.responseText);
                    if (response.success) {
                        showNotification('Product added to cart', 'success');
                        
                        // Update cart count in header if it exists
                        const cartCountElement = document.querySelector('.cart-count');
                        if (cartCountElement) {
                            cartCountElement.textContent = response.cartCount;
                        }
                    } else {
                        showNotification('Error adding product to cart: ' + response.message, 'error');
                    }
                } catch (e) {
                    showNotification('Error processing response', 'error');
                }
            }
        };
        
        xhr.send(JSON.stringify(productData));
    }
    
    // Function to show notification (reusing from earlier)
    function showNotification(message, type) {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector('.notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'notification-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', function() {
            notification.remove();
        });
        
        notification.appendChild(closeBtn);
        
        // Add notification to container
        notificationContainer.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Helper function to get product ID from URL or page
function getProductId() {
    // Try to get from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        return productId;
    }
    
    // Try to get from SKU on page
    const skuElement = document.querySelector('.product-meta strong:contains("SKU")');
    if (skuElement) {
        const sku = skuElement.nextSibling.textContent.trim().replace(': ', '');
        return sku;
    }
    
    // Fallback
    return 'SP48G-6M';
}

// Add a jQuery-like contains selector for vanilla JS
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!document.querySelectorAll) {
    document.querySelectorAll = function(selector) {
        return document.querySelector(selector);
    };
}

// Add a custom selector for "contains"
document.querySelectorAll = (function(_querySelectorAll) {
    return function(selector) {
        if (selector.includes(':contains')) {
            // Parse the contains part
            const parts = selector.split(':contains(');
            const baseSelector = parts[0];
            const searchText = parts[1].slice(0, -1);
            
            // Get base elements
            const elements = _querySelectorAll.call(this, baseSelector);
            const results = [];
            
            // Filter elements that contain the text
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].textContent.includes(searchText)) {
                    results.push(elements[i]);
                }
            }
            
            return results;
        }
        
        return _querySelectorAll.call(this, selector);
    };
})(document.querySelectorAll);