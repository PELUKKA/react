// Checkout.js
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ cartItems, onCheckout }) => {
    const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
    };

    const handleCheckout = formData => {
    const orderData = {
        items: cartItems,
        customerInfo: formData
    };
    onCheckout(orderData);
    };

    return (
    <div className="checkout">
        <h2>Checkout</h2>
        <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
            {cartItems.map(item => (
            <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
            ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
        </div>
        <CheckoutForm onSubmit={handleCheckout} />
    </div>
    );
}

export default Checkout;