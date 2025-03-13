<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart - Steel Products</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/cart.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <!-- Header Section -->
    <?php include 'header.php'; ?>
    
    <!-- Cart Section -->
    <section class="cart-section">
        <div class="container">
            <div class="page-title">
                <h1>Shopping Cart</h1>
            </div>
            
            <div class="cart-container">
                <!-- Cart Items -->
                <div class="cart-items">
                    <div class="cart-header">
                        <div class="cart-row">
                            <div class="cart-col product-col">Product</div>
                            <div class="cart-col price-col">Price</div>
                            <div class="cart-col quantity-col">Quantity</div>
                            <div class="cart-col total-col">Total</div>
                            <div class="cart-col action-col"></div>
                        </div>
                    </div>
                    
                    <div class="cart-body">
                        <!-- Cart Item 1 -->
                        <div class="cart-row cart-item">
                            <div class="cart-col product-col">
                                <div class="cart-product">
                                    <img src="images/products/steel-pipe-large.jpg" alt="Galvanized Steel Pipe">
                                    <div class="cart-product-info">
                                        <h3>Galvanized Steel Pipe - 48mm</h3>
                                        <p>Length: 6 meters</p>
                                        <p>SKU: SP48G-6M</p>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-col price-col">
                                <span class="item-price">₹1,899.00</span>
                            </div>
                            <div class="cart-col quantity-col">
                                <div class="quantity-controls">
                                    <button class="qty-btn minus">-</button>
                                    <input type="number" class="qty-input" value="2" min="1">
                                    <button class="qty-btn plus">+</button>
                                </div>
                            </div>
                            <div class="cart-col total-col">
                                <span class="item-total">₹3,798.00</span>
                            </div>
                            <div class="cart-col action-col">
                                <button class="remove-btn"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        
                        <!-- Cart Item 2 -->
                        <div class="cart-row cart-item">
                            <div class="cart-col product-col">
                                <div class="cart-product">
                                    <img src="images/products/steel-elbow.jpg" alt="Steel Elbow Joint">
                                    <div class="cart-product-info">
                                        <h3>Steel Elbow Joint - 48mm</h3>
                                        <p>90-degree angle</p>
                                        <p>SKU: EL48-90</p>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-col price-col">
                                <span class="item-price">₹399.00</span>
                            </div>
                            <div class="cart-col quantity-col">
                                <div class="quantity-controls">
                                    <button class="qty-btn minus">-</button>
                                    <input type="number" class="qty-input" value="4" min="1">
                                    <button class="qty-btn plus">+</button>
                                </div>
                            </div>
                            <div class="cart-col total-col">
                                <span class="item-total">₹1,596.00</span>
                            </div>
                            <div class="cart-col action-col">
                                <button class="remove-btn"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cart-actions">
                        <button id="continue-shopping" class="secondary-btn"><i class="fas fa-arrow-left"></i> Continue Shopping</button>
                        <button id="update-cart" class="primary-btn">Update Cart</button>
                    </div>
                </div>
                
                <!-- Cart Summary -->
                <div class="cart-summary">
                    <h2>Order Summary</h2>
                    
                    <div class="summary-item">
                        <span>Subtotal</span>
                        <span>₹5,394.00</span>
                    </div>
                    
                    <div class="coupon-section">
                        <h3>Apply Coupon</h3>
                        <div class="coupon-form">
                            <input type="text" placeholder="Enter coupon code">
                            <button class="apply-btn">Apply</button>
                        </div>
                    </div>
                    
                    <div class="summary-item">
                        <span>Shipping</span>
                        <span>₹750.00</span>
                    </div>
                    
                    <div class="summary-item">
                        <span>Tax (18% GST)</span>
                        <span>₹970.92</span>
                    </div>
                    
                    <div class="summary-total">
                        <span>Total</span>
                        <span>₹7,114.92</span>
                    </div>
                    
                    <button id="proceed-checkout" class="checkout-btn">Proceed to Checkout</button>
                    
                    <div class="payment-icons">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fab fa-google-pay"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Checkout Section (Initially Hidden, shown when proceeding to checkout) -->
    <section class="checkout-section" style="display: none;">
        <div class="container">
            <div class="page-title">
                <h1>Checkout</h1>
            </div>
            
            <div class="checkout-container">
                <div class="checkout-progress">
                    <div class="progress-step active">
                        <div class="step-number">1</div>
                        <div class="step-label">Shipping</div>
                    </div>
                    <div class="progress-line"></div>
                    <div class="progress-step">
                        <div class="step-number">2</div>
                        <div class="step-label">Payment</div>
                    </div>
                    <div class="progress-line"></div>
                    <div class="progress-step">
                        <div class="step-number">3</div>
                        <div class="step-label">Review</div>
                    </div>
                </div>
                
                <div class="checkout-content">
                    <!-- Step 1: Shipping Information -->
                    <div class="checkout-step shipping-step active">
                        <h2>Shipping Information</h2>
                        
                        <div class="login-prompt">
                            <p>Already have an account? <a href="#" id="login-link">Login</a></p>
                        </div>
                        
                        <div class="shipping-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstname">First Name *</label>
                                    <input type="text" id="firstname" required>
                                </div>
                                <div class="form-group">
                                    <label for="lastname">Last Name *</label>
                                    <input type="text" id="lastname" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="address">Address Line 1 *</label>
                                <input type="text" id="address" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="address2">Address Line 2</label>
                                <input type="text" id="address2">
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="city">City *</label>
                                    <input type="text" id="city" required>
                                </div>
                                <div class="form-group">
                                    <label for="state">State *</label>
                                    <select id="state" required>
                                        <option value="">Select State</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <!-- Add more states as needed -->
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="pincode">PIN Code *</label>
                                    <input type="text" id="pincode" required>
                                </div>
                                <div class="form-group">
                                    <label for="country">Country *</label>
                                    <select id="country" required>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-group checkbox">
                                <input type="checkbox" id="save-address">
                                <label for="save-address">Save this address for future orders</label>
                            </div>
                            
                            <div class="form-group checkbox">
                                <input type="checkbox" id="create-account">
                                <label for="create-account">Create an account for faster checkout</label>
                            </div>
                            
                            <div class="shipping-options">
                                <h3>Shipping Method</h3>
                                
                                <div class="shipping-option">
                                    <input type="radio" name="shipping" id="standard-shipping" checked>
                                    <label for="standard-shipping">
                                        <div class="option-info">
                                            <span class="option-name">Standard Shipping</span>
                                            <span class="option-desc">3-5 business days</span>
                                        </div>
                                        <span class="option-price">₹750.00</span>
                                    </label>
                                </div>
                                
                                <div class="shipping-option">
                                    <input type="radio" name="shipping" id="express-shipping">
                                    <label for="express-shipping">
                                        <div class="option-info">
                                            <span class="option-name">Express Shipping</span>
                                            <span class="option-desc">1-2 business days</span>
                                        </div>
                                        <span class="option-price">₹1,200.00</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="form-actions">
                                <button id="continue-to-payment" class="primary-btn">Continue to Payment</button>
                                <button id="back-to-cart" class="secondary-btn">Back to Cart</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 2: Payment Information (Initially Hidden) -->
                    <div class="checkout-step payment-step">
                        <h2>Payment Information</h2>
                        
                        <div class="payment-options">
                            <div class="payment-option">
                                <input type="radio" name="payment" id="card-payment" checked>
                                <label for="card-payment">Credit/Debit Card</label>
                                
                                <div class="payment-form card-form">
                                    <div class="form-group">
                                        <label for="card-name">Name on Card *</label>
                                        <input type="text" id="card-name" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="card-number">Card Number *</label>
                                        <div class="card-input-wrapper">
                                            <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required>
                                            <div class="card-icons">
                                                <i class="fab fa-cc-visa"></i>
                                                <i class="fab fa-cc-mastercard"></i>
                                                <i class="fab fa-cc-amex"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="expiry-date">Expiry Date *</label>
                                            <input type="text" id="expiry-date" placeholder="MM/YY" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="cvv">CVV *</label>
                                            <input type="text" id="cvv" placeholder="XXX" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="payment-option">
                                <input type="radio" name="payment" id="upi-payment">
                                <label for="upi-payment">UPI Payment</label>
                                
                                <div class="payment-form upi-form">
                                    <div class="form-group">
                                        <label for="upi-id">UPI ID *</label>
                                        <input type="text" id="upi-id" placeholder="yourname@upi">
                                    </div>
                                    
                                    <div class="upi-apps">
                                        <button class="upi-app-btn">
                                            <img src="images/payments/gpay.png" alt="Google Pay">
                                        </button>
                                        <button class="upi-app-btn">
                                            <img src="images/payments/phonepe.png" alt="PhonePe">
                                        </button>
                                        <button class="upi-app-btn">
                                            <img src="images/payments/paytm.png" alt="Paytm">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="payment-option">
                                <input type="radio" name="payment" id="netbanking-payment">
                                <label for="netbanking-payment">Net Banking</label>
                                
                                <div class="payment-form netbanking-form">
                                    <div class="form-group">
                                        <label for="bank-select">Select Bank *</label>
                                        <select id="bank-select">
                                            <option value="">Select Bank</option>
                                            <option value="sbi">State Bank of India</option>
                                            <option value="hdfc">HDFC Bank</option>
                                            <option value="icici">ICICI Bank</option>
                                            <option value="axis">Axis Bank</option>
                                            <option value="kotak">Kotak Mahindra Bank</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button id="continue-to-review" class="primary-btn">Continue to Review</button>
                            <button id="back-to-shipping" class="secondary-btn">Back to Shipping</button>
                        </div>
                    </div>
                    
                    <!-- Step 3: Order Review (Initially Hidden) -->
                    <div class="checkout-step review-step">
                        <h2>Review Order</h2>
                        
                        <div class="review-sections">
                            <div class="review-section">
                                <div class="section-header">
                                    <h3>Shipping Address</h3>
                                    <button class="edit-btn">Edit</button>
                                </div>
                                <div class="section-content">
                                    <p><strong>John Doe</strong></p>
                                    <p>123 Steel Avenue, Industrial Area</p>
                                    <p>Mumbai, Maharashtra 400001</p>
                                    <p>India</p>
                                    <p>Phone: +91 9876543210</p>
                                </div>
                            </div>
                            
                            <div class="review-section">
                                <div class="section-header">
                                    <h3>Payment Method</h3>
                                    <button class="edit-btn">Edit</button>
                                </div>
                                <div class="section-content">
                                    <p><i class="fab fa-cc-visa"></i> Visa ending in 4242</p>
                                    <p>Expiry: 12/25</p>
                                </div>
                            </div>
                            
                            <div class="review-section">
                                <div class="section-header">
                                    <h3>Shipping Method</h3>
                                    <button class="edit-btn">Edit</button>
                                </div>
                                <div class="section-content">
                                    <p>Standard Shipping (3-5 business days)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="order-items">
                            <h3>Order Items</h3>
                            
                            <div class="review-item">
                                <div class="item-image">
                                    <img src="images/products/steel-pipe-large.jpg" alt="Galvanized Steel Pipe">
                                </div>
                                <div class="item-details">
                                    <h4>Galvanized Steel Pipe - 48mm</h4>
                                    <p>Length: 6 meters</p>
                                    <p>Quantity: 2</p>
                                </div>
                                <div class="item-price">₹3,798.00</div>
                            </div>
                            
                            <div class="review-item">
                                <div class="item-image">
                                    <img src="images/products/steel-elbow.jpg" alt="Steel Elbow Joint">
                                </div>
                                <div class="item-details">
                                    <h4>Steel Elbow Joint - 48mm</h4>
                                    <p>90-degree angle</p>
                                    <p>Quantity: 4</p>
                                </div>
                                <div class="item-price">₹1,596.00</div>
                            </div>
                        </div>
                        
                        <div class="order-summary">
                            <div class="summary-row">
                                <span>Subtotal</span>
                                <span>₹5,394.00</span>
                            </div>
                            <div class="summary-row">
                                <span>Shipping</span>
                                <span>₹750.00</span>
                            </div>
                            <div class="summary-row">
                                <span>Tax (18% GST)</span>
                                <span>₹970.92</span>
                            </div>
                            <div class="summary-row total">
                                <span>Order Total</span>
                                <span>₹7,114.92</span>
                            </div>
                        </div>
                        
                        <div class="form-group checkbox terms">
                            <input type="checkbox" id="terms-agree" required>
                            <label for="terms-agree">I agree to the <a href="terms.php">Terms & Conditions</a> and <a href="privacy.php">Privacy Policy</a></label>
                        </div>
                        
                        <div class="form-actions">
                            <button id="place-order" class="primary-btn">Place Order</button>
                            <button id="back-to-payment-review" class="secondary-btn">Back</button>
                        </div>
                    </div>
                </div>
                
                <!-- Order Summary (visible on all steps) -->
                <div class="checkout-summary">
                    <h2>Order Summary</h2>
                    
                    <div class="summary-items">
                        <div class="summary-item">
                            <div class="item-info">
                                <span class="item-name">Galvanized Steel Pipe - 48mm</span>
                                <span class="item-qty">× 2</span>
                            </div>
                            <span class="item-price">₹3,798.00</span>
                        </div>
                        
                        <div class="summary-item">
                            <div class="item-info">
                                <span class="item-name">Steel Elbow Joint - 48mm</span>
                                <span class="item-qty">× 4</span>
                            </div>
                            <span class="item-price">₹1,596.00</span>
                        </div>
                    </div>
                    
                    <div class="summary-calculations">
                        <div class="calc-row">
                            <span>Subtotal</span>
                            <span>₹5,394.00</span>
                        </div>
                        <div class="calc-row">
                            <span>Shipping</span>
                            <span>₹750.00</span>
                        </div>
                        <div class="calc-row">
                            <span>Tax (18% GST)</span>
                            <span>₹970.92</span>
                        </div>
                    </div>
                    
                    <div class="summary-total">
                        <span>Total</span>
                        <span>₹7,114.92</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Order Confirmation (Initially Hidden) -->
    <section class="order-confirmation" style="display: none;">
        <div class="container">
            <div class="confirmation-box">
                <div class="check-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                
                <h1>Thank You For Your Order!</h1>
                
                <p>Your order has been placed successfully.</p>
                <p>Order ID: <strong>#STL78945612</strong></p>
                
                <p class="confirmation-message">
                    We have sent an order confirmation email to <strong>john.doe@example.com</strong> with all the details.
                    Our team will process your order soon.
                </p>
                
                <div class="order-details">
                    <h3>Order Details</h3>
                    
                    <div class="detail-row">
                        <span>Order Date:</span>
                        <span><?php echo date('d M, Y'); ?></span>
                    </div>
                    
                    <div class="detail-row">
                        <span>Payment Method:</span>
                        <span>Credit Card (Visa ending in 4242)</span>
                    </div>
                    
                    <div class="detail-row">
                        <span>Shipping Method:</span>
                        <span>Standard Shipping (3-5 business days)</span>
                    </div>
                    
                    <div class="detail-row">
                        <span>Estimated Delivery:</span>
                        <span><?php echo date('d M, Y', strtotime('+5 days')); ?></span>
                    </div>
                </div>
                
                <div class="confirmation-actions">
                    <a href="dashboard.php" class="primary-btn">View Order in Dashboard</a>
                    <a href="index.php" class="secondary-btn">Continue Shopping</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer Section -->
    <?php include 'footer.php'; ?>
    
    <script src="js/mian.js"></script>
    <script src="js/cart.js"></script>
</body>
</html>