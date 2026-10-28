
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Hotel Paraíso</h1>

      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <NavLink to="/booking">Habitaciones</NavLink>
      </nav>
    </header>
  );
}

export default Header;

