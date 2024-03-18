import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CheckoutForm = () => {
  // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
    });

  // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

  // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación de formulario, por ejemplo, aquí puedes agregar la lógica de validación
    // antes de enviar los datos a Firebase

    try {
      // Guardar los datos del formulario en Firebase Firestore
        const db = firebase.firestore();
        const ordersRef = db.collection('orders');
        const newOrder = {
        ...formData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        await ordersRef.add(newOrder);
      // Limpiar el formulario después de enviar la orden
        setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
        });
      // Mostrar un mensaje de éxito o redirigir a una página de confirmación
    } catch (error) {
        console.error('Error al enviar la orden:', error);
      // Mostrar un mensaje de error al usuario
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