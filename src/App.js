
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/header";
import About from "./componentes/about";
import Contact from "./componentes/contact";
import Booking from "./componentes/booking";

import "./App.css";

function Inicio() {
  return (
    <section className="inicio">
      <h2>Bienvenidos a Hotel Paraíso</h2>
      <p>Tu lugar ideal para descansar.</p>
      <p>
        Conocé nuestras habitaciones y disfrutá
        de una estadía inolvidable.
      </p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter basename="/hotel-paraiso">
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
