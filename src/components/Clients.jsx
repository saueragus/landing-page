import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import first from "../assets/news/car_1.png";
import scnd from "../assets/news/car_2.png";
import thrd from "../assets/news/car_3.png";
import frth from "../assets/news/car_4.png";
import ffth from "../assets/news/car_5.png";
import p1 from "../assets/news/img-1.png";
import p2 from "../assets/news/img-2.png";
import p3 from "../assets/news/img-3.png";
import phone from "../assets/news/celular.png";
import Wave from "./Wave";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//512*1827
function ClientCard({ isSmallScreen }) {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024, // Pantallas medianas
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      rating: 5,
      text: "Son unos genios, pedí mi primer préstamo para comprar mercadería para mi negocio. Hoy voy por mi tercera renovación!! Son super recomendables.",
      author: "Mario G.",
    },
    {
      rating: 5,
      text: "Uno de los pocos préstamos reales, soy cliente de ellos, si cumplis con los requisitos, tenes el dinero en el día. Mi experiencia es 100% recomendable.",
      author: "Bruno L.",
    },
    {
      rating: 5,
      text: "Unos genios!! Pedí mi préstamo para comprar telas para mi negocio. Te mandan por cbu y te cobran por semana! Y podés transferir, muy confiables!",
      author: "Florencia B.",
    },
    {
      rating: 5,
      text: "Pedí un préstamo y me lo transfirieron en el día. Los pagos son semanales , super correcto y organizado todo, lo recomiendo.",
      author: "Julieta J.",
    },

    // Agrega más reviews aquí si es necesario
  ];
  const [activeSlide, setActiveSlide] = useState(
    Math.floor(reviews.length / 2)
  );

  return (
    <div className="text-center top-0 font-nunito relative py-20 ">
      <h5 className="text-tahiti-100 pt-10 font-bold text-4xl">
        {" "}
        Ellos confían en nosotros{" "}
      </h5>
      <div>
        <Wave />
      </div>
      <div className="bg-gradient-to-r from-tahiti-100 to-tahiti-200">
        <Slider focusOnSelect={true} {...settings}>
          {reviews.map((review, index) => (
            <div className="p-10" key={index}>
              <div
                className={`client-card bg-white rounded-3xl ${
                  index === activeSlide ? "active" : ""
                } mx-8 md:mx-8 lg:mx-10 my-4`}
              >
                <img
                  src={index === 0 ? p1 : index === 1 ? p2 : p3}
                  alt={`Persona ${index + 1}`}
                  className="h-24 p-2"
                />
                <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <div className="text-left px-3 font-semibold font-nunito">
                  <p>{review.text}</p>
                  <p className="text-tahiti-100 font-semibold py-2">
                    - {review.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex container  space-x-40">
          <div>
            <img
              src={phone}
              alt="celular"
              className={`${isSmallScreen ? "hidden" : ""}`}
            ></img>
          </div>
          <div className="mt-32 decoration-transparent text-zinc-50 font-sans">
            <center className="my-5">
              <h1 className="font-semibold font-sans">Nuestro prestamo es:</h1>
            </center>
            <div className="flex items-stretch ">
              <img src={first} className="w-auto h-24"></img>
              <div className="text-left mt-3">
                <h4 className="text-md font-bold">Rápido</h4>
                <p className="text-sm">
                  Pedilo hoy, tenelo hoy. Un trámite que no te lleva más de 30
                  minutos y podrás contar con el dinero en tu cuenta en el acto
                </p>
              </div>
            </div>
            <div className="flex items-stretch text-zinc-50">
              <img src={scnd} className="w-auto h-24"></img>
              <div className="text-left mt-3">
                <h4 className="text-md font-bold">Fácil</h4>
                <p className="text-sm">
                  Disponemos de un proceso adecuado a tus necesidades, donde
                  podrás presentar la documentación de manera online y recibir
                  el dinero en el momento.
                </p>
              </div>
            </div>
            <div className="flex items-stretch text-zinc-50">
              <img src={thrd} className="w-auto h-24"></img>
              <div className="text-left mt-3">
                <h4 className="text-md font-bold">Flexible</h4>
                <p className="text-sm">
                  Nos adaptamos a tu realidad. En Pago Semanal cada cliente es
                  único, por eso nos tomamos el trabajo de hacer un análisis y
                  adaptarnos a tu situación actual
                </p>
              </div>
            </div>
            <div className="flex items-stretch text-zinc-50">
              <img src={frth} className="w-auto h-24"></img>
              <div className="text-left mt-3">
                <h4 className="text-md font-bold">Escalable</h4>
                <p className="text-sm">
                  Formando parte de la comunidad de Pago Semanal y cumpliendo a
                  término las cuotas de tu préstamo, podrás acceder a
                  renovaciones donde los montos aumentarán
                </p>
              </div>
            </div>
            <div className="flex items-stretch text-zinc-50">
              <img src={ffth} className="w-auto h-24"></img>
              <div className="text-left mt-3">
                <h4 className="text-md font-bold">Confiable</h4>
                <p className="text-sm">
                  A lo largo de una década, en Pago Semanal hemos construido una
                  marca de confianza, colaborando con nuestros clientes en hacer
                  realidad sus sueños y superar desafíos
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
