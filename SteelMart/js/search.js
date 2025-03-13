/**
 * SteelMart Search Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Toggle advanced search options
    const toggleAdvancedBtn = document.getElementById('toggle-advanced');
    const advancedOptions = document.getElementById('advanced-options');

    if (toggleAdvancedBtn && advancedOptions) {
        toggleAdvancedBtn.addEventListener('click', function() {
            advancedOptions.classList.toggle('show');
            this.classList.toggle('active');
            
            // Change the text and icon based on current state
            if (advancedOptions.classList.contains('show')) {
                this.innerHTML = 'Hide Advanced Search <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Advanced Search <i class="fas fa-chevron-down"></i>';
            }
        });
    }

    // Reset filters button functionality
    const resetFiltersBtn = document.getElementById('reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            // Clear all form fields except the main search query
            const form = document.getElementById('advanced-search-form');
            const formElements = form.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.name !== 'query' && element.tagName !== 'BUTTON') {
                    if (element.tagName === 'SELECT') {
                        element.selectedIndex = 0;
                    } else if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = false;
                    } else if (element.tagName === 'INPUT') {
                        element.value = '';
                    }
                }
            }
        });
    }

    // Display active filters
    function displayActiveFilters() {
        const activeFiltersContainer = document.getElementById('active-filters');
        if (!activeFiltersContainer) return;

        // Clear current filters
        activeFiltersContainer.innerHTML = '';

        // Get URL params
        const urlParams = new URLSearchParams(window.location.search);
        const filterLabels = {
            'query': 'Search: ',
            'category': 'Category: ',
            'material': 'Material: ',
            'min_price': 'Min Price: $',
            'max_price': 'Max Price: $',
            'sort': 'Sort by: '
        };

        const sortLabels = {
            'relevance': 'Relevance',
            'price_low': 'Price: Low to High',
            'price_high': 'Price: High to Low',
            'newest': 'Newest First'
        };

        const categoryLabels = {
            'pipes': 'Steel Pipes',
            'sheets': 'Steel Sheets',
            'rods': 'Steel Rods',
            'beams': 'Steel Beams'
        };

        const materialLabels = {
            'carbon': 'Carbon Steel',
            'stainless': 'Stainless Steel',
            'alloy': 'Alloy Steel',
            'tool': 'Tool Steel'
        };

        // Create filter tags
        for (const [key, value] of urlParams.entries()) {
            if (value && filterLabels[key] && key !== 'sort') {
                const filterTag = document.createElement('div');
                filterTag.className = 'filter-tag';
                
                let displayValue = value;
                if (key === 'category' && categoryLabels[value]) {
                    displayValue = categoryLabels[value];
                } else if (key === 'material' && materialLabels[value]) {
                    displayValue = materialLabels[value];
                }
                
                filterTag.innerHTML = `
                    ${filterLabels[key]}${displayValue}
                    <button class="remove-filter" data-param="${key}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                activeFiltersContainer.appendChild(filterTag);
            }
        }

        // Add event listeners to remove filter buttons
        const removeButtons = document.querySelectorAll('.remove-filter');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const param = this.getAttribute('data-param');
                urlParams.delete(param);
                window.location.search = urlParams.toString();
            });
        });
    }

    // Load search results via AJAX
    function loadSearchResults() {
        const searchResultsContainer = document.getElementById('search-results-container');
        const resultCountElement = document.getElementById('result-count');
        const paginationElement = document.getElementById('search-pagination');
        
        if (!searchResultsContainer) return;

        // Get current search parameters
        const urlParams = new URLSearchParams(window.location.search);
        
        // Check if there's an actual search query
        if (urlParams.has('query') || urlParams.has('category') || urlParams.has('material')) {
            // In a real implementation, this would make an AJAX request to a backend API
            // For demo purposes, we'll simulate loading with mock data
            
            // Show loading indicator
            searchResultsContainer.innerHTML = `
                <div class="loading-indicator">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading products...</p>
                </div>
            `;
            
            // Simulate AJAX delay
            setTimeout(() => {
                // Generate mock search results
                const mockResults = generateMockResults(urlParams);
                
                if (mockResults.products.length > 0) {
                    // Update result count
                    resultCountElement.innerHTML = `<p>Showing ${mockResults.products.length} of ${mockResults.total} products</p>`;
                    
                    // Clear container
                    searchResultsContainer.innerHTML = '';
                    
                    // Add product cards
                    mockResults.products.forEach(product => {
                        const productCard = createProductCard(product);
                        searchResultsContainer.appendChild(productCard);
                    });
                    
                    // Generate pagination
                    generatePagination(paginationElement, mockResults.currentPage, mockResults.totalPages);
                } else {
                    // Show no results message
                    searchResultsContainer.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <h3>No products found</h3>
                            <p>We couldn't find any products matching your search criteria. Try adjusting your filters or search with different keywords.</p>
                            <a href="products.php" class="btn btn-primary">Browse All Products</a>
                        </div>
                    `;
                    resultCountElement.innerHTML = '<p>No products found</p>';
                    paginationElement.innerHTML = '';
                }
            }, 1000);
        }
    }

    // Create a product card element
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-specs">
                    ${product.specifications.join(' • ')}
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <a href="product.php?id=${product.id}" class="btn-view">View Details</a>
                    <button class="btn-add-cart" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        // Add event listener to Add to Cart button
        const addToCartBtn = productCard.querySelector('.btn-add-cart');
        addToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
        
        return productCard;
    }

    // Generate pagination
    function generatePagination(paginationElement, currentPage, totalPages) {
        if (!paginationElement) return;
        
        // Clear existing pagination
        paginationElement.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        const urlParams = new URLSearchParams(window.location.search);
        
        // Previous page button
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        
        const prevLink = document.createElement('a');
        prevLink.className = 'page-link';
        prevLink.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        if (currentPage > 1) {
            urlParams.set('page', currentPage - 1);
            prevLink.href = `?${urlParams.toString()}`;
        }
        
        prevLi.appendChild(prevLink);
        paginationElement.appendChild(prevLi);
        
        // Page numbers
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);
        
        for (let i = startPage; i <= endPage; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${i === currentPage ? 'active' : ''}`;
            
            const link = document.createElement('a');
            link.className = 'page-link';
            link.textContent = i;
            
            urlParams.set('page', i);
            link.href = `?${urlParams.toString()}`;
            
            li.appendChild(link);
            paginationElement.appendChild(li);
        }
        
        // Next page button
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        
        const nextLink = document.createElement('a');
        nextLink.className = 'page-link';
        nextLink.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        if (currentPage < totalPages) {
            urlParams.set('page', currentPage + 1);
            nextLink.href = `?${urlParams.toString()}`;
        }
        
        nextLi.appendChild(nextLink);
        paginationElement.appendChild(nextLi);
    }

    // Add to cart functionality (mock)
    function addToCart(productId) {
        // In a real implementation, this would send an AJAX request to add the product to cart
        // For demo purposes, we'll just show a notification
        
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Product added to cart!</p>
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
        
        console.log(`Product ${productId} added to cart`);
    }

    // Generate mock search results based on filters
    function generateMockResults(urlParams) {
        const query = urlParams.get('query') || '';
        const category = urlParams.get('category') || '';
        const material = urlParams.get('material') || '';
        const minPrice = urlParams.get('min_price') ? parseFloat(urlParams.get('min_price')) : 0;
        const maxPrice = urlParams.get('max_price') ? parseFloat(urlParams.get('max_price')) : 10000;
        const sort = urlParams.get('sort') || 'relevance';
        const page = parseInt(urlParams.get('page') || '1');
        
        // Mock products data
        const allProducts = [
            {
                id: 1,
                title: "Carbon Steel Pipe - Schedule 40",
                category: "Steel Pipes",
                categorySlug: "pipes",
                material: "Carbon Steel",
                materialSlug: "carbon",
                price: 45.99,
                image: "images/products/pipe1.jpg",
                specifications: ["2-inch Diameter", "20ft Length", "Schedule 40"]
            },
            {
                id: 2,
                title: "Stainless Steel Sheet - Grade 304",
                category: "Steel Sheets",
                categorySlug: "sheets",
                material: "Stainless Steel",
                materialSlug: "stainless",
                price: 89.50,
                image: "images/products/sheet1.jpg",
                specifications: ["4ft x 8ft", "16 Gauge", "Brushed Finish"]
            },
            {
                id: 3,
                title: "Alloy Steel Round Bar",
                category: "Steel Rods",
                categorySlug: "rods",
                material: "Alloy Steel",
                materialSlug: "alloy",
                price: 35.75,
                image: "images/products/rod1.jpg",
                specifications: ["1-inch Diameter", "6ft Length", "AISI 4140"]
            },
            {
                id: 4,
                title: "Carbon Steel I-Beam",
                category: "Steel Beams",
                categorySlug: "beams",
                material: "Carbon Steel",
                materialSlug: "carbon",
                price: 156.25,
                image: "images/products/beam1.jpg",
                specifications: ["8-inch Height", "4-inch Width", "20ft Length"]
            },
            {
                id: 5,
                title: "Stainless Steel Pipe - Schedule 10",
                category: "Steel Pipes",
                categorySlug: "pipes",
                material: "Stainless Steel",
                materialSlug: "stainless",
                price: 78.99,
                image: "images/products/pipe2.jpg",
                specifications: ["3-inch Diameter", "10ft Length", "Schedule 10"]
            },
            {
                id: 6,
                title: "Galvanized Steel Sheet",
                category: "Steel Sheets",
                categorySlug: "sheets",
                material: "Carbon Steel",
                materialSlug: "carbon",
                price: 65.50,
                image: "images/products/sheet2.jpg",
                specifications: ["3ft x 6ft", "18 Gauge", "G90 Coating"]
            },
            {
                id: 7,
                title: "Tool Steel Flat Bar",
                category: "Steel Rods",
                categorySlug: "rods",
                material: "Tool Steel",
                materialSlug: "tool",
                price: 48.25,
                image: "images/products/rod2.jpg",
                specifications: ["1-inch x 2-inch", "3ft Length", "A2 Grade"]
            },
            {
                id: 8,
                title: "Stainless Steel Angle Bar",
                category: "Steel Beams",
                categorySlug: "beams",
                material: "Stainless Steel",
                materialSlug: "stainless",
                price: 42.75,
                image: "images/products/beam2.jpg",
                specifications: ["2-inch x 2-inch", "0.25-inch Thickness", "6ft Length"]
            },
            {
                id: 9,
                title: "Seamless Alloy Steel Pipe",
                category: "Steel Pipes",
                categorySlug: "pipes",
                material: "Alloy Steel",
                materialSlug: "alloy",
                price: 95.25,
                image: "images/products/pipe3.jpg",
                specifications: ["4-inch Diameter", "12ft Length", "Schedule 80"]
            },
            {
                id: 10,
                title: "Diamond Plate Steel Sheet",
                category: "Steel Sheets",
                categorySlug: "sheets",
                material: "Carbon Steel",
                materialSlug: "carbon",
                price: 110.50,
                image: "images/products/sheet3.jpg",
                specifications: ["4ft x 8ft", "3/16-inch Thickness", "Checker Pattern"]
            },
            {
                id: 11,
                title: "Stainless Steel Hexagonal Bar",
                category: "Steel Rods",
                categorySlug: "rods",
                material: "Stainless Steel",
                materialSlug: "stainless",
                price: 52.99,
                image: "images/products/rod3.jpg",
                specifications: ["1.5-inch Width", "4ft Length", "Grade 316"]
            },
            {
                id: 12,
                title: "Structural Steel H-Beam",
                category: "Steel Beams",
                categorySlug: "beams",
                material: "Carbon Steel",
                materialSlug: "carbon",
                price: 175.75,
                image: "images/products/beam3.jpg",
                specifications: ["10-inch Height", "10-inch Width", "20ft Length"]
            }
        ];
        
        // Filter products based on search parameters
        let filteredProducts = allProducts.filter(product => {
            // Filter by search query
            if (query && !product.title.toLowerCase().includes(query.toLowerCase()) && 
                !product.category.toLowerCase().includes(query.toLowerCase()) &&
                !product.material.toLowerCase().includes(query.toLowerCase())) {
                return false;
            }
            
            // Filter by category
            if (category && product.categorySlug !== category) {
                return false;
            }
            
            // Filter by material
            if (material && product.materialSlug !== material) {
                return false;
            }
            
            // Filter by price range
            if (product.price < minPrice || product.price > maxPrice) {
                return false;
            }
            
            return true;
        });
        
        // Sort products
        if (sort === 'price_low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sort === 'newest') {
            // In a real application, you would sort by date
            // For demo, we'll just reverse the array
            filteredProducts.reverse();
        }
        
        // Pagination
        const itemsPerPage = 8;
        const totalProducts = filteredProducts.length;
        const totalPages = Math.ceil(totalProducts / itemsPerPage);
        const validPage = page > 0 && page <= totalPages ? page : 1;
        
        const startIndex = (validPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        
        return {
            products: paginatedProducts,
            total: totalProducts,
            currentPage: validPage,
            totalPages: totalPages
        };
    }

    // Initialize the search page
    function initSearchPage() {
        // Display active filters
        displayActiveFilters();
        
        // Load search results
        loadSearchResults();
        
        // Initialize back to top button
        initBackToTop();
    }

    // Back to top button functionality
    function initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        
        if (backToTopButton) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
            
            // Scroll to top when clicked
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Initialize the page
    initSearchPage();
});

// Add CSS for cart notification
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: slide-in 0.3s ease-out;
        }
        
        .cart-notification i {
            font-size: 1.2rem;
        }
        
        .cart-notification p {
            margin: 0;
        }
        
        @keyframes slide-in {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .cart-notification.fade-out {
            animation: fade-out 0.3s ease-out forwards;
        }
        
        @keyframes fade-out {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});