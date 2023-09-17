import React from "react";
import { AiFillStar } from "react-icons/ai";
import first from "../assets/cli-1.jpg";
import scnd from "../assets/cli-2.jpg";
import thrd from "../assets/cli-3.jpg";
import Wave from "./Wave";

function ClientCard() {
  return (
    <div className="text-center top-0 font-nunito relative py-20">
      <h5 className="text-tahiti-100 pt-10 font-bold text-4xl">
        {" "}
        Ellos confían en nosotros{" "}
      </h5>
      <div>
        <Wave />
      </div>
      <div>
        <div className="flex flex-wrap justify-center  bg-gradient-to-r from-tahiti-100 to-tahiti-200">
          {/* Primera carta */}
          <div className="rounded-lg p-5 mx-auto md:w-1/3 relative z-10">
          <img src={first} className="rounded-t-3xl w-max h-auto lg:h-4/5" alt="Cliente" />

            <div className="bg-white rounded-b-3xl">
              <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <div className="text-left px-3 font-semibold font-nunito">
                <p>
                  Unos genios!! Pedí mi préstamo para comprar telas para mi
                  negocio. Te mandan por cbu y te cobran por semana! Y podés
                  transferir, muy confiables!
                </p>
                <p className="text-tahiti-100 font-semibold py-2">
                  - Florencia B.
                </p>
              </div>
            </div>
          </div>

          {/* Segunda carta */}
          <div className="rounded-lg p-5 mx-auto w-80 md:w-1/3  relative z-10">
          <img src={scnd} className="rounded-t-3xl w-max h-auto lg:h-4/5" alt="Cliente" />

            <div className="bg-white rounded-b-3xl">
              <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <div className="text-left px-3 font-semibold font-nunito">
                <p>
                  Unos genios!! Pedí mi préstamo para comprar telas para mi
                  negocio. Te mandan por cbu y te cobran por semana! Y podés
                  transferir, muy confiables!
                </p>
                <p className="text-tahiti-100 font-semibold py-2">
                  - Florencia B.
                </p>
              </div>
            </div>
          </div>

          {/* Tercera carta */}
          <div className="rounded-lg p-5 mx-auto w-80 md:w-1/3  relative z-10">
            <img src={thrd} className="rounded-t-3xl w-max h-auto lg:h-4/5" alt="Cliente" />
            <div className="bg-white rounded-b-3xl w-auto">
              <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <div className="text-left px-3 font-semibold font-nunito">
                <p>
                  Uno de los pocos préstamos reales, soy cliente de ellos, si
                  cumplis con los requisitos, tenes el dinero en el día. Mi
                  experiencia es 100% recomendable.
                </p>
                <p className="text-tahiti-100 font-semibold py-2">
                  - Bruno L.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
/*
<div className="rounded-lg p-5 mx-auto  md:w-1/3  relative z-10">
<img src={first} className="rounded-t-3xl w-max" alt="Cliente" />
<div className="bg-white rounded-b-3xl">
  <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
    {[...Array(5)].map((_, i) => (
      <AiFillStar key={i} />
    ))}
  </div>
  <div className="text-left px-3 font-semibold font-nunito">
    <p>
    Son unos genios, pedí mi primer préstamo para comprar mercadería para mi negocio. Hoy voy por mi tercera renovación!! Son super recomendables.
    </p>
    <p className="text-tahiti-100 font-semibold py-2">
    - Mario G.
    </p>
  </div>
</div>
</div>*/