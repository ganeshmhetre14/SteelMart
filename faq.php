<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQs - Steel Products</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/faq.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
 
    <!-- Header Section (Include using PHP) -->
    <?php include 'header.php'; ?>
    
    <!-- Main Content -->
    <main>
        <section class="page-header">
            <div class="container">
                <h1>Frequently Asked Questions</h1>
            </div>
        </section>

        <section class="faq-section">
            <div class="container">
                <div class="faq-search">
                    <input type="text" id="faqSearch" placeholder="Search for questions...">
                    <button type="button"><i class="fas fa-search"></i></button>
                </div>

                <div class="faq-categories">
                    <button class="category-btn active" data-category="all">All Questions</button>
                    <button class="category-btn" data-category="products">Products</button>
                    <button class="category-btn" data-category="orders">Orders & Shipping</button>
                    <button class="category-btn" data-category="payments">Payments</button>
                    <button class="category-btn" data-category="returns">Returns & Refunds</button>
                </div>

                <div class="faq-container">
                    <!-- Products FAQs -->
                    <div class="faq-item" data-category="products">
                        <div class="faq-question">
                            <h3>What types of steel products do you offer?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>We offer a comprehensive range of steel products including steel pipes, sheets, rods, beams, angles, channels, and more. All our products are available in various grades, sizes, and specifications to meet different industrial requirements.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="products">
                        <div class="faq-question">
                            <h3>How can I verify the quality of your steel products?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>All our products come with quality certification and test reports. We follow strict quality control measures and our products comply with industry standards. Each product page displays the relevant certifications and technical specifications for your reference.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="products">
                        <div class="faq-question">
                            <h3>Do you offer customized steel products?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>Yes, we do offer customization options for bulk orders. You can specify your requirements including dimensions, grade, finishing, and other specifications. Please contact our sales team through the <a href="contact.html">Contact Us</a> page for customized orders.</p>
                        </div>
                    </div>

                    <!-- Orders & Shipping FAQs -->
                    <div class="faq-item" data-category="orders">
                        <div class="faq-question">
                            <h3>How can I place an order?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>You can place an order easily through our website. Simply browse our products, select the items you want to purchase, add them to your cart, and proceed to checkout. You can also place orders via phone or email for bulk purchases.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="orders">
                        <div class="faq-question">
                            <h3>What is the delivery timeframe?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>Delivery times depend on your location and the products ordered. Typically, standard delivery takes 3-7 business days for in-stock items. For custom orders or bulk purchases, delivery times will be communicated during the order process. You can track your order status through your account dashboard.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="orders">
                        <div class="faq-question">
                            <h3>Do you ship internationally?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>Yes, we offer international shipping to select countries. International shipping rates and delivery times vary based on destination. Please contact our customer service for detailed information about international orders and shipping options.</p>
                        </div>
                    </div>

                    <!-- Payments FAQs -->
                    <div class="faq-item" data-category="payments">
                        <div class="faq-question">
                            <h3>What payment methods do you accept?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>We accept various payment methods including credit/debit cards, net banking, UPI, and bank transfers. For bulk orders, we also offer letter of credit and other business payment options. All our payment gateways are secure and encrypted.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="payments">
                        <div class="faq-question">
                            <h3>Are there any additional taxes or fees?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>The prices displayed on our website are exclusive of taxes. Applicable taxes will be added during checkout based on your location and the products purchased. Shipping fees may also apply depending on your location and order size.</p>
                        </div>
                    </div>

                    <!-- Returns & Refunds FAQs -->
                    <div class="faq-item" data-category="returns">
                        <div class="faq-question">
                            <h3>What is your return policy?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>We accept returns within 7 days of delivery if the products are in their original condition. Custom-made products cannot be returned unless there's a manufacturing defect. Please inspect all products upon delivery and report any issues immediately.</p>
                        </div>
                    </div>

                    <div class="faq-item" data-category="returns">
                        <div class="faq-question">
                            <h3>How do I request a refund?</h3>
                            <span class="toggle-icon"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer">
                            <p>To request a refund, please contact our customer service with your order details. Once your return is received and inspected, we will process your refund. The refund amount will be credited back to your original payment method within 7-14 business days.</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-cta">
                    <h2>Didn't find what you're looking for?</h2>
                    <p>Our customer support team is ready to assist you with any other questions or concerns.</p>
                    <a href="contact.php" class="btn primary-btn">Contact Us</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer Section (Include using PHP) -->
    <?php include 'footer.php'; ?>

    <script src="js/main.js"></script>
    <script src="js/faq.js"></script>
</body>
</html>