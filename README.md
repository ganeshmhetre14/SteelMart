# SteelMart

# Steel Mart

![Steel Mart Logo](/api/placeholder/800/200)
![Uploading Home1.png…]()

## Overview

Steel Mart is a lightweight PHP-based web application for steel trading businesses. This simple yet effective website allows customers to browse steel products, place orders, and contact the business without requiring a database backend.

## Features

- **Product Catalog**
  - Browse various steel products
  - View detailed product specifications
  - Advanced search functionality to find specific products

- **Shopping Cart**
  - Add products to cart
  - Adjust quantities
  - Review selections before ordering

- **Order Processing**
  - Simple order form
  - Order confirmation
  - Order tracking reference

- **Information Pages**
  - About the company
  - Privacy policy
  - Frequently asked questions
  - Contact information

## Pages

The website consists of the following pages:

1. **Index (Home)** - Main landing page showcasing featured products and company introduction
2. **Orders** - View and manage customer orders
3. **Privacy** - Privacy policy and data handling information
4. **Products** - Complete catalog of steel products
5. **Product-details** - Detailed view of individual products
6. **Cart** - Shopping cart functionality
7. **About** - Company information and history
8. **Advanced Search** - Enhanced search functionality for finding specific products
9. **FAQ** - Frequently asked questions
10. **Contact** - Contact form and business information

## Screenshots

### Home Page
SteelMart/ScreenShots/Home1.png
### Products Page
![Products Page](/api/placeholder/800/450)

### Shopping Cart
![Shopping Cart](/api/placeholder/800/450)

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP
- **Server**: Apache HTTP Server
- **No database required**

## Requirements

### Prerequisites
- PHP 7.4 or higher
- Apache HTTP Server 2.4 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

### System Requirements
- **OS**: Windows, macOS, or Linux
- **PHP Extensions**: 
  - json
  - session
  - fileinfo
  - mbstring

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ganeshmhetre14/steel-mart.git
   ```

2. Configure your Apache server to point to the project directory
   - For XAMPP: Move the project folder to the `htdocs` directory
   - For standalone Apache: Configure a virtual host to point to the project directory

3. Configure Apache (example virtual host):
   ```apache
   <VirtualHost *:80>
       ServerName steelmart.local
       DocumentRoot /path/to/steel-mart
       <Directory /path/to/steel-mart>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

4. Add the following entry to your hosts file:
   ```
   127.0.0.1 steelmart.local
   ```

5. Restart Apache server

6. Access the website at `http://steelmart.local` or `http://localhost/steel-mart`

## Project Structure

```
steel-mart/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   └── cart.js
│   └── images/
│       ├── products/
│       └── layout/
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── functions.php
├── data/
│   ├── products.json
│   └── orders.json
├── index.php
├── orders.php
├── privacy.php
├── products.php
├── product-details.php
├── cart.php
├── about.php
├── advanced-search.php
├── faq.php
├── contact.php
└── README.md
```


## Customization

1. **Logo and Branding**: Replace the logo in `img/products/logo.png`
2. **Contact Information**: Update contact details in `contact.php` and footer
3. **Product Images**: Add product images to `img/products/`
4. **Styling**: Modify `css/style.css` to match your branding


## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)



## Support

For support, please email ganeshmhetre275@steelmart.com or open an issue on the GitHub repository.
