import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://wa.me" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Ver Habitaciones</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
