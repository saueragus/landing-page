import React, { useState } from "react";
import rocket from "../assets/rocket.png"
import home from "../assets/home-border.png"

function Form() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cuenta, setCuenta] = useState("otro");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  
  // Reemplaza el número de teléfono con el que desees contactar
  const mensajeWhatsApp = `Hola! Soy ${nombre} ${apellido}, soy de ${cuenta}, quería hacer una consulta sobre ${asunto}:\n\n${mensaje}`;
  const numeroTelefono = "+5491136049597";
  const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
  
  const handleFormSubmit = (e) => {
    e.preventDefault(e)
    window.open(enlaceWhatsApp, "_blank");
  };

  return (
    <div className="z-20 pb-16 ">
      <center className="mb-20">
        <h3 className="font-bold font-nunito text-tahiti-100">Contactanos</h3>
        <p className="text-gray-400">
          Dejanos tus datos para poder ofreceter el mejor credito para vos.
        </p>
        <img src={home} alt="home" />
      </center>
      <div className="relative text-center top-0 font-sans container flex justify-around">
        <img
          src={rocket}
          className="w-1/2 h-auto items-center hidden lg:block"
          alt="rocket"
        />
        <div className="text-black">
          <form className="font-nunito space-y-2">
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
              <h6 className="text-left">Email</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">Teléfono</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">De dónde sos?</h6>
              <select
                className="rounded-md border border-black w-full px-2 py-1"
                value={cuenta}
                onChange={(e) => setCuenta(e.target.value)}
              >
                <option value="3 de Febrero">3 de Febrero</option>
                <option value="Garin">Garin</option>
                <option value="Hurlingham">Hurlingham</option>
                <option value="Jose C. Paz">Jose C. Paz</option>
                <option value="Ituzaingo">Ituzaingo</option>
                <option value="Malvinas Argentinas">Malvinas Argentinas</option>
                <option value="Maquinista Savio">Maquinista Savio</option>
                <option value="Maschwit">Maschwitz</option>
                <option value="Merlo">Merlo</option>
                <option value="Moreno">Moreno</option>
                <option value="Morón">Morón</option>
                <option value="Pilar">Pilar</option>
                <option value="San Fernando">San Fernando</option>
                <option value="San Isidro">San Isidro</option>
                <option value="San Martin">San Martin</option>
                <option value="San Miguel">San Miguel</option>
                <option value="Tigre">Tigre</option>
                <option value="Vicente Lopez">Vicente Lopez</option>
                <option value="otro">Otro</option>
                </select>
            </div>
            <div>
              <h6 className="text-left">Asunto</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            <div>
              <h6 className="text-left">Mensaje</h6>
              <input
                className="rounded-md border border-black w-full px-2 py-1"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <div className="bg-tahiti-100 mt-3 items-center h-full text-center rounded-lg text-white font-semibold">
  <button
    className="bg-tahiti-100 items-center w-full h-full py-2 rounded-xl transition-all flex text-center "
    onClick={handleFormSubmit}
  >
    <h5 className="text-white text-center h-full items-center w-full mt-2 font-semibold">Enviar formulario</h5>
  </button>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
