import React, { useState } from "react";
import alert from "../assets/alert.png";
import { info } from "autoprefixer";

function Form({ selectedPrice, semanas }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cuenta, setCuenta] = useState("si");
  const [cobro, setCobro] = useState("");
  const [monto, setMonto] = useState("");
  const [actividad, setActividad] = useState("");
  const [especializacion, setEspecializacion] = useState("");
  const [inform, setInform] = useState("");
  const [dni, setDni] = useState("");
  const [next, setNext] = useState();
  const [edad, setEdad] = useState("30-40");
  const [customMessage, setCustomMessage] = useState("");

  const mensaje = `Hola! Soy ${nombre} ${apellido}, estoy interesado en adquirir ${selectedPrice} en ${semanas} cuotas. Mi DNI es ${dni} tengo ingresos ${cobro}. Mis contactos son:\n- Mail: ${correo}\n- Teléfono: ${telefono}`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroTelefono = "+5491123408608";
  //  const numeroTelefono = "+5491136049597";

  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  const handleCorreoChange = (e) => {
    const inputValue = e.target.value;

    // Actualiza el estado del correo electrónico
    setCorreo(inputValue);

    // Validación personalizada para el correo electrónico
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Verifica que todos los campos estén completos y que el correo sea válido
    if (
      nombre &&
      apellido &&
      telefono &&
      cuenta &&
      dni &&
      semanas &&
      especializacion
    ) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        window.alert(
          "Por favor, introduce una dirección de correo electrónico válida."
        );
        return;
      }

      if (
        cobro === "Quincenales" ||
        monto === "25k-40k" ||
        actividad === "Jubilado" ||
        actividad === "Formal" ||
        especializacion === "Ambulante" ||
        especializacion === "Maestranza" ||
        especializacion === "Salud" ||
        especializacion === "Construcción"
      ) {
        setCustomMessage(
          <p>
            Gracias por comunicarte con <strong>PAGO SEMANAL</strong>. En este
            momento no contamos con un préstamo disponible para vos. Podés
            intentarlo nuevamente más adelante.
          </p>
        ); // Establece el mensaje personalizado
      } else {
        setCustomMessage(""); // Reinicia el mensaje personalizado si no hay error
        window.open(enlaceWhatsApp, "_blank");
      }
    } else {
      window.alert(
        "Por favor completa todos los campos antes de enviar el mensaje."
      );
    }
    console.log(especializacion);
    console.log(inform);
  };

  const handleBack = (e) => {
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
                    required
                  />
                </div>
                <div className="col-6">
                  <h6 className="text-left mb-1">Apellido</h6>
                  <input
                    className="rounded-md border border-black w-100 px-2 py-1"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">Correo Electrónico</h6>
                <input
                  className="rounded-md border border-black w-full px-2 py-1"
                  value={correo}
                  onChange={handleCorreoChange}
                />
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">Teléfono</h6>
                <input
                  className="rounded-md border border-black w-100 px-2 py-1"
                  placeholder="1165789458"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>

              <div className="mb-1">
                <h6 className="text-left mb-1">¿Tienes cuenta bancaria?</h6>
                <select
                  className="rounded-md border border-black w-100 px-2 py-1"
                  placeholder="(cuenta bancaria/MercadoPago/Ualá/Brubank)"
                  value={cuenta}
                  onChange={(e) => setCuenta(e.target.value)}
                  required
                >
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="mb-1 flex space-x-2">
                <div className="w-2/3">
                  <h6 className="text-left mb-1">DNI</h6>
                  <input
                    className="rounded-md border border-black w-full px-2 py-1"
                    value={dni}
                    onChange={(e) => {
                      const input = e.target;
                      input.value = input.value.replace(/\D/, ""); // Elimina caracteres no numéricos
                      setDni(input.value);
                    }}
                    type="text"
                    maxLength="8"
                    required
                  />
                </div>
                <div className="w-1/3 ">
                  <h6 className="text-left mb-1">Edad</h6>
                  <select
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    className="rounded-md border border-black w-full px-2 py-1"
                  >
                    <option value="30-40">30-40</option>
                    <option value="40-50">40-50</option>
                    <option value="50-60">50-60</option>
                  </select>
                </div>
              </div>

              <button
                className="bg-tahiti-100 p-2 rounded-3xl w-36 transition-all my-4"
                onClick={handleBack}
                type="submit"
              >
                <h5 className="text-white">Continuar</h5>
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-1 text-left">
                <button
                  className="bg-transparent text-left  p-2 rounded-3xl transition-all"
                  onClick={handleBack}
                >
                  <h5 className="text-zinc-950 hover:text-tahiti-100 text-xs text-left">
                    ←Volver
                  </h5>
                </button>
              </div>
              <div className="bg-tahiti-400 rounded-xl p-2">
                <h5 className="font-nunito font-semibold">
                  Estás cada vez más cerca de tu préstamo
                </h5>
              </div>
              <div className="space-y-3">
                <div>
                <h6 className="text-left mb-2 pt-8">
                  ¿De qué manera cobrás tus ingresos?
                </h6>
                <select
                  className="rounded-md border border-black w-100 px-2 py-1"
                  value={cobro}
                  onChange={(e) => setCobro(e.target.value)}
                  >
                  <option></option>
                  <option value="Diarios">Diarios y/o Semanales</option>
                  <option value="Quincenales">Quincenales y/o Mensuales</option>
                  <option value="Ambos">Ambas opciones</option>
                </select>
                  </div>

                <div className="mb-1">
                  <h6 className="text-left mb-2">
                    ¿Cuál es el monto aproximado que percibís?
                  </h6>
                  <select
                    className="rounded-md border border-black w-100 px-2 py-1"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                  >
                    <option></option>
                    <option value="25k-40k">25 a 40 mil pesos</option>
                    <option value="40k-60k">40 a 60 mil pesos</option>
                    <option value="60k-80k">60 a 80 mil pesos</option>
                    <option value="80k+">Más de 80 mil pesos</option>
                  </select>
                </div>
                <div className="mb-1">
                  <h6 className="text-left mb-2">
                    Actividad a la que te dedicás
                  </h6>
                  <select
                    className="rounded-md border border-black w-100 px-2 py-1 mb-3"
                    value={actividad}
                    onChange={(e) => {
                      setActividad(e.target.value);
                      if (e.target.value === "Informal") {
                        setEspecializacion("");
                      }
                      if (e.target.value === "Comerciante") {
                        setEspecializacion("");
                      }
                      if (e.target.value === "Jubilado") {
                        setEspecializacion("No");
                      }
                      if (e.target.value === "Formal") {
                        setEspecializacion("No");
                      }
                      // Agrega más lógica según lo necesites
                    }}
                  >
                    <option></option>
                    <option value="Comerciante">Comerciante</option>
                    <option value="Jubilado">Jubilado / Pensionado</option>
                    <option value="Formal">Trabajador formal</option>
                    <option value="Informal">Trabajador informal</option>
                  </select>

                  {actividad == "Comerciante" && (
                    <div className="mb-1">
                      <h6 className="text-left mb-2 ">Especialidad</h6>
                      <select
                        className=" rounded-md border border-black w-100 px-2 py-1  "
                        value={especializacion}
                        onChange={(e) => setEspecializacion(e.target.value)}
                      >
                        <option></option>
                        <option value="Fisico">Comercio Físico</option>
                        <option value="Virtual">Comercio Virtual</option>
                        <option value="Ambulante">Ferias / Ambulante</option>
                      </select>
                    </div>
                  )}
                  {actividad == "Informal" && (
                    <div className="mb-1">
                      <h6 className="text-left mb-2 ">Especialidad</h6>
                      <select
                        className=" rounded-md border border-black w-100 px-2 py-1"
                        value={especializacion}
                        onChange={(e) => setEspecializacion(e.target.value)}
                      >
                        <option></option>

                        <option value="Maestranza">
                          Maestranza / Operario
                        </option>
                        <option value="Salud">Salud </option>
                        <option value="Construcción">
                          Construcción / Mantenimiento / Reparaciones Varios{" "}
                        </option>
                        <option value="Belleza">Belleza </option>
                        <option value="Chofer">
                          Chofer / Delivery / Mensajeria{" "}
                        </option>
                        <option value="Docente">Docente Particular </option>
                        <option value="Emprendedor">
                          Emprendedor Gastronómico{" "}
                        </option>
                        <option value="Empleado">Empleado </option>
                        <option value="Tallerista">
                          Tallerista / Fabricante{" "}
                        </option>
                      </select>
                    </div>
                  )}
                  <p className="text-gray-400 text-left pt-1 text-xs mt-2">
                    * Tus datos no serán compartidos con nadie, quedan sujetos a
                    confidencialidad.
                  </p>
                </div>
              </div>
              {customMessage && (
                <div className=" items-center text-gray-50 font-nunito bg-tahiti-100 text-center font-bold rounded-large">
                  <center>
                    <img className="h-20 py-3" src={alert}></img>
                  </center>
                  <h4 className="text-xs pb-3 mx-2">{customMessage}</h4>
                </div>
              )}

              <button
                className="bg-tahiti-100 p-2 rounded-3xl w-48 transition-all mt-1 mb-4"
                onClick={handleFormSubmit}
                type="submit"
              >
                <h5 className="text-white">Quiero mi préstamo</h5>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
