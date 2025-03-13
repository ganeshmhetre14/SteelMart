<?php
session_start();
require_once 'admin-functions.php';

// Check if admin is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: admin-login.html");
    exit;
}

// Database connection
$conn = connectDB();

// Handle order status updates
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'update_status') {
    $order_id = $_POST['order_id'];
    $new_status = $_POST['new_status'];
    
    updateOrderStatus($conn, $order_id, $new_status);
    
    // Optional: Add notification to customer
    if ($new_status === 'shipped' || $new_status === 'delivered') {
        // notifyCustomer($order_id, $new_status);
    }
}

// Get all orders
$orders = getAllOrders($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Management | Steel Products Admin</title>
    <link rel="stylesheet" href="admin-panel.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <?php include 'admin-sidebar.php'; ?>
        
        <div class="admin-content">
            <header>
                <h1>Order Management</h1>
                <div class="admin-profile">
                    <span>Welcome, <?php echo $_SESSION['admin_name']; ?></span>
                    <a href="admin-logout.php">Logout</a>
                </div>
            </header>
            
            <div class="order-filters">
                <div class="search-container">
                    <input type="text" id="orderSearch" placeholder="Search orders by ID or customer...">
                    <button class="search-btn"><i class="fas fa-search"></i></button>
                </div>
                <select id="statusFilter">
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                </select>
                <select id="dateFilter">
                    <option value="">All Time</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
            </div>
            
            <div class="orders-table-container">
                <table class="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (empty($orders)): ?>
                            <tr>
                                <td colspan="8" class="no-orders">No orders found</td>
                            </tr>
                        <?php else: ?>
                            <?php foreach ($orders as $order): ?>
                                <tr data-status="<?php echo $order['status']; ?>">
                                    <td>#<?php echo $order['order_id']; ?></td>
                                    <td><?php echo $order['customer_name']; ?></td>
                                    <td><?php echo date('d M Y', strtotime($order['order_date'])); ?></td>
                                    <td><?php echo $order['item_count']; ?> items</td>
                                    <td>₹<?php echo number_format($order['total_amount'], 2); ?></td>
                                    <td>
                                        <span class="status-badge status-<?php echo $order['status']; ?>">
                                            <?php echo ucfirst($order['status']); ?>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="payment-badge payment-<?php echo $order['payment_status']; ?>">
                                            <?php echo ucfirst($order['payment_status']); ?>
                                        </span>
                                    </td>
                                    <td class="actions-cell">
                                        <button class="btn-view order-details" data-id="<?php echo $order['order_id']; ?>">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn-edit update-status" data-id="<?php echo $order['order_id']; ?>">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn-invoice" data-id="<?php echo $order['order_id']; ?>">
                                            <i class="fas fa-file-invoice"></i>
                                        </button>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
            
            <!-- Order Details Modal -->
            <div id="orderDetailsModal" class="modal">
                <div class="modal-content order-details-modal">
                    <span class="close">&times;</span>
                    <h2>Order Details - #<span id="modalOrderId"></span></h2>
                    
                    <div class="order-details-container">
                        <div class="order-info-section">
                            <h3>Order Information</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">Order Date:</span>
                                    <span id="orderDate" class="info-value"></span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Status:</span>
                                    <span id="orderStatus" class="info-value"></span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Payment Method:</span>
                                    <span id="paymentMethod" class="info-value"></span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Payment Status:</span>
                                    <span id="paymentStatus" class="info-value"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="customer-info-section">
                            <h3>Customer Information</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">Name:</span>
                                    <span id="customerName" class="info-value"></span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Email:</span>
                                    <span id="customerEmail" class="info-value"></span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Phone:</span>
                                    <span id="customerPhone" class="info-value"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="address-info-section">
                            <div class="shipping-address">
                                <h3>Shipping Address</h3>
                                <p id="shippingAddress"></p>
                            </div>
                            <div class="billing-address">
                                <h3>Billing Address</h3>
                                <p id="billingAddress"></p>
                            </div>
                        </div>
                        
                        <div class="order-items-section">
                            <h3>Order Items</h3>
                            <table class="order-items-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody id="orderItemsList">
                                    <!-- Order items will be loaded here dynamically -->
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3" class="text-right">Subtotal:</td>
                                        <td id="orderSubtotal"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-right">Tax (18% GST):</td>
                                        <td id="orderTax"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-right">Shipping:</td>
                                        <td id="orderShipping"></td>
                                    </tr>
                                    <tr class="order-total">
                                        <td colspan="3" class="text-right">Total:</td>
                                        <td id="orderTotal"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Update Status Modal -->
            <div id="updateStatusModal" class="modal">
                <div class="modal-content status-modal">
                    <span class="close">&times;</span>
                    <h2>Update Order Status</h2>
                    <form id="updateStatusForm" method="POST">
                        <input type="hidden" id="updateOrderId" name="order_id">
                        <input type="hidden" name="action" value="update_status">
                        
                        <div class="form-group">
                            <label for="newStatus">New Status</label>
                            <select id="newStatus" name="new_status" required>
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="statusNotes">Notes (Optional)</label>
                            <textarea id="statusNotes" name="notes" rows="3"></textarea>
                        </div>
                        
                        <div class="form-group notify-customer">
                            <input type="checkbox" id="notifyCustomer" name="notify_customer" checked>
                            <label for="notifyCustomer">Notify Customer</label>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn-secondary" id="cancelStatusBtn">Cancel</button>
                            <button type="submit" class="btn-primary">Update Status</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <script src="orders.js"></script>
</body>
</html>