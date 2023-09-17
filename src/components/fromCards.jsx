import React from "react";
import border from "../assets/home-border.png";

function fromCards() {
  return (
    <div className="z-20 ">
      <center className="text-center top-0 font-nunito">
        <h5 className="text-tahiti-100 pt-10 font-bold text-2xl">
          {" "}
          ¿Qué necesito para pedir mi préstamo?{" "}
        </h5>
        <p className="text-gray-400 font-semibold text-xl">
          Creamos un sistema sin obstáculos
        </p>
        <center className="mx-auto">
          <img src={border} className="h-15"></img>
        </center>
      </center>

      <div className="flex flex-col md:flex-row justify-center max-lg:container">
        <div className="max-lg:w-full w-1/4 bg-white outline outline-2 outline-tahiti-200 border-8 border-l-0 border-t-0 border-tahiti-200 shadow-tahiti-200 rounded-3xl md:mx-5 my-4">
          <div className="px-4 mt-4 my-5">
            <h5 className="text-md font-nunito font-bold text-tahiti-100">
              DNI
            </h5>
            <p className="text-black text-sm font-semibold">
              Poseer DNI físico con nacionalidad argentina
            </p>
            <div className="mt-auto mx-auto absolute bottom-30 md:bottom-20">
              <a
                href="#contacto"
                className="no-underline text-tahiti-100 font-nunito text-sm"
              >
                Solicitalo ➜
              </a>
            </div>
          </div>
        </div>
        <div className="max-lg:w-full w-1/4 bg-white outline outline-2 outline-tahiti-200 border-8 border-l-0 border-t-0 border-tahiti-200 shadow-tahiti-200 rounded-3xl md:mx-5 my-4">
          <div className="px-4 mt-4 my-5">
            <h5 className="text-md font-nunito font-bold text-tahiti-100">
              Ingresos
            </h5>
            <p className="text-black text-sm font-semibold">
              Tener ingresos diarios o semanales y contar con los medios para
              poder demostrarlos.
            </p>
            <div className="mt-auto mx-auto absolute bottom-30 md:bottom-20">
              <a
                href="#contacto"
                className="no-underline text-tahiti-100 font-nunito text-sm"
              >
                Solicitalo ➜
              </a>
            </div>
          </div>
        </div>
        <div className="max-lg:w-full w-1/4 bg-white outline outline-2 outline-tahiti-200 border-8 border-l-0 border-t-0 border-tahiti-200 shadow-tahiti-200 rounded-3xl md:mx-5 my-4">
          <div className="px-4 mt-4 my-5">
            <h5 className="text-md font-nunito font-bold text-tahiti-100">
              Edad
            </h5>
            <p className="text-black text-sm font-semibold">
              El solicitante debe tener entre 30 y 60 años.
            </p>
            <div className="mt-auto mx-auto absolute bottom-30 md:bottom-20">
              <a
                href="#contacto"
                className="no-underline text-tahiti-100 font-nunito text-sm"
              >
                Solicitalo ➜
              </a>
            </div>
          </div>
        </div>
        <div className="max-lg:w-full w-1/4 bg-white outline outline-2 outline-tahiti-200 border-8 border-l-0 border-t-0 border-tahiti-200 shadow-tahiti-200 rounded-3xl md:mx-5 my-4">
          <div className="px-4 mt-4 my-5">
            <h5 className="text-md font-nunito font-bold text-tahiti-100">
              Exclusivo Jubilados
            </h5>
            <p className="text-black text-sm font-semibold">
              Presentar una factura de un servicio fijo de la casa que no posea
              deuda
            </p>
            <div className="mt-auto mx-auto absolute bottom-30 md:bottom-20">
              <a
                href="#contacto"
                className="no-underline text-tahiti-100 font-nunito text-sm"
              >
                Solicitalo ➜
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fromCards;
