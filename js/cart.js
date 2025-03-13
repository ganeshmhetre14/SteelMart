// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    initCartFunctionality();
    
    // Checkout process
    initCheckoutProcess();
});

function initCartFunctionality() {
    // Get all quantity buttons
    const minusBtns = document.querySelectorAll('.qty-btn.minus');
    const plusBtns = document.querySelectorAll('.qty-btn.plus');
    const qtyInputs = document.querySelectorAll('.qty-input');
    const removeBtns = document.querySelectorAll('.remove-btn');
    const updateCartBtn = document.getElementById('update-cart');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    
    // Quantity decrease functionality
    minusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 1) {
                value--;
                input.value = value;
                updateItemTotal(input);
            }
        });
    });
    
    // Quantity increase functionality
    plusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            value++;
            input.value = value;
            updateItemTotal(input);
        });
    });
    
    // Quantity input change
    qtyInputs.forEach(input => {
        input.addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value < 1 || isNaN(value)) {
                this.value = 1;
            }
            updateItemTotal(this);
        });
    });
    
    // Remove item functionality
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.style.opacity = '0.5';
            setTimeout(() => {
                cartItem.remove();
                updateCartTotals();
            }, 500);
        });
    });
    
    // Update cart button
    if (updateCartBtn) {
        updateCartBtn.addEventListener('click', function() {
            updateCartTotals();
            showNotification('Cart updated successfully!');
        });
    }
    
    // Continue shopping button
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
            // Redirect to products page (would normally link to a real URL)
            window.location.href = 'products.php';
        });
    }
    
    // Proceed to checkout button
    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener('click', function() {
            // Hide cart section and show checkout section
            document.querySelector('.cart-section').style.display = 'none';
            document.querySelector('.checkout-section').style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    // Apply coupon button
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            const couponInput = this.previousElementSibling;
            const couponCode = couponInput.value.trim();
            
            if (couponCode === '') {
                showNotification('Please enter a coupon code.', 'error');
                return;
            }
            
            // Mock coupon validation - would be server-side in real app
            if (couponCode.toUpperCase() === 'STEEL10') {
                // Apply 10% discount
                showNotification('Coupon applied successfully! 10% discount.', 'success');
                
                // Update summary with discount
                const subtotalElem = document.querySelector('.summary-item:first-child span:last-child');
                const subtotal = parseFloat(subtotalElem.textContent.replace('₹', '').replace(',', ''));
                const discount = subtotal * 0.1;
                
                // Add discount row if it doesn't exist
                if (!document.querySelector('.discount-row')) {
                    const discountHtml = `
                        <div class="summary-item discount-row">
                            <span>Discount (10%)</span>
                            <span>-₹${discount.toFixed(2)}</span>
                        </div>
                    `;
                    subtotalElem.closest('.summary-item').insertAdjacentHTML('afterend', discountHtml);
                    
                    // Update totals
                    updateCartTotals();
                }
            } else {
                showNotification('Invalid coupon code. Please try again.', 'error');
            }
        });
    }
}

function updateItemTotal(inputElem) {
    const cartItem = inputElem.closest('.cart-item');
    const priceElem = cartItem.querySelector('.item-price');
    const totalElem = cartItem.querySelector('.item-total');
    
    const price = parseFloat(priceElem.textContent.replace('₹', '').replace(',', ''));
    const quantity = parseInt(inputElem.value);
    
    const total = price * quantity;
    totalElem.textContent = `₹${total.toFixed(2)}`;
    
    updateCartTotals();
}

