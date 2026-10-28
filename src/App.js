
import React from "react";
import "./App.css";

import Header from "./componentes/header";
import About from "./componentes/about";
import Contact from "./componentes/contact";
import Booking from "./componentes/booking";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="inicio" className="inicio">
          <h2>Bienvenidos a Hotel Paraíso</h2>
          <p>Tu lugar ideal para descansar.</p>
        </section>

        <About />
        <Contact />
        <Booking />
      </main>
    </div>
  );
}

export default App;
