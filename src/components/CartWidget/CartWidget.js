import React from 'react';

const CartWidget = ({ itemCount }) => {
    return (
    <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className="item-count">{itemCount}</span>
    </div>
    );
}

export default CartWidget;