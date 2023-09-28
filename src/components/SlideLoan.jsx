import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Form from "./Form";
import Loan from "./Loan";


function SlideLoan() {
  const [selectedPrice, setSelectedPrice] = useState(20000);
  const [showForm, setShowForm] = useState(false);
  const [selectedSemanas, setSelectedSemanas] = useState(0);
  const [checkboxSelected, setCheckboxSelected] = useState(false);

  const getAriaValueText = (value) => {
    return `< $${value} >`;
  };

  const handlePriceChange = (event, value) => {
    setSelectedPrice(value);
  };

  const handleCheckboxChange = (event) => {
    const semanas = parseInt(event.target.value);
    const checkboxes = document.querySelectorAll('input[name="semanas"]');
    setCheckboxSelected(true);
    setSelectedSemanas(semanas);
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
  };

  const handleButtonClicked = (e) => {
    e.preventDefault();
    setShowForm(true);
    console.log(enlaceWhatsApp);
  };

  return (
    <center>
      <h1 className="text-white font-bold">

      Simulá tu préstamo
      </h1>
    <form className="text-center bg-white rounded-3xl font-sans w-96 mb-5 ">
      <div>
        <h1 className="text-2xl py-8">¿Cuánto necesitás?</h1>
      </div>
      <div className="px-12">
        <Slider
          min={20000}
          max={200000}
          step={5000}
          value={selectedPrice}
          onChange={handlePriceChange}
          getAriaValueText={getAriaValueText}
          valueLabelFormat={getAriaValueText(selectedPrice)}
          valueLabelDisplay="on" // Esto muestra el valor dentro del thumb
          track="normal"
          sx={{
            color: "#E84157",

            "& .MuiSlider-thumb": {
              width: 90, // Cambia el ancho del thumb
              height: 24, // Cambia la altura del thumb
              borderRadius: 10, // Agrega bordes para hacerlo rectangular
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "14px",
            },
            "& .MuiSlider-track": {
              height: 8,
              border: "none",
            },
            "& .MuiSlider-valueLabel": {
              height: 20,
              border: "none",
              backgroundColor: "transparent",
              color: "white",
              marginTop: "32px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              "&.MuiSlider-root:hover": {
                backgroundColor: "transparent", // Deshabilitar efecto hover
              },
            },
          }}
        />
      </div>
      <div>
        <h1 className="text-2xl pb-2">¿En cuántas semanas?</h1>
        <div>
          <ul className="text-gray-400 text-sm text-center">
            <li className="mr-4">
              <label className="checkbox-container w-full justify-center">
                <input
                  type="checkbox"
                  name="semanas"
                  value="2"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark transition-all"></span>2 semanas
              </label>
              <label className="checkbox-container w-full justify-center">
                <input
                  type="checkbox"
                  name="semanas"
                  value="4"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark transition-all"></span>4 Semanas
              </label>
              <label className="checkbox-container w-full justify-center">
                <input
                  type="checkbox"
                  name="semanas"
                  value="6"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark transition-all"></span>6 semanas
              </label>
              <label className="checkbox-container w-full justify-center">
                <input
                  type="checkbox"
                  name="semanas"
                  value="8"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark transition-all"></span>8 semanas
              </label>
              <label className="checkbox-container w-full justify-center ml-1">
                <input
                  type="checkbox"
                  name="semanas"
                  value="10"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark transition-all"></span>10 semanas
              </label>
              {showForm ? (
                <>
                  {checkboxSelected && (
                    <div className="px-4 my-4 ">
                      <Loan
                        selectedPrice={selectedPrice}
                        semanas={selectedSemanas}
                      />
                    </div>
                  )}
                  {showForm && (
                    <div className="px-4 my-4">
                      <Form
                        selectedPrice={selectedPrice}
                        semanas={selectedSemanas}
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {checkboxSelected && (
                    <div className="px-4 my-4 ">
                      <Loan
                        selectedPrice={selectedPrice}
                        semanas={selectedSemanas}
                      />
                    </div>
                  )}
                  {showForm && (
                    <div className="px-4 my-4">
                      <Form
                        selectedPrice={selectedPrice}
                        semanas={selectedSemanas}
                      />
                    </div>
                  )}
                  <button
                    className="bg-tahiti-100 p-2 rounded-3xl w-36 transition-all my-4"
                    onClick={handleButtonClicked}
                    type="button" // Asegúrate de tener el tipo definido como "button"
                  >
                    <h5 className="text-white">Continuar</h5>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </form>
    </center>

  );
}

export default SlideLoan;
