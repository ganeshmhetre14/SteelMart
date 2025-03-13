<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products - SteelMart</title>
    <link rel="stylesheet" href="css/products.css">
    <link rel="stylesheet" herf="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header Section (Include using PHP) -->
    <?php include 'header.php'; ?>


    <div class="container">
        <div class="product-filter">
            <!-- Categories Section -->
            <div class="filter-section categories">
                <h3>Categories</h3>
                <ul class="categories-list">
                    <li>Electronics</li>
                    <li>Clothing</li>
                    <li>Home & Kitchen</li>
                    <li>Sports</li>
                    <li>Books</li>
                </ul>
            </div>

            <!-- Price Range Section -->
            <div class="filter-section price">
                <h3>Price Range</h3>
                <div class="price-range">
                    <input type="range" min="0" max="1000" value="500">
                    <div class="price-inputs">
                        <input type="number" placeholder="Min Price">
                        <input type="number" placeholder="Max Price">
                    </div>
                </div>
            </div>

            <!-- Material Grade Section -->
            <div class="filter-section material">
                <h3>Material Grade</h3>
                <div class="material-grades">
                    <div class="material-grade">
                        <input type="checkbox" id="grade-a">
                        <label for="grade-a">Grade A</label>
                    </div>
                    <div class="material-grade">
                        <input type="checkbox" id="grade-b">
                        <label for="grade-b">Grade B</label>
                    </div>
                    <div class="material-grade">
                        <input type="checkbox" id="grade-c">
                        <label for="grade-c">Grade C</label>
                    </div>
                    <div class="material-grade">
                        <input type="checkbox" id="grade-premium">
                        <label for="grade-premium">Premium</label>
                    </div>
                </div>
            </div>

            <!-- Finish Type Section -->
            <div class="filter-section finish">
                <h3>Finish Type</h3>
                <div class="finish-types">
                    <div class="finish-type">Matte</div>
                    <div class="finish-type">Glossy</div>
                    <div class="finish-type">Metallic</div>
                    <div class="finish-type">Satin</div>
                </div>
            </div>
        </div>
    </div>
