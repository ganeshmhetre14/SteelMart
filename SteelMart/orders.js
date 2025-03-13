// Order Management JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Load orders on page load
    loadOrders();
    
    // Add event listeners
    document.getElementById('filter-status').addEventListener('change', loadOrders);
    document.getElementById('search-order').addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        filterOrders(searchValue);
    });

    // Date range picker initialization
    flatpickr("#date-from", {
        dateFormat: "Y-m-d",
        maxDate: "today",
        onChange: loadOrders
    });
    
    flatpickr("#date-to", {
        dateFormat: "Y-m-d",
        maxDate: "today",
        onChange: loadOrders
    });
});

// Function to load orders
function loadOrders() {
    const statusFilter = document.getElementById('filter-status').value;
    const dateFrom = document.getElementById('date-from').value;
    const dateTo = document.getElementById('date-to').value;
    
    // Show loading spinner
    document.getElementById('orders-loading').classList.remove('d-none');
    
    // AJAX request to get orders
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'get-orders.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // Hide loading spinner
        document.getElementById('orders-loading').classList.add('d-none');
        
        if (this.status === 200) {
            try {
                const orders = JSON.parse(this.responseText);
                displayOrders(orders);
                updateOrderStats(orders);
            } catch(e) {
                showNotification('Error parsing order data', 'danger');
            }
        } else {
            showNotification('Failed to load orders', 'danger');
        }
    };
    xhr.onerror = function() {
        document.getElementById('orders-loading').classList.add('d-none');
        showNotification('Network error while loading orders', 'danger');
    };
    xhr.send(`status=${statusFilter}&dateFrom=${dateFrom}&dateTo=${dateTo}`);
}

// Function to display orders in the table
function displayOrders(orders) {
    const tableBody = document.getElementById('orders-table-body');
    tableBody.innerHTML = '';
    
    if (orders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No orders found</td></tr>';
        return;
    }
    
    orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.dataset.orderId = order.id;
        
        // Format date
        const orderDate = new Date(order.order_date);
        const formattedDate = orderDate.toLocaleDateString() + ' ' + 
                             orderDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Status badge class
        let statusClass = 'badge-secondary';
        if (order.status === 'Processing') statusClass = 'badge-primary';
        if (order.status === 'Shipped') statusClass = 'badge-info';
        if (order.status === 'Delivered') statusClass = 'badge-success';
        if (order.status === 'Cancelled') statusClass = 'badge-danger';
        
        tr.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer_name}</td>
            <td>${formattedDate}</td>
            <td>₹${parseFloat(order.total_amount).toFixed(2)}</td>
            <td><span class="badge ${statusClass}">${order.status}</span></td>
            <td>${order.payment_method}</td>
            <td>
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-info view-order" data-id="${order.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-primary update-status" data-id="${order.id}" data-toggle="modal" data-target="#updateStatusModal">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-success print-invoice" data-id="${order.id}">
                        <i class="fas fa-print"></i>
                    </button>
                </div>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
    
    // Add event listeners for action buttons
    document.querySelectorAll('.view-order').forEach(btn => {
        btn.addEventListener('click', function() {
            viewOrderDetails(this.dataset.id);
        });
    });
    
    document.querySelectorAll('.update-status').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.dataset.id;
            document.getElementById('update-order-id').value = orderId;
        });
    });
    
    document.querySelectorAll('.print-invoice').forEach(btn => {
        btn.addEventListener('click', function() {
            printInvoice(this.dataset.id);
        });
    });
}

