
import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Hotel Paraíso</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
        <a href="#booking">Habitaciones</a>
      </nav>
    </header>
  );
}

export default Header;
