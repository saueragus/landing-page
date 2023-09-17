import React from "react";
import CountdownClock from "./Countdown";

function Navbar({ scrolled, isSmallScreen }) {
  return (
    <div className="-z-50">
      <ul className="text-sm font-sans font-semibold justify-start transition-all">
        <li>
          <a
            href="#simulador"
            className="text-zinc-950 decoration-transparent text-lg hover:text-tahiti-100"
          >
            Simulador
          </a>
        </li>
        <li>
          <a
            href="#requisitos"
            className="text-zinc-950 decoration-transparent text-lg hover:text-tahiti-100 z-50"
          >
            Requisitos
          </a>
        </li>
       
        <li>
          <a
            href="#solicitantes"
            className="text-zinc-950  decoration-transparent text-lg hover:text-tahiti-100"
          >
            Solicitantes
          </a>
        </li>

        <li>
          <a
            href="#contacto"
            className="text-zinc-950 decoration-transparent text-lg hover:text-tahiti-100"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