function updateCartTotals() {
    // Get all item totals
    const itemTotals = document.querySelectorAll('.item-total');
    let subtotal = 0;
    
    // Calculate subtotal
    itemTotals.forEach(item => {
        subtotal += parseFloat(item.textContent.replace('₹', '').replace(',', ''));
    });
    
    // Update subtotal in summary
    const subtotalElem = document.querySelector('.summary-item:first-child span:last-child');
    subtotalElem.textContent = `₹${subtotal.toFixed(2)}`;
    
    // Check if discount is applied
    const discountRow = document.querySelector('.discount-row');
    let discountAmount = 0;
    
    if (discountRow) {
        discountAmount = parseFloat(discountRow.querySelector('span:last-child').textContent
            .replace('₹', '').replace(',', '').replace('-', ''));
    }
    
    // Update shipping based on subtotal
    const shippingElem = document.querySelector('.summary-item:nth-child(3) span:last-child');
    let shipping = subtotal > 10000 ? 0 : 750;
    shippingElem.textContent = shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`;
    
    // Calculate tax (18% GST)
    const taxable = subtotal - discountAmount;
    const tax = taxable * 0.18;
    
    // Update tax in summary
    const taxElem = document.querySelector('.summary-item:nth-child(4) span:last-child');
    taxElem.textContent = `₹${tax.toFixed(2)}`;
    
    // Calculate total
    const total = taxable + tax + shipping;
    
    // Update total in summary
    const totalElem = document.querySelector('.summary-total span:last-child');
    totalElem.textContent = `₹${total.toFixed(2)}`;
    
    // Also update checkout summary if it exists
    updateCheckoutSummary(subtotal, discountAmount, shipping, tax, total);
}

function updateCheckoutSummary(subtotal, discount, shipping, tax, total) {
    const checkoutSummary = document.querySelector('.checkout-summary');
    
    if (checkoutSummary) {
        // Update subtotal
        const subtotalElem = checkoutSummary.querySelector('.calc-row:first-child span:last-child');
        if (subtotalElem) subtotalElem.textContent = `₹${subtotal.toFixed(2)}`;
        
        // Update shipping
        const shippingElem = checkoutSummary.querySelector('.calc-row:nth-child(2) span:last-child');
        if (shippingElem) shippingElem.textContent = shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`;
        
        // Update tax
        const taxElem = checkoutSummary.querySelector('.calc-row:nth-child(3) span:last-child');
        if (taxElem) taxElem.textContent = `₹${tax.toFixed(2)}`;
        
        // Update total
        const totalElem = checkoutSummary.querySelector('.summary-total span:last-child');
        if (totalElem) totalElem.textContent = `₹${total.toFixed(2)}`;
    }
}

