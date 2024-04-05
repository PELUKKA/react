import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {

    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Tienda Online</h1></Link>
            <ul className='menu'>
            <li><Link className="menu-link" to="/">Home</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/hombre">Ropa Hombre</Link></li>
            <li><Link className="menu-link" to="/productos/dama">Ropa Mujer</Link></li>
            <li><Link className="menu-link" to="/productos/joyeria">Joyeria</Link></li>
            <li><Link className="menu-link" to="/productos/electronica">Electronica</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            
            <li><CartWidget  /></li>
            </ul>
        </nav>

    )
    

}


export default Navbar;

