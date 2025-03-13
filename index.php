<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SteelMart - Premium Steel Products</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Header Section (Include using PHP) -->
    <?php include 'header.php'; ?>

    <main>
        <!-- Hero Section -->
        <section id="hero">
            <div class="hero-slider">
                <div class="slide active">
                    <div class="container">
                        <div class="hero-content">
                        <h1 style="color: white;">Premium Steel Solutions for Every Need</h1>                            
                        <p style="color: white;">High-quality steel products for construction, manufacturing, and industrial applications</p>
                            <a href="products.php" class="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                    <div class="hero-image" style="background-image: url('img/hero_bg.jpg');"></div>
                </div>
                <div class="slide">
                    <div class="container">
                        <div class="hero-content">
                            <h1 style="color: white;">Industry-Leading Steel Products</h1>
                            <p style="color: white;">Trusted by professionals for durability, precision, and performance</p>
                            <a href="products.php" class="btn btn-primary">Explore Products</a>
                        </div>
                    </div>
                    <div class="hero-image" style="background-image: url('img/hero2.jpg');"></div>
                </div>
                <div class="slide-controls">
                    <button id="prev-slide" aria-label="Previous Slide"><i class="fas fa-chevron-left"></i></button>
                    <button id="next-slide" aria-label="Next Slide"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>

        <!-- Featured Categories -->
        <section id="featured-categories">
            <div class="container">
                <h2 class="section-title">Browse by Category</h2>
                <div class="categories-grid">
                    <a href="products.php?category=pipes" class="category-card">
                        <div class="category-image">
                            <img src="img/products/categories/pipes.jpg" alt="Steel Pipes">
                        </div>
                        <h3>Steel Pipes</h3>
                    </a>
                    <a href="products.php?category=sheets" class="category-card">
                        <div class="category-image">
                            <img src="img/products/categories/pipes.jpg" alt="Steel Sheets">
                        </div>
                        <h3>Steel Sheets</h3>
                    </a>
                    <a href="products.php?category=rods" class="category-card">
                        <div class="category-image">
                            <img src="img/products/categories/pipes.jpg" alt="Steel Rods">
                        </div>
                        <h3>Steel Rods</h3>
                    </a>
                    <a href="products.php?category=beams" class="category-card">
                        <div class="category-image">
                            <img src="img/products/categories/pipes.jpg" alt="Steel Beams">
                        </div>
                        <h3>Steel Beams</h3>
                    </a>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section id="featured-products">
            <div class="container">
                <h2 class="section-title">Best Selling Products</h2>
                <div class="products-grid" id="featured-products-container">
                    <!-- Product cards will be loaded dynamically via JavaScript/PHP -->
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section id="why-choose-us">
            <div class="container">
                <h2 class="section-title">Why Choose SteelMart?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>All our steel products undergo rigorous quality testing to ensure durability and performance.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-truck"></i>
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Nationwide delivery network ensures your products reach you in the shortest time possible.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <h3>Expert Support</h3>
                        <p>Our technical team is available to assist you with product selection and application guidance.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-tag"></i>
                        </div>
                        <h3>Competitive Pricing</h3>
                        <p>Direct from manufacturer pricing ensures you get the best value for your investment.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section id="testimonials">
            <div class="container">
                <h2 class="section-title">What Our Customers Say</h2>
                <div class="testimonial-slider">
                    <div class="testimonial active">
                        <div class="testimonial-content">
                            <p>"SteelMart has been our trusted supplier for over 5 years. Their quality is consistent, and delivery is always on time."</p>
                            <div class="testimonial-author">
                                <img src="images/testimonials/client1.jpg" alt="John Builder">
                                <div class="author-details">
                                    <h4>John Builder</h4>
                                    <span>ABC Construction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="testimonial-content">
                            <p>"As a small manufacturing business, we appreciate the flexible quantities and competitive pricing SteelMart offers."</p>
                            <div class="testimonial-author">
                                <img src="images/testimonials/client2.jpg" alt="Sarah Manufacturer">
                                <div class="author-details">
                                    <h4>Sarah Manufacturer</h4>
                                    <span>XYZ Manufacturing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="testimonial-content">
                            <p>"Their technical support team helped us select the right steel grade for our project, saving us time and money."</p>
                            <div class="testimonial-author">
                                <img src="images/testimonials/client3.jpg" alt="Mike Engineer">
                                <div class="author-details">
                                    <h4>Mike Engineer</h4>
                                    <span>Engineering Solutions Inc.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-controls">
                        <button id="prev-testimonial" aria-label="Previous Testimonial"><i class="fas fa-chevron-left"></i></button>
                        <button id="next-testimonial" aria-label="Next Testimonial"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section id="newsletter">
            <div class="container">
                <div class="newsletter-content">
                    <h2>Stay Updated with Latest Offers</h2>
                    <p>Subscribe to our newsletter and get exclusive deals and industry insights.</p>
                    <form id="newsletter-form" method="POST" action="subscribe.php">
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Your Email Address" required>
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>


    <!-- Footer Section (Include using PHP) -->
    <?php include 'footer.php'; ?>

    <!-- Back to Top Button -->
    <a href="#" id="back-to-top" title="Back to Top"><i class="fas fa-arrow-up"></i></a>

    <!-- JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/slider.js"></script>
</body>
</html>