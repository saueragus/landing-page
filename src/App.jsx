import React, { useState, useEffect } from "react";
import logo from "./assets/logo-dark.png";
import "@mui/material/styles";
import home from "./assets/hero.jpg";
import border from "./assets/home-border-red.png";
import bg2 from "./assets/bg-2.png";
import { ImFacebook } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Cards from "./components/fromCards";
import Clients from "./components/Clients";
import LastForm from "./components/LastForm";
import SlideLoan from "./components/SlideLoan";
import CountdownClock from "./components/CountdownClock";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isSmallScreen = window.innerWidth < 769;
  const numeroTelefono = +5491136049597;

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all font-nunito relative w-screen min-h-screen `}
    >
      <header className="fixed w-screen z-20 ">
        <nav
          className={`flex z-50 h-36 justify-center items-center fixed w-screen  ${
            scrolled || isSmallScreen
              ? "bg-white opacity-90 shadow-2xl"
              : "bg-transparent -z-50"
          } transition-all`}
        >
          <div className="flex items-center justify-start max-w-screen-xl w-full">
            <ul>
              <li>
                <div className=" absolute left-28  w-auto">
                <a
                  href="#"
                  >
                  <img
                    src={logo}
                    alt="logo"
                    className={`h-14 w-max -z-50 mt-3 ${
                      scrolled ? "black-image" : "white-image"
                    } ${isSmallScreen ? "hidden" : ""}`}
                    />
                </a>
                    </div>
                <ul className="pl-20 h-24 items-center justify-start  ml-60 w-screen pr-20 hidden lg:flex font-nunito font-semibold text-xs">
                  <li>
                    <a
                      href="#simulador"
                      className={`text-lg ${
                        scrolled ? "text-stone-950" : "text-gray-50"
                      } no-underline px-2 hover:text-tahiti-100 scroll-smooth`}
                    >
                      Simulador
                    </a>
                  </li>
                  <li>
                    <a
                      href="#requisitos"
                      className={`text-lg ${
                        scrolled ? "text-stone-950" : "text-gray-50"
                      } no-underline px-2 hover:text-tahiti-100`}
                    >
                      Requisitos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solicitantes"
                      className={`text-lg ${
                        scrolled ? "text-stone-950" : "text-gray-50"
                      } no-underline px-2 hover:text-tahiti-100`}
                    >
                      Solicitantes
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contacto"
                      className={`text-lg ${
                        scrolled ? "text-stone-950" : "text-gray-50"
                      } no-underline px-2 hover:text-tahiti-100`}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className=" absolute top-5 left-2 lg:hidden z-50">
              <button
                className="text-3xl text-tahiti-100 h-max z-50 rounded-2xl"
                onClick={handleMenuToggle}
              >
                <HiMenu />
              </button>
              <div
                className="absolute left-2 top-0 -z-50"
                style={{ textDecoration: "none" }}
              >
                {showMenu ? <Navbar /> : null}
              </div>
            </div>
            {isSmallScreen ? (
              <div
                className={`absolute -z-50 flex justify-center items-center min-w-full ${showMenu ? "container" : ""}`}
              >
                <div
                  className={`${
                    scrolled ? "text-zinc-950" : "text-gray-50"
                  } transition-all`}
                  style={{ marginLeft: showMenu ? "50%" : "0" }}
                >
                  <CountdownClock scrolled={scrolled} screen={isSmallScreen} />
                </div>
              </div>
            ) : (
              <div className="absolute right-20 top-4">
                <div
                  className={`${scrolled ? "text-zinc-950" : "text-gray-50"}`}
                >
                  <CountdownClock scrolled={scrolled} screen={isSmallScreen} />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div>
        <section
          id="simulador"
          className="fondo-semi-transparente relative w-full bg-cover bg-center rounded-bl-xtra py-14"
          style={{ backgroundImage: `url(${home})` }}
        >
          <div className="z-10 flex flex-col md:flex-row md:items-stretch items-center py-20 w-screen justify-around mt-10">
            <div className="text-white mb-8 md:mb-0">
              <h1
                className="text-4xl font-nunitoextra lg:absolute lg:left-36  w-72 font-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                Simulá tu préstamo
              </h1>
              <p
                className="font-nunito text-md font-semibold lg:absolute lg:left-36 lg:mt-28 shadow-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                Pedilo hoy y pagalo por semana.
              </p>
            </div>
            <div className="scale-90">

            <SlideLoan />
            </div>
          </div>
          <div className="container text-zinc-50 flex flex-col justify-center items-center mb-4">
            <h1
              className="font-nunito text-2xl mb text-center font-extrabold"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Conocenos
            </h1>
            <p className="font-nunito text-md w-1/2 text-center pb-8">
              Somos Pago Semanal, una empresa dedicada al otorgamiento de
              préstamos para personas que cuentan con ingresos diarios y
              semanales. Actualmente nos ubicamos como la primer línea de
              préstamos de pago semanal que brinda sus servicios{" "}
              <strong className="font-bold">100% online</strong> a todo el
              territorio Argentino.
            </p>
          </div>
        </section>
        <section
          className="container relative w-full bg-cover bg-center justify-center p-10 mx-auto scroll-smooth"
          style={{ backgroundImage: `url(${bg2})` }}
          id="requisitos"
        >
          <Cards />
        </section>
        <section id="solicitantes">
          <Clients />
        </section>
        <section id="contacto">
          <LastForm />
        </section>
        <footer className="h-96 bg-gradient-to-r from-tahiti-100 to-tahiti-200 sm:rounded-tl-xtra w-screen flex items-center justify-center flex-col">
          <div className="text-center mb-4">
            <img
              src={logo}
              className="h-24 max-h-full white-image"
              alt="logo"
            />
            <h4 className="pt-10 font-nunito text-white">Seguinos</h4>
          </div>
          <hr className="border-t-8 border-white border w-3/4" />
          <div className="flex justify-center items-center space-x-8 mt-4">
            <a
              href="https://www.instagram.com/pago.semanal/"
              target="_blank"
              className="rounded-full"
            >
              <BsWhatsapp className="text-3xl  border-white text-white border-2 p-1.5 rounded-full" />
            </a>
            <a

              href={`https://wa.me/${numeroTelefono}`}
              target="_blank"
              className="rounded-full"
            >
              <ImFacebook className="text-3xl border-2 text-white p-1.5 rounded-full " />
            </a>
            <a
              href="https://www.instagram.com/pago.semanal/"
              target="_blank"
              className="rounded-full"
            >
              <RxInstagramLogo className="text-3xl border-2 text-white border-white p-1.5 rounded-full" />
            </a>
          </div>
          <center className="mt-3 text-zinc-50 font-semibold">
            2023 @ Pago Semanal.
          </center>
        </footer>
      </div>
    </div>
  );
}

export default App;
