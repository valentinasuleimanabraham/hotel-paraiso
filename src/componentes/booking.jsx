
import React from "react";
import "./booking.css";

function Booking() {
  const habitaciones = [
    {
      id: 1,
      nombre: "Habitación Individual",
      descripcion: "Ideal para una persona.",
      precio: 45000
    },
    {
      id: 2,
      nombre: "Habitación Doble",
      descripcion: "Perfecta para dos personas.",
      precio: 65000
    },
    {
      id: 3,
      nombre: "Habitación Familiar",
      descripcion: "Espacio para toda la familia.",
      precio: 90000
    },
    {
      id: 4,
      nombre: "Suite Premium",
      descripcion: "Habitación con servicios exclusivos.",
      precio: 120000
    }
  ];

  function reservar(nombre) {
    alert("Seleccionaste: " + nombre);
  }

  return (
    <section id="booking" className="booking">
      <h2>Nuestras habitaciones</h2>

      <div className="habitaciones">
        {habitaciones.map((habitacion) => (
          <div className="habitacion" key={habitacion.id}>
            <h3>{habitacion.nombre}</h3>
            <p>{habitacion.descripcion}</p>
            <p>
              Precio por noche: ${habitacion.precio}
            </p>
            <button
              onClick={() => reservar(habitacion.nombre)}
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Booking;
