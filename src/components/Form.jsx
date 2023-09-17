import React, { useState } from "react";

function Form({ selectedPrice, selectedSemanas }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [dni, setDni] = useState("");

  const mensaje = `Hola! Soy ${nombre} ${apellido}, estoy interesado en adquirir ${selectedPrice} en ${selectedSemanas} cuotas. Mi DNI es ${dni} tengo ingresos ${cuenta}. Mis contactos son:\n- Mail: ${correo}\n- Teléfono: ${telefono}`;
  // Codifica el mensaje para que sea parte del URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  // Reemplaza el número de teléfono con el que desees contactar
  const numeroTelefono = "+5491136049597";
  // Genera el enlace de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  const handleFormSubmit = (e) => {
    e.preventDefault(e);
    window.open(enlaceWhatsApp, "_blank");
  };

  return (
    <div className="z-20 pr-6">
      <div className="relative text-center top-0 font-sans container">
        <div className="text-black">
          <form>
            <div className="grid grid-cols-2">
              <div className="pr-1.5">
                <h6 className="text-left">Nombre</h6>
                <input
                  className="rounded-md border border-black w-full px-2 py-1"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="pl-1.5">
                <h6 className="text-left">Apellido</h6>
                <input
                  className="rounded-md border border-black w-full px-2 py-1"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h6 className="text-left">Correo Electrónico</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                placeholder="juanperez@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">Teléfono</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                placeholder="1165789458"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">¿Tenes cuenta bancaria?</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                placeholder="Si/no (cuenta bancaria/mercadopago/ualá/brubank)"
                value={cuenta}
                onChange={(e) => setCuenta(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">DNI</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </div>
          </form>
        </div>
        <button
          className="bg-tahiti-100 p-2 rounded-xl transition-all my-4"
          onClick={handleFormSubmit}
        >
          <h5 className="text-white">Enviar formulario</h5>
        </button>
      </div>
    </div>
  );
}

export default Form;
