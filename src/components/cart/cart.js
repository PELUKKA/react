// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
    return (
    <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
        {
            cartItems.map(item => (
            <CartItem key={item.id} item={item} />
            ))
        }
        </div>
    </div>
    );
}

export default Cart;