function initCheckoutProcess() {
    // Get checkout steps
    const shippingStep = document.querySelector('.shipping-step');
    const paymentStep = document.querySelector('.payment-step');
    const reviewStep = document.querySelector('.review-step');
    
    // Get progress indicators
    const progressSteps = document.querySelectorAll('.progress-step');
    
    // Get navigation buttons
    const backToCartBtn = document.getElementById('back-to-cart');
    const continueToPaymentBtn = document.getElementById('continue-to-payment');
    const backToShippingBtn = document.getElementById('back-to-shipping');
    const continueToReviewBtn = document.getElementById('continue-to-review');
    const backToPaymentReviewBtn = document.getElementById('back-to-payment-review');
    const placeOrderBtn = document.getElementById('place-order');
    
    // Back to cart button
    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', function() {
            document.querySelector('.checkout-section').style.display = 'none';
            document.querySelector('.cart-section').style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
// Continue to payment button
if (continueToPaymentBtn) {
    continueToPaymentBtn.addEventListener('click', function() {
        // Validate shipping information
        if (validateShippingInfo()) {
            // Hide shipping step and show payment step
            shippingStep.style.display = 'none';
            paymentStep.style.display = 'block';
            
            // Update progress indicator
            progressSteps[0].classList.add('completed');
            progressSteps[1].classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    });
}

// Back to shipping button
if (backToShippingBtn) {
    backToShippingBtn.addEventListener('click', function() {
        // Hide payment step and show shipping step
        paymentStep.style.display = 'none';
        shippingStep.style.display = 'block';
        
        // Update progress indicator
        progressSteps[1].classList.remove('active');
        progressSteps[0].classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
}

// Continue to review button
if (continueToReviewBtn) {
    continueToReviewBtn.addEventListener('click', function() {
        // Validate payment information
        if (validatePaymentInfo()) {
            // Hide payment step and show review step
            paymentStep.style.display = 'none';
            reviewStep.style.display = 'block';
            
            // Update progress indicator
            progressSteps[1].classList.add('completed');
            progressSteps[2].classList.add('active');
            
            // Update order summary with user details
            updateOrderSummary();
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    });
}

// Back to payment from review button
if (backToPaymentReviewBtn) {
    backToPaymentReviewBtn.addEventListener('click', function() {
        // Hide review step and show payment step
        reviewStep.style.display = 'none';
        paymentStep.style.display = 'block';
        
        // Update progress indicator
        progressSteps[2].classList.remove('active');
        progressSteps[1].classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
}

// Place order button
if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', function() {
        // Show loading state
        this.textContent = 'Processing...';
        this.disabled = true;
        
        // Simulate order processing (would connect to server in real app)
        setTimeout(() => {
            // Redirect to order confirmation page
            window.location.href = 'order-confirmation.php';
        }, 2000);
    });
}
}

function validateShippingInfo() {
// Get all required shipping fields
const fullName = document.getElementById('fullName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zipCode');
const phone = document.getElementById('phone');

// Array to store error messages
let errors = [];

// Validate each field
if (!fullName.value.trim()) {
    errors.push('Full name is required');
    fullName.classList.add('error');
} else {
    fullName.classList.remove('error');
}

if (!address.value.trim()) {
    errors.push('Address is required');
    address.classList.add('error');
} else {
    address.classList.remove('error');
}

if (!city.value.trim()) {
    errors.push('City is required');
    city.classList.add('error');
} else {
    city.classList.remove('error');
}

if (!state.value.trim()) {
    errors.push('State is required');
    state.classList.add('error');
} else {
    state.classList.remove('error');
}

if (!zipCode.value.trim()) {
    errors.push('ZIP code is required');
    zipCode.classList.add('error');
} else if (!/^\d{6}$/.test(zipCode.value.trim())) {
    errors.push('Please enter a valid 6-digit ZIP code');
    zipCode.classList.add('error');
} else {
    zipCode.classList.remove('error');
}

if (!phone.value.trim()) {
    errors.push('Phone number is required');
    phone.classList.add('error');
} else if (!/^\d{10}$/.test(phone.value.trim())) {
    errors.push('Please enter a valid 10-digit phone number');
    phone.classList.add('error');
} else {
    phone.classList.remove('error');
}

// Display error messages if any
if (errors.length > 0) {
    showNotification(errors.join('<br>'), 'error');
    return false;
}

return true;
}

function validatePaymentInfo() {
// Get payment method
const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

if (!paymentMethod) {
    showNotification('Please select a payment method', 'error');
    return false;
}

// Credit card validation
if (paymentMethod.value === 'credit-card') {
    const cardNumber = document.getElementById('cardNumber');
    const cardName = document.getElementById('cardName');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
    
    let errors = [];
    
    if (!cardNumber.value.trim()) {
        errors.push('Card number is required');
        cardNumber.classList.add('error');
    } else if (!/^\d{16}$/.test(cardNumber.value.replace(/\s/g, ''))) {
        errors.push('Please enter a valid 16-digit card number');
        cardNumber.classList.add('error');
    } else {
        cardNumber.classList.remove('error');
    }
    
    if (!cardName.value.trim()) {
        errors.push('Cardholder name is required');
        cardName.classList.add('error');
    } else {
        cardName.classList.remove('error');
    }
    
    if (!expiryDate.value.trim()) {
        errors.push('Expiry date is required');
        expiryDate.classList.add('error');
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate.value.trim())) {
        errors.push('Please enter a valid expiry date (MM/YY)');
        expiryDate.classList.add('error');
    } else {
        expiryDate.classList.remove('error');
    }
    
    if (!cvv.value.trim()) {
        errors.push('CVV is required');
        cvv.classList.add('error');
    } else if (!/^\d{3,4}$/.test(cvv.value.trim())) {
        errors.push('Please enter a valid CVV');
        cvv.classList.add('error');
    } else {
        cvv.classList.remove('error');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
}

return true;
}

function updateOrderSummary() {
// Get customer details
const fullName = document.getElementById('fullName').value;
const address = document.getElementById('address').value;
const city = document.getElementById('city').value;
const state = document.getElementById('state').value;
const zipCode = document.getElementById('zipCode').value;
const phone = document.getElementById('phone').value;

// Update shipping address summary
const addressSummary = document.querySelector('.address-summary');
if (addressSummary) {
    addressSummary.innerHTML = `
        <p><strong>${fullName}</strong></p>
        <p>${address}</p>
        <p>${city}, ${state} ${zipCode}</p>
        <p>Phone: ${phone}</p>
    `;
}

// Get payment method
const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

// Update payment method summary
const paymentSummary = document.querySelector('.payment-summary');
if (paymentSummary) {
    if (paymentMethod === 'credit-card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const lastFour = cardNumber.slice(-4);
        paymentSummary.textContent = `Credit Card ending in ${lastFour}`;
    } else if (paymentMethod === 'paypal') {
        paymentSummary.textContent = 'PayPal';
    } else if (paymentMethod === 'upi') {
        paymentSummary.textContent = 'UPI';
    } else if (paymentMethod === 'cod') {
        paymentSummary.textContent = 'Cash on Delivery';
    }
}
}

function showNotification(message, type = 'success') {
// Create notification element
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.innerHTML = message;

// Add notification to document
document.body.appendChild(notification);

// Show notification
setTimeout(() => {
    notification.classList.add('show');
}, 10);

// Hide notification after 5 seconds
setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}, 5000);
}