import React, { useState, useEffect } from 'react';

function CountdownClock({ scrolled, screen, showMenu}) {
  const targetDate = new Date('2023-09-18T00:00:00Z');
  const [finished, setFinished] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Actualizar estados
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeDifference <= 0) {
        clearInterval(timer);
        setFinished(!finished)

      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className={`${screen ? "scale-75" : "scale-100"} ${finished ? "hidden" : "visible"}`}>
      <center>
        <h4 className={`font-nunito font-bold ${screen ? "text-zinc-950" : ""}`}>
        ESTAMOS PRESTANDO
        </h4>
      </center>
    <div className="countdown-clock space-x-2">
      <div className="time-unit">
        <p className={`${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"} font-bold`}>Días</p>
        <h1 className="time">{String(days).padStart(2, '0')}</h1>
      </div>
      <div className="time-unit">
        <p className={`${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}  font-bold`}>Horas</p>
        <h1 className="time">{String(hours).padStart(2, '0')}</h1>
      </div>
      <div className="time-unit">
        <p className={`${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}  font-bold`}>Minutos</p>
        <h1 className="time">{String(minutes).padStart(2, '0')}</h1>
      </div>
      <div className="time-unit ">
        <p className={`${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}  font-bold`}>Segundos</p>
        <h1 className="time">{String(seconds).padStart(2, '0')}</h1>
      </div>
    </div>
    </div>

  );
}

export default CountdownClock;
