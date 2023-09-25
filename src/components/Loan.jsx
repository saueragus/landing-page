import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SlOptions } from "react-icons/sl";

function Loan({ selectedPrice, semanas }) {
 
  function cuotas(){
    let int = 0;
    let r=0

    if(semanas===2){
      int= selectedPrice/(10/7)
    }
    if(semanas===4){
      int= selectedPrice/(5/2)
    }
    if(semanas===6){
      int= selectedPrice/(10/3)
    }
    if(semanas===8){
      int= selectedPrice/4
    }
    if(semanas===10){
      int= selectedPrice/(50/11)
    }
    return int;
  }

  const int = cuotas();


  return (
    <div className="h-20 bg-tahiti-400 text-gray-600 font-sans text-center justify-center items-center text-md">
      <div className= "p-2 rounded-full">
      <h7 className="px-1">Devolvés</h7>
        <h7 className="bg-tahiti-100 text-white p-1 px-2 rounded-lg">{semanas}</h7>
      <h7 className="px-1">cuotas</h7>
      </div>
      <div>
      <h7 className="px-1">de</h7>
        <h7 className="bg-tahiti-100 text-white p-1  rounded-lg">{int.toFixed(0)} $</h7>
      </div>
    </div>
  );
}

export default Loan;