</body>
                            <button type="submit" class="btn btn-secondary btn-sm">Apply Filter</button>
                        </form>
                    </div>
                </aside>

                <!-- Main Products Area -->
                <div class="products-main">
                    <!-- Products Top Bar -->
                    <div class="products-topbar">
                        <div class="topbar-left">
                            <p><span id="product-count">
                            <?php
                            // In a real implementation, this would fetch the count from the database
                            echo "24";
                            ?>
                            </span> products found</p>
                        </div>
                        <div class="topbar-right">
                            <div class="view-switcher">
                                <button id="grid-view" class="active"><i class="fas fa-th"></i></button>
                                <button id="list-view"><i class="fas fa-list"></i></button>
                            </div>
                            <div class="sort-dropdown">
                                <label for="sort-by">Sort by:</label>
                                <select id="sort-by" name="sort_by" onchange="this.form.submit()">
                                    <option value="popularity" <?php echo (isset($_GET['sort_by']) && $_GET['sort_by'] == 'popularity') ? 'selected' : ''; ?>>Popularity</option>
                                    <option value="price_asc" <?php echo (isset($_GET['sort_by']) && $_GET['sort_by'] == 'price_asc') ? 'selected' : ''; ?>>Price: Low to High</option>
                                    <option value="price_desc" <?php echo (isset($_GET['sort_by']) && $_GET['sort_by'] == 'price_desc') ? 'selected' : ''; ?>>Price: High to Low</option>
                                    <option value="newest" <?php echo (isset($_GET['sort_by']) && $_GET['sort_by'] == 'newest') ? 'selected' : ''; ?>>Newest First</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Products Grid -->
                    <div class="products-grid active" id="products-grid">
                        <?php
                        // In a real implementation, these would be fetched from the database
                        // This is just a placeholder for demonstration
                        $products = [
                            [
                                'id' => 1,
                                'name' => 'Stainless Steel Pipe 304',
                                'price' => 249.99,
                                'sale_price' => 229.99,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'pipes',
                                'rating' => 4.5,
                                'reviews' => 28,
                                'stock' => 'in_stock'
                            ],
                            [
                                'id' => 2,
                                'name' => 'Galvanized Steel Sheet',
                                'price' => 189.99,
                                'sale_price' => null,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'sheets',
                                'rating' => 4.2,
                                'reviews' => 15,
                                'stock' => 'in_stock'
                            ],
                            [
                                'id' => 3,
                                'name' => 'Steel Reinforcement Rod',
                                'price' => 79.99,
                                'sale_price' => 69.99,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'rods',
                                'rating' => 4.7,
                                'reviews' => 42,
                                'stock' => 'in_stock'
                            ],
                            [
                                'id' => 4,
                                'name' => 'I-Beam Structural Steel',
                                'price' => 599.99,
                                'sale_price' => null,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'beams',
                                'rating' => 4.8,
                                'reviews' => 33,
                                'stock' => 'limited'
                            ],
                            [
                                'id' => 5,
                                'name' => 'Stainless Steel Seamless Pipe',
                                'price' => 299.99,
                                'sale_price' => null,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'pipes',
                                'rating' => 4.6,
                                'reviews' => 19,
                                'stock' => 'in_stock'
                            ],
                            [
                                'id' => 6,
                                'name' => 'Cold Rolled Steel Sheet',
                                'price' => 159.99,
                                'sale_price' => 139.99,
                                'image' => 'img/products/Steel_Pipe_304.jpg',
                                'category' => 'sheets',
                                'rating' => 4.3,
                                'reviews' => 24,
                                'stock' => 'in_stock'
                            ],
                            // More products would be added here
                        ];

                        // Filter by category if set
                        if(isset($_GET['category'])) {
                            $category = $_GET['category'];
                            $products = array_filter($products, function($product) use ($category) {
                                return $product['category'] == $category;
                            });
                        }

                        foreach($products as $product):
                        ?>
                        <div class="product-card">
                            <div class="product-image">
                                <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                                <?php if($product['sale_price']): ?>
                                <span class="sale-badge">Sale</span>
                                <?php endif; ?>
                                <div class="product-actions">
                                    <button class="quick-view" data-product-id="<?php echo $product['id']; ?>"><i class="fas fa-eye"></i></button>
                                    <button class="add-to-wishlist" data-product-id="<?php echo $product['id']; ?>"><i class="far fa-heart"></i></button>
                                    <button class="add-to-compare" data-product-id="<?php echo $product['id']; ?>"><i class="fas fa-exchange-alt"></i></button>
                                </div>
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="product-details.php?id=<?php echo $product['id']; ?>"><?php echo $product['name']; ?></a></h3>
                                <div class="product-rating">
                                    <div class="stars">
                                        <?php
                                        $rating = $product['rating'];
                                        for($i = 1; $i <= 5; $i++) {
                                            if($i <= $rating) {
                                                echo '<i class="fas fa-star"></i>';
                                            } elseif($i - 0.5 <= $rating) {
                                                echo '<i class="fas fa-star-half-alt"></i>';
                                            } else {
                                                echo '<i class="far fa-star"></i>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    <span>(<?php echo $product['reviews']; ?> reviews)</span>
                                </div>
                                <div class="product-price">
                                    <?php if($product['sale_price']): ?>
                                    <span class="regular-price">$<?php echo number_format($product['price'], 2); ?></span>
                                    <span class="sale-price">$<?php echo number_format($product['sale_price'], 2); ?></span>
                                    <?php else: ?>
                                    <span class="regular-price">$<?php echo number_format($product['price'], 2); ?></span>
                                    <?php endif; ?>
                                </div>
                                <div class="stock-status <?php echo $product['stock']; ?>">
                                    <?php
                                    if($product['stock'] == 'in_stock') {
                                        echo '<i class="fas fa-check-circle"></i> In Stock';
                                    } elseif($product['stock'] == 'limited') {
                                        echo '<i class="fas fa-exclamation-circle"></i> Limited Stock';
                                    } else {
                                        echo '<i class="fas fa-times-circle"></i> Out of Stock';
                                    }
                                    ?>
                                </div>
                                <div class="product-buttons">
                                    <a href="product-details.php?id=<?php echo $product['id']; ?>" class="btn btn-secondary btn-sm">Details</a>
                                    <button class="btn btn-primary btn-sm add-to-cart" data-product-id="<?php echo $product['id']; ?>">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>

                    <!-- Products List View -->
                    <div class="products-list" id="products-list">
                        <?php foreach($products as $product): ?>
                        <div class="product-list-item">
                            <div class="product-image">
                                <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                                <?php if($product['sale_price']): ?>
                                <span class="sale-badge">Sale</span>
                                <?php endif; ?>
                            </div>
                            <div class="product-details">
                                <h3 class="product-name"><a href="product-details.php?id=<?php echo $product['id']; ?>"><?php echo $product['name']; ?></a></h3>
                                <div class="product-rating">
                                    <div class="stars">
                                        <?php
                                        $rating = $product['rating'];
                                        for($i = 1; $i <= 5; $i++) {
                                            if($i <= $rating) {
                                                echo '<i class="fas fa-star"></i>';
                                            } elseif($i - 0.5 <= $rating) {
                                                echo '<i class="fas fa-star-half-alt"></i>';
                                            } else {
                                                echo '<i class="far fa-star"></i>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    <span>(<?php echo $product['reviews']; ?> reviews)</span>
                                </div>
                                <div class="product-description">
                                    <p>Premium quality <?php echo $product['name']; ?> made from high-grade materials. Perfect for construction and industrial applications. Meets all industry standards and certifications.</p>
                                </div>
                            </div>
                            <div class="product-actions">
                                <div class="product-price">
                                    <?php if($product['sale_price']): ?>
                                    <span class="regular-price">$<?php echo number_format($product['price'], 2); ?></span>
                                    <span class="sale-price">$<?php echo number_format($product['sale_price'], 2); ?></span>
                                    <?php else: ?>
                                    <span class="regular-price">$<?php echo number_format($product['price'], 2); ?></span>
                                    <?php endif; ?>
                                </div>
                                <div class="stock-status <?php echo $product['stock']; ?>">
                                    <?php
                                    if($product['stock'] == 'in_stock') {
                                        echo '<i class="fas fa-check-circle"></i> In Stock';
                                    } elseif($product['stock'] == 'limited') {
                                        echo '<i class="fas fa-exclamation-circle"></i> Limited Stock';
                                    } else {
                                        echo '<i class="fas fa-times-circle"></i> Out of Stock';
                                    }
                                    ?>
                                </div>
                                <div class="product-buttons">
                                    <a href="product-details.php?id=<?php echo $product['id']; ?>" class="btn btn-secondary">View Details</a>
                                    <button class="btn btn-primary add-to-cart" data-product-id="<?php echo $product['id']; ?>">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                    <button class="btn btn-outline add-to-wishlist" data-product-id="<?php echo $product['id']; ?>">
                                        <i class="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>

                    <!-- Pagination -->
                    <div class="pagination">
                        <button class="prev-page" disabled><i class="fas fa-chevron-left"></i></button>
                        <ul class="page-numbers">
                            <li><a href="#" class="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">10</a></li>
                        </ul>
                        <button class="next-page"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Recently Viewed Products -->
    <section id="recently-viewed">
        <div class="container">
            <h2 class="section-title">Recently Viewed</h2>
            <div class="products-carousel">
                <div class="carousel-wrapper">
                    <div class="carousel-slides">
                        <!-- Products will be loaded here via JavaScript -->
                    </div>
                </div>
                <button class="carousel-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-next"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    </section>

    <!-- Footer Section (Include using PHP) -->
    <?php include 'footer.php'; ?>

   

    <!-- JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/products.js"></script>
</body>
</html>