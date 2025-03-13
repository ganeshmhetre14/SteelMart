<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search - SteelMart</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/search.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Header Section (Include using PHP) -->
    <?php include 'header.php'; ?>

    <main>
        <!-- Page Title -->
        <section id="page-title">
            <div class="container">
                <h1>Search Our Products</h1>
            </div>
        </section>

        <!-- Search Form Section -->
        <section id="search-form-section">
            <div class="container">
                <div class="search-container">
                    <form id="advanced-search-form" method="GET" action="search.php">
                        <div class="search-main">
                            <div class="form-group main-search">
                                <input type="text" name="query" id="search-query" placeholder="Search for products..." value="<?php echo isset($_GET['query']) ? htmlspecialchars($_GET['query']) : ''; ?>">
                                <button type="submit" class="btn btn-primary search-btn">
                                    <i class="fas fa-search"></i> Search
                                </button>
                            </div>
                        </div>
                        
                        <div id="advanced-options">
                            <div class="filters-grid">
                                <div class="form-group">
                                    <label for="category">Category</label>
                                    <select name="category" id="category">
                                        <option value="">All Categories</option>
                                        <option value="pipes" <?php echo (isset($_GET['category']) && $_GET['category'] == 'pipes') ? 'selected' : ''; ?>>Steel Pipes</option>
                                        <option value="sheets" <?php echo (isset($_GET['category']) && $_GET['category'] == 'sheets') ? 'selected' : ''; ?>>Steel Sheets</option>
                                        <option value="rods" <?php echo (isset($_GET['category']) && $_GET['category'] == 'rods') ? 'selected' : ''; ?>>Steel Rods</option>
                                        <option value="beams" <?php echo (isset($_GET['category']) && $_GET['category'] == 'beams') ? 'selected' : ''; ?>>Steel Beams</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="material">Material</label>
                                    <select name="material" id="material">
                                        <option value="">All Materials</option>
                                        <option value="carbon" <?php echo (isset($_GET['material']) && $_GET['material'] == 'carbon') ? 'selected' : ''; ?>>Carbon Steel</option>
                                        <option value="stainless" <?php echo (isset($_GET['material']) && $_GET['material'] == 'stainless') ? 'selected' : ''; ?>>Stainless Steel</option>
                                        <option value="alloy" <?php echo (isset($_GET['material']) && $_GET['material'] == 'alloy') ? 'selected' : ''; ?>>Alloy Steel</option>
                                        <option value="tool" <?php echo (isset($_GET['material']) && $_GET['material'] == 'tool') ? 'selected' : ''; ?>>Tool Steel</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sort">Sort By</label>
                                    <select name="sort" id="sort">
                                        <option value="relevance" <?php echo (!isset($_GET['sort']) || $_GET['sort'] == 'relevance') ? 'selected' : ''; ?>>Relevance</option>
                                        <option value="price_low" <?php echo (isset($_GET['sort']) && $_GET['sort'] == 'price_low') ? 'selected' : ''; ?>>Price: Low to High</option>
                                        <option value="price_high" <?php echo (isset($_GET['sort']) && $_GET['sort'] == 'price_high') ? 'selected' : ''; ?>>Price: High to Low</option>
                                        <option value="newest" <?php echo (isset($_GET['sort']) && $_GET['sort'] == 'newest') ? 'selected' : ''; ?>>Newest First</option>
                                    </select>
                                </div>
                            </div>
                            <div class="price-filter">
                                <label>Price Range</label>
                                <div class="price-inputs">
                                    <input type="number" name="min_price" id="min-price" placeholder="Min" value="<?php echo isset($_GET['min_price']) ? htmlspecialchars($_GET['min_price']) : ''; ?>">
                                    <span>to</span>
                                    <input type="number" name="max_price" id="max-price" placeholder="Max" value="<?php echo isset($_GET['max_price']) ? htmlspecialchars($_GET['max_price']) : ''; ?>">
                                </div>
                            </div>
                            <div class="filter-actions">
                                <button type="reset" class="btn btn-secondary" id="reset-filters">Reset Filters</button>
                                <button type="submit" class="btn btn-primary">Apply Filters</button>
                            </div>
                        </div>
                        <button type="button" id="toggle-advanced" class="toggle-advanced">
                            Advanced Search <i class="fas fa-chevron-down"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Search Results Section -->
        <section id="search-results">
            <div class="container">
                <?php if (isset($_GET['query']) || isset($_GET['category']) || isset($_GET['material'])) : ?>
                    <div class="search-summary">
                        <h2>Search Results</h2>
                        <div id="result-count">
                            <!-- This will be populated by JavaScript -->
                            <p>Loading results...</p>
                        </div>
                    </div>
                    <div class="active-filters" id="active-filters">
                        <!-- Active filters will be populated by JavaScript -->
                    </div>
                    <div class="products-grid" id="search-results-container">
                        <!-- Search results will be loaded here via JavaScript -->
                        <div class="loading-indicator">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Loading products...</p>
                        </div>
                    </div>
                    <div class="pagination" id="search-pagination">
                        <!-- Pagination will be added here via JavaScript -->
                    </div>
                <?php else : ?>
                    <div class="search-prompt">
                        <i class="fas fa-search"></i>
                        <h2>Enter a search term to find products</h2>
                        <p>Use the search bar above to find steel products by name, category, or specifications.</p>
                    </div>
                <?php endif; ?>
            </div>
        </section>

        <!-- Related Categories -->
        <section id="related-categories">
            <div class="container">
                <h2 class="section-title">Popular Categories</h2>
                <div class="categories-grid">
                    <a href="products.php?category=pipes" class="category-card">
                        <div class="category-image">
                            <img src="images/categories/pipes.jpg" alt="Steel Pipes">
                        </div>
                        <h3>Steel Pipes</h3>
                    </a>
                    <a href="products.php?category=sheets" class="category-card">
                        <div class="category-image">
                            <img src="images/categories/sheets.jpg" alt="Steel Sheets">
                        </div>
                        <h3>Steel Sheets</h3>
                    </a>
                    <a href="products.php?category=rods" class="category-card">
                        <div class="category-image">
                            <img src="images/categories/rods.jpg" alt="Steel Rods">
                        </div>
                        <h3>Steel Rods</h3>
                    </a>
                    <a href="products.php?category=beams" class="category-card">
                        <div class="category-image">
                            <img src="images/categories/beams.jpg" alt="Steel Beams">
                        </div>
                        <h3>Steel Beams</h3>
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'footer.php'; ?>

    <!-- Back to Top Button -->
    <a href="#" id="back-to-top" title="Back to Top"><i class="fas fa-arrow-up"></i></a>

    <!-- JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/search.js"></script>
</body>
</html>