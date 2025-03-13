# SteelMart

![logo](https://github.com/user-attachments/assets/66bc52ae-ad0c-4d98-9fb4-e4d56d5d3fd0)

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
![Home1](https://github.com/user-attachments/assets/7e821e71-ff50-4510-b0c0-2ad8cd75bac7)

### Products Page
![Products_page1](https://github.com/user-attachments/assets/ad5e94ee-1d70-4b68-8c6c-76dc992558df)
![Products_page2](https://github.com/user-attachments/assets/2ae9e175-9865-4358-8747-5b1019ed0644)

### Product Details
![products_details1](https://github.com/user-attachments/assets/7ac07d55-944b-4993-a339-3d98312d794e)

### Shopping Cart
![cart](https://github.com/user-attachments/assets/c4d005bd-6022-407e-9ef4-3290ff225af2)


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

For support, please email ganeshmhetre275@gmail.com or open an issue on the GitHub repository.
