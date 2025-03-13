<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details - Steel Products</title>
    <link rel="stylesheet" href="css/product-details.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <!-- Header Section -->
    <?php include 'header.php'; ?>
    
    <!-- Product Details Section -->
    <section class="product-details-container">
        <div class="container">
            
            
            <div class="product-detail-wrapper">
                <div class="product-images">
                    <div class="main-image">
                        <img id="main-product-image" src="img/products/steel_pipe_304.jpg" alt="Galvanized Steel Pipe">
                    </div>
                    <div class="thumbnail-images">
                        <img src="img/products/steel_pipe_304.jpg" alt="Steel Pipe View 1" onclick="changeImage(this)">
                        <img src="img/products/steel_pipes/p1.jpeg" alt="Steel Pipe View 2" onclick="changeImage(this)">
                        <img src="img/products/steel_pipes/p2.jpg" alt="Steel Pipe View 3" onclick="changeImage(this)">
                        <img src="img/products/steel_pipes/p2.jpg" alt="Steel Pipe View 4" onclick="changeImage(this)">
                    </div>
                </div>
                
                <div class="product-info">
                    <h1 id="detail-product-name">Galvanized Steel Pipe - 48mm</h1>
                    <div class="product-rating">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span>(128 Reviews)</span>
                    </div>
                    
                    <div class="product-price">
                        <span class="current-price">₹1,899.00</span>
                        <span class="original-price">₹2,199.00</span>
                        <span class="discount">14% OFF</span>
                    </div>
                    
                    <div class="product-availability">
                        <i class="fas fa-check-circle"></i> In Stock
                    </div>
                    
                    <div class="product-short-desc">
                        <p>High-quality galvanized steel pipe with excellent corrosion resistance. Ideal for structural applications, water supply, and gas distribution systems.</p>
                    </div>
                    
                    <div class="product-variants">
                        <h3>Size Options:</h3>
                        <div class="variant-options">
                            <button class="variant-btn">32mm</button>
                            <button class="variant-btn active">48mm</button>
                            <button class="variant-btn">60mm</button>
                            <button class="variant-btn">76mm</button>
                        </div>
                    </div>
                    
                    <div class="product-length">
                        <h3>Length:</h3>
                        <select id="product-length">
                            <option value="3m">3 meters</option>
                            <option value="6m" selected>6 meters</option>
                            <option value="9m">9 meters</option>
                            <option value="custom">Custom (Contact Sales)</option>
                        </select>
                    </div>
                    
                    <div class="quantity-selector">
                        <h3>Quantity:</h3>
                        <div class="quantity-controls">
                            <button id="decrease-qty">-</button>
                            <input type="number" id="product-quantity" value="1" min="1">
                            <button id="increase-qty">+</button>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <button class="primary-btn" id="add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="secondary-btn" id="buy-now"><i class="fas fa-bolt"></i> Buy Now</button>
                        <button class="icon-btn" id="add-to-wishlist"><i class="far fa-heart"></i></button>
                    </div>
                    
                    <div class="product-meta">
                        <p><strong>SKU:</strong> SP48G-6M</p>
                        <p><strong>Category:</strong> <a href="#">Steel Pipes</a></p>
                        <p><strong>Tags:</strong> <a href="#">Galvanized</a>, <a href="#">Industrial</a>, <a href="#">Construction</a></p>
                    </div>
                    
                    <div class="delivery-info">
                        <div class="delivery-option">
                            <i class="fas fa-truck"></i>
                            <div>
                                <h4>Free Shipping</h4>
                                <p>On orders above ₹10,000</p>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <i class="fas fa-shield-alt"></i>
                            <div>
                                <h4>Quality Guarantee</h4>
                                <p>ISO 9001:2015 Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="product-tabs">
                <div class="tab-headers">
                    <button class="tab-btn active" data-tab="specifications">Specifications</button>
                    <button class="tab-btn" data-tab="description">Description</button>
                    <button class="tab-btn" data-tab="reviews">Reviews (128)</button>
                    <button class="tab-btn" data-tab="shipping">Shipping & Returns</button>
                </div>
                
                <div class="tab-content active" id="specifications">
                    <table class="specs-table">
                        <tr>
                            <th>Material</th>
                            <td>Galvanized Steel (Hot-dipped)</td>
                        </tr>
                        <tr>
                            <th>Diameter</th>
                            <td>48mm (1.5 inches)</td>
                        </tr>
                        <tr>
                            <th>Wall Thickness</th>
                            <td>3.2mm</td>
                        </tr>
                        <tr>
                            <th>Standard Length</th>
                            <td>6 meters</td>
                        </tr>
                        <tr>
                            <th>Surface Treatment</th>
                            <td>Zinc Coating (275 g/m²)</td>
                        </tr>
                        <tr>
                            <th>Application</th>
                            <td>Construction, Water Supply, Gas Distribution</td>
                        </tr>
                        <tr>
                            <th>Standard</th>
                            <td>IS 1239, BS EN 10255</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>Approximately 3.84 kg/m</td>
                        </tr>
                        <tr>
                            <th>Pressure Rating</th>
                            <td>Up to 50 bar (depending on application)</td>
                        </tr>
                        <tr>
                            <th>Warranty</th>
                            <td>10 Years Against Manufacturing Defects</td>
                        </tr>
                    </table>
                </div>
                
                <div class="tab-content" id="description">
                    <h3>Product Overview</h3>
                    <p>Our premium Galvanized Steel Pipes are designed to offer superior performance in various industrial and construction applications. These pipes undergo a hot-dip galvanizing process where they are immersed in molten zinc, creating a metallurgically bonded coating that provides exceptional corrosion resistance.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Excellent corrosion resistance due to zinc coating</li>
                        <li>High tensile strength and durability</li>
                        <li>Uniform coating thickness ensures consistent performance</li>
                        <li>Suitable for both indoor and outdoor applications</li>
                        <li>Can withstand high-pressure applications</li>
                        <li>Resistant to impact and mechanical damage</li>
                        <li>Easy to cut, thread, and join for versatile installations</li>
                    </ul>
                    
                    <h3>Applications</h3>
                    <p>These galvanized steel pipes are widely used in:</p>
                    <ul>
                        <li>Potable water distribution systems</li>
                        <li>Fire sprinkler systems</li>
                        <li>Natural gas distribution</li>
                        <li>Structural applications in construction</li>
                        <li>Fence posts and railings</li>
                        <li>Agricultural irrigation systems</li>
                        <li>Scaffolding and support structures</li>
                    </ul>
                    
                    <h3>Quality Assurance</h3>
                    <p>All our steel pipes are manufactured in ISO 9001:2015 certified facilities and undergo rigorous quality testing including hydrostatic pressure tests, zinc coating uniformity tests, and dimensional accuracy checks to ensure compliance with international standards.</p>
                </div>
                
                <div class="tab-content" id="reviews">
                    <div class="review-summary">
                        <div class="average-rating">
                            <h3>4.5</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <p>Based on 128 reviews</p>
                        </div>
                        <div class="rating-bars">
                            <div class="rating-bar">
                                <span>5 Stars</span>
                                <div class="bar-container">
                                    <div class="bar" style="width: 70%"></div>
                                </div>
                                <span>70%</span>
                            </div>
                            <div class="rating-bar">
                                <span>4 Stars</span>
                                <div class="bar-container">
                                    <div class="bar" style="width: 20%"></div>
                                </div>
                                <span>20%</span>
                            </div>
                            <div class="rating-bar">
                                <span>3 Stars</span>
                                <div class="bar-container">
                                    <div class="bar" style="width: 7%"></div>
                                </div>
                                <span>7%</span>
                            </div>
                            <div class="rating-bar">
                                <span>2 Stars</span>
                                <div class="bar-container">
                                    <div class="bar" style="width: 2%"></div>
                                </div>
                                <span>2%</span>
                            </div>
                            <div class="rating-bar">
                                <span>1 Star</span>
                                <div class="bar-container">
                                    <div class="bar" style="width: 1%"></div>
                                </div>
                                <span>1%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="review-filter">
                        <select id="review-sort">
                            <option value="newest">Newest First</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>
                    
                    <div class="customer-reviews">
                        <div class="review-item">
                            <div class="reviewer-info">
                                <img src="images/avatars/user1.jpg" alt="Reviewer">
                                <div>
                                    <h4>Rajesh Kumar</h4>
                                    <p class="review-date">15 Feb, 2025</p>
                                </div>
                            </div>
                            <div class="review-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <div class="review-content">
                                <h4>Excellent quality and fast delivery</h4>
                                <p>The galvanized steel pipes I ordered were of outstanding quality. The zinc coating was uniform and there were no defects. Delivery was prompt and the pipes were well packaged to avoid any damage during transit. Will definitely order again for my next construction project.</p>
                            </div>
                        </div>
                        
                        <div class="review-item">
                            <div class="reviewer-info">
                                <img src="images/avatars/user2.jpg" alt="Reviewer">
                                <div>
                                    <h4>Priya Sharma</h4>
                                    <p class="review-date">08 Feb, 2025</p>
                                </div>
                            </div>
                            <div class="review-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                            <div class="review-content">
                                <h4>Good product but could improve packaging</h4>
                                <p>The steel pipes themselves are of good quality and match the specifications provided. However, the packaging could be improved as there were some minor scratches on the surface during delivery. The customer service was helpful when I reported this issue.</p>
                            </div>
                        </div>
                        
                        <div class="review-item">
                            <div class="reviewer-info">
                                <img src="images/avatars/user3.jpg" alt="Reviewer">
                                <div>
                                    <h4>Amit Patel</h4>
                                    <p class="review-date">29 Jan, 2025</p>
                                </div>
                            </div>
                            <div class="review-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                            <div class="review-content">
                                <h4>Perfect for my irrigation system</h4>
                                <p>These galvanized pipes worked perfectly for my farm irrigation system. The threading was precise and easy to work with. After six months of use, there are no signs of rust or corrosion despite being exposed to all weather conditions. Highly recommended for agricultural applications.</p>
                            </div>
                        </div>
                        
                        <div class="load-more">
                            <button id="load-more-reviews" class="secondary-btn">Load More Reviews</button>
                        </div>
                    </div>
                    
                    <div class="write-review">
                        <h3>Write a Review</h3>
                        <form id="review-form">
                            <div class="form-group">
                                <label>Your Rating</label>
                                <div class="rating-select">
                                    <i class="far fa-star rating-star" data-rating="1"></i>
                                    <i class="far fa-star rating-star" data-rating="2"></i>
                                    <i class="far fa-star rating-star" data-rating="3"></i>
                                    <i class="far fa-star rating-star" data-rating="4"></i>
                                    <i class="far fa-star rating-star" data-rating="5"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="review-title">Review Title</label>
                                <input type="text" id="review-title" placeholder="Summarize your experience">
                            </div>
                            <div class="form-group">
                                <label for="review-content">Your Review</label>
                                <textarea id="review-content" rows="5" placeholder="Share your experience with this product"></textarea>
                            </div>
                            <button type="submit" class="primary-btn">Submit Review</button>
                        </form>
                    </div>
                </div>
                
                <div class="tab-content" id="shipping">
                    <h3>Shipping Information</h3>
                    <p>We offer reliable shipping options for all our steel products, ensuring they reach you in perfect condition.</p>
                    
                    <h4>Shipping Methods & Timeframes</h4>
                    <ul>
                        <li><strong>Standard Shipping:</strong> 3-5 business days (Free on orders above ₹10,000)</li>
                        <li><strong>Express Shipping:</strong> 1-2 business days (Additional charges apply)</li>
                        <li><strong>Bulk Orders:</strong> 7-10 business days (Customized delivery schedule)</li>
                    </ul>
                    
                    <p>For larger orders or custom length pipes, our logistics team will contact you to arrange a convenient delivery schedule.</p>
                    
                    <h4>Shipping Coverage</h4>
                    <p>We currently ship to all major cities and industrial hubs across India. Remote locations might require additional delivery time and charges.</p>
                    
                    <h3>Return Policy</h3>
                    <p>We stand behind the quality of our steel products and offer a comprehensive return policy:</p>
                    
                    <ul>
                        <li>Returns are accepted within 7 days of delivery for manufacturing defects or damage during transit.</li>
                        <li>Custom-cut or modified items are non-returnable.</li>
                        <li>Return shipping costs will be covered by us for defective products.</li>
                        <li>All returned items must be in their original packaging with all accompanying documentation.</li>
                    </ul>
                    
                    <p>To initiate a return, please contact our customer service team at <a href="mailto:returns@steelproducts.com">returns@steelproducts.com</a> or call at <a href="tel:+911234567890">+91 1234 567 890</a>.</p>
                </div>
            </div>
            
            <div class="related-products">
                <h2>Related Products</h2>
                <div class="product-grid">
                    <div class="product-card">
                        <div class="product-badge">New</div>
                        <div class="product-image">
                            <img src="img/products/steel_pipes/p1.jpeg" alt="32mm Steel Pipe">
                            <div class="product-actions">
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>Galvanized Steel Pipe - 32mm</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>(86)</span>
                            </div>
                            <div class="product-price">
                                <span class="current-price">₹1,499.00</span>
                                <span class="original-price">₹1,799.00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-badge sale">Sale</div>
                        <div class="product-image">
                            <img src="img/products/steel_pipes/p2.jpg" alt="60mm Steel Pipe">
                            <div class="product-actions">
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>Galvanized Steel Pipe - 60mm</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span>(112)</span>
                            </div>
                            <div class="product-price">
                                <span class="current-price">₹2,299.00</span>
                                <span class="original-price">₹2,599.00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-image">
                            <img src="img/products/steel_pipes/p3.jpg" alt="Steel Pipe Connector">
                            <div class="product-actions">
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>Steel Pipe Connector - 48mm</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>(74)</span>
                            </div>
                            <div class="product-price">
                                <span class="current-price">₹349.00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-badge">Best Seller</div>
                        <div class="product-image">
                            <img src="img/products/steel_pipes/p1.jpeg" alt="Steel Elbow Joint">
                            <div class="product-actions">
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>Steel Elbow Joint - 48mm</h3>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>(168)</span>
                            </div>
                            <div class="product-price">
                                <span class="current-price">₹399.00</span>
                                <span class="original-price">₹499.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    
    <!-- Footer Section -->
    <?php include 'footer.php'; ?>

    <script src="js/main.js"></script>
    <script src="js/product-detail.js"></script>
</body>
</html>