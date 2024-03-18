import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CheckoutForm = () => {
  
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
    });

  
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
    e.preventDefault();


    try {
    
        const db = firebase.firestore();
        const ordersRef = db.collection('orders');
        const newOrder = {
        ...formData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        await ordersRef.add(newOrder);
  
        setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
        });
      
    } catch (error) {
        console.error('Error al enviar la orden:', error);
    
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Order</button>
    </form>
    );
};

export default CheckoutForm;