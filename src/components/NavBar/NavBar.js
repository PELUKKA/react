import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar(){

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/cart">
            <ShoppingCartIcon />
            </Link>
        </nav>

    )
    

}


export default Navbar;