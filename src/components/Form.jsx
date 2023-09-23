import React, { useState } from "react";
import {FiAlertTriangle} from 'react-icons/fi'
import alert from "../assets/alert.png"


function Form({ selectedPrice, semanas }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [cobro, setCobro] = useState("");
  const [dni, setDni] = useState("");
  const [next, setNext] = useState();
  const [customMessage, setCustomMessage] = useState("");
  

  const mensaje = `Hola! Soy ${nombre} ${apellido}, estoy interesado en adquirir ${selectedPrice} en ${semanas} cuotas. Mi DNI es ${dni} tengo ingresos ${cobro}. Mis contactos son:\n- Mail: ${correo}\n- Teléfono: ${telefono}`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroTelefono = "+5491136049597";

  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Verifica que todos los campos estén completos
    if (nombre && apellido && correo && telefono && cuenta && dni && semanas) {
      if (cobro === "Quincenales") {
        setCustomMessage(
          <p>
            Gracias por comunicarte con <strong>PAGO SEMANAL</strong>. En este momento no contamos con un préstamo disponible para vos. Podés intentarlo nuevamente más adelante.
          </p>
        ); // Establece el mensaje personalizado
      } else {
        setCustomMessage(""); // Reinicia el mensaje personalizado si no hay error
        window.open(enlaceWhatsApp, "_blank");
      }
    } else {
      window.alert("Por favor completa todos los campos antes de enviar el mensaje.");
    }
  };
  

  const handleNext = (e) => {
    e.preventDefault();
    setNext(!next);
  };

  return (
    <div className="z-20 pr-6">
      <div className="relative text-center top-0 font-sans container">
        <div className="text-black">
          {!next ? (
            <form className="mt-4">
              <div className="row mb-1">
                <div className="col-6">
                  <h6 className="text-left mb-1">Nombre</h6>
                  <input
                    className="rounded-md border border-black w-100 px-2 py-1"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <h6 className="text-left mb-1">Apellido</h6>
                  <input
                    className="rounded-md border border-black w-100 px-2 py-1"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">Correo Electrónico</h6>
                <input
                  className="rounded-md border border-black w-100 px-2 py-1"
                  placeholder="juanperez@gmail.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">Teléfono</h6>
                <input
                  className="rounded-md border border-black w-100 px-2 py-1"
                  placeholder="1165789458"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">¿Tienes cuenta bancaria?</h6>
                <input
                  className="rounded-md border border-black w-100 px-2 py-1"
                  placeholder="Sí/No (cuenta bancaria/MercadoPago/Ualá/Brubank)"
                  value={cuenta}
                  onChange={(e) => setCuenta(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">DNI</h6>
                <input
                  className="rounded-md border border-black w-100 px-2 py-1"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>
              <button
                className="bg-tahiti-100 p-2 rounded-3xl w-36 transition-all my-4"
                onClick={handleNext}
              >
                <h5 className="text-white">Continuar</h5>
              </button>
            </form>
          ) : (
            <form className="space-y-6">
              <div className="mb-1">
                <h6 className="text-left mb-1">
                  ¿De qué manera cobrás tus ingresos?
                </h6>
                <select
                  className="rounded-md border border-black w-100 px-2 py-1"
                  value={cobro}
                  onChange={(e) => setCobro(e.target.value)}
                >
                  <option value="Diarios">Diarios y/o Semanales</option>
                  <option value="Quincenales">Quincenales y/o Mensuales</option>
                  <option value="Ambos">Ambas opciones</option>
                </select>
              </div>
              {customMessage && (
                <div className=" items-center text-gray-50 font-nunito bg-tahiti-100 text-center font-bold rounded-large">
                  <center>
                    <img 
                    className="h-20 py-3"
                    src={alert}></img>
                  </center>
                  <h4 className="text-xs pb-3 mx-2">{customMessage}</h4>
                </div>
              )}
              <div className="mb-1">
                <h6 className="text-left mb-1">
                  ¿Cuál es el monto aproximado que percibís?
                </h6>
                <select className="rounded-md border border-black w-100 px-2 py-1">
                  <option value="25k-40k">25 a 40 mil pesos</option>
                  <option value="40k-60k">40 a 60 mil pesos</option>
                  <option value="60k-80k">60 a 80 mil pesos</option>
                  <option value="80k+">Más de 80 mil pesos</option>
                </select>
                <p className="text-gray-400 text-left pt-1 text-xs">
                  * Tus datos no serán compartidos con nadie, quedan sujetos a
                  confidencialidad.
                </p>
              </div>
              <button
                className="bg-tahiti-100 p-2 rounded-3xl w-48 transition-all mt-1 mb-4"
                onClick={handleFormSubmit}
              >
                <h5 className="text-white">Enviar Formulario</h5>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