// Function to filter orders by search term
function filterOrders(searchTerm) {
    const rows = document.querySelectorAll('#orders-table-body tr');
    
    rows.forEach(row => {
        const orderText = row.textContent.toLowerCase();
        if (searchTerm === '' || orderText.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Function to view order details
function viewOrderDetails(orderId) {
    // Show loading overlay
    document.getElementById('order-detail-loading').classList.remove('d-none');
    document.getElementById('orderDetailsModal').classList.add('show');
    document.getElementById('orderDetailsModal').style.display = 'block';
    
    // AJAX request to get order details
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `get-order-details.php?id=${orderId}`, true);
    xhr.onload = function() {
        document.getElementById('order-detail-loading').classList.add('d-none');
        
        if (this.status === 200) {
            try {
                const orderData = JSON.parse(this.responseText);
                populateOrderDetails(orderData);
            } catch(e) {
                showNotification('Error parsing order details', 'danger');
            }
        } else {
            showNotification('Failed to load order details', 'danger');
        }
    };
    xhr.onerror = function() {
        document.getElementById('order-detail-loading').classList.add('d-none');
        showNotification('Network error while loading order details', 'danger');
    };
    xhr.send();
}

// Function to populate order details in modal
function populateOrderDetails(orderData) {
    // Order information
    document.getElementById('detail-order-id').textContent = orderData.id;
    document.getElementById('detail-order-date').textContent = new Date(orderData.order_date).toLocaleString();
    document.getElementById('detail-order-status').textContent = orderData.status;
    document.getElementById('detail-payment-method').textContent = orderData.payment_method;
    document.getElementById('detail-payment-status').textContent = orderData.payment_status;
    
    // Customer information
    document.getElementById('detail-customer-name').textContent = orderData.customer.name;
    document.getElementById('detail-customer-email').textContent = orderData.customer.email;
    document.getElementById('detail-customer-phone').textContent = orderData.customer.phone;
    
    // Shipping address
    const shippingAddress = document.getElementById('detail-shipping-address');
    shippingAddress.innerHTML = `
        ${orderData.shipping.address_line1}<br>
        ${orderData.shipping.address_line2 ? orderData.shipping.address_line2 + '<br>' : ''}
        ${orderData.shipping.city}, ${orderData.shipping.state} ${orderData.shipping.pincode}<br>
        ${orderData.shipping.country}
    `;
    
    // Order items
    const itemsContainer = document.getElementById('order-items-container');
    itemsContainer.innerHTML = '';
    
    orderData.items.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'row mb-2 pb-2 border-bottom';
        
        itemRow.innerHTML = `
            <div class="col-md-2">
                <img src="../uploads/products/${item.image}" alt="${item.product_name}" class="img-thumbnail">
            </div>
            <div class="col-md-5">
                <h6>${item.product_name}</h6>
                <small>${item.product_code}</small>
            </div>
            <div class="col-md-2 text-center">
                ${item.quantity} × ₹${parseFloat(item.unit_price).toFixed(2)}
            </div>
            <div class="col-md-3 text-right">
                ₹${parseFloat(item.subtotal).toFixed(2)}
            </div>
        `;
        
        itemsContainer.appendChild(itemRow);
    });
    
    // Order totals
    document.getElementById('detail-subtotal').textContent = `₹${parseFloat(orderData.subtotal).toFixed(2)}`;
    document.getElementById('detail-tax').textContent = `₹${parseFloat(orderData.tax).toFixed(2)}`;
    document.getElementById('detail-shipping-cost').textContent = `₹${parseFloat(orderData.shipping_cost).toFixed(2)}`;
    document.getElementById('detail-discount').textContent = `₹${parseFloat(orderData.discount).toFixed(2)}`;
    document.getElementById('detail-total').textContent = `₹${parseFloat(orderData.total_amount).toFixed(2)}`;
    
    // Order tracking info
    if (orderData.tracking) {
        document.getElementById('tracking-info').classList.remove('d-none');
        document.getElementById('detail-tracking-number').textContent = orderData.tracking.tracking_number || 'N/A';
        document.getElementById('detail-carrier').textContent = orderData.tracking.carrier || 'N/A';
        document.getElementById('detail-shipped-date').textContent = orderData.tracking.shipped_date ? 
            new Date(orderData.tracking.shipped_date).toLocaleDateString() : 'N/A';
        document.getElementById('detail-estimated-delivery').textContent = orderData.tracking.estimated_delivery ? 
            new Date(orderData.tracking.estimated_delivery).toLocaleDateString() : 'N/A';
    } else {
        document.getElementById('tracking-info').classList.add('d-none');
    }
}

// Function to update order status
document.getElementById('update-status-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const orderId = document.getElementById('update-order-id').value;
    const newStatus = document.getElementById('new-status').value;
    const trackingNumber = document.getElementById('tracking-number').value;
    const carrier = document.getElementById('carrier').value;
    
    // AJAX request to update order
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'update-order-status.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (this.status === 200) {
            try {
                const response = JSON.parse(this.responseText);
                if (response.success) {
                    $('#updateStatusModal').modal('hide');
                    showNotification('Order status updated successfully', 'success');
                    loadOrders();
                } else {
                    showNotification(response.message || 'Failed to update order status', 'danger');
                }
            } catch(e) {
                showNotification('Error processing server response', 'danger');
            }
        } else {
            showNotification('Failed to update order status', 'danger');
        }
    };
    xhr.onerror = function() {
        showNotification('Network error while updating order status', 'danger');
    };
    xhr.send(`order_id=${orderId}&status=${newStatus}&tracking_number=${trackingNumber}&carrier=${carrier}`);
});

// Function to print invoice
function printInvoice(orderId) {
    window.open(`generate-invoice.php?id=${orderId}`, '_blank');
}

// Function to update order statistics
function updateOrderStats(orders) {
    // Count orders by status
    const counts = {
        'New': 0,
        'Processing': 0,
        'Shipped': 0,
        'Delivered': 0,
        'Cancelled': 0
    };
    
    let totalRevenue = 0;
    
    orders.forEach(order => {
        if (counts.hasOwnProperty(order.status)) {
            counts[order.status]++;
        }
        
        if (order.status !== 'Cancelled') {
            totalRevenue += parseFloat(order.total_amount);
        }
    });
    
    // Update UI with counts
    document.getElementById('total-orders').textContent = orders.length;
    document.getElementById('processing-orders').textContent = counts['Processing'];
    document.getElementById('shipped-orders').textContent = counts['Shipped'];
    document.getElementById('delivered-orders').textContent = counts['Delivered'];
    document.getElementById('revenue-amount').textContent = `₹${totalRevenue.toFixed(2)}`;
}

// Function to show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 150);
    }, 5000);
}