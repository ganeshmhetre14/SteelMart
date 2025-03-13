<?php
session_start();
require_once 'config.php';
require_once 'admin-functions.php';

// Check if admin is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Unauthorized access']);
    exit;
}

// Get popular products data
$productsData = getPopularProductsData($conn, 5);

// Return JSON response
header('Content-Type: application/json');
echo json_encode($productsData);
?>