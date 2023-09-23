import React, {useState} from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import first from "../assets/cli-1.jpg";
import scnd from "../assets/cli-2.jpg";
import thrd from "../assets/cli-3.jpg";
import Wave from "./Wave";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientCard() {

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
        }
      },
      {
        breakpoint: 600, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const reviews = [
    {
      rating: 5,
      text: "Unos genios!! Pedí mi préstamo para comprar telas para mi negocio. Te mandan por cbu y te cobran por semana! Y podés transferir, muy confiables!",
      author: "Florencia B.",
    },
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
      text: "Pedí un préstamo y me lo transfirieron en el día. Los pagos son semanales , super correcto y organizado todo, lo recomiendo.",
      author: "Julieta J.",
    },
    
    // Agrega más reviews aquí si es necesario
  ];
  const [activeSlide, setActiveSlide] = useState(Math.floor(reviews.length / 2));

  return (
    <div className="text-center top-0 font-nunito relative py-20">
      <h5 className="text-tahiti-100 pt-10 font-bold text-4xl">
        {" "}
        Ellos confían en nosotros{" "}
      </h5>
      <div>
        <Wave />
      </div>
      <div className="bg-gradient-to-r from-tahiti-100 to-tahiti-200 pb-20">
      <Slider
    focusOnSelect={true}
    {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
            <div className={`client-card bg-white rounded-3xl ${index === activeSlide ? 'active' : ''} mx-8 md:mx-8 lg:mx-10 my-4`}>
                <div className="flex p-3 text-tahiti-100 text-2xl space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <div className="text-left px-3 font-semibold font-nunito">
                  <p>{review.text}</p>
                  <p className="text-tahiti-100 font-semibold py-2">- {review.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
  );
}

export default ClientCard;
