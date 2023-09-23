import React, { useState, useEffect } from 'react';

function CountdownClock({ scrolled, screen, showMenu }) {
  const targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 15);
  const [finished, setFinished] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          if (minutes > 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
            return 59;
          } else {
            clearInterval(timer);
            setFinished(true);
            setMinutes(15);
            setSeconds(0);
            return 0;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  return (
    <div className={` ${screen ? "scale-75" : "scale-100"}`}>
      <center>
        <h4 className={`font-nunito font-bold ${screen ? "text-zinc-950" : ""}`}>
          Solicitalo ahora
        </h4>
      </center>
      <div className="countdown-clock space-x-2">
      <div className="time-unit">
          <p className={`font-nunito font-bold ${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}`}>Días</p>
          <h1 className="time ">{String(days).padStart(2, '0')}</h1>
        </div>
        <div className="time-unit">
          <p className={`font-nunito font-bold ${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}`}>Horas</p>
          <h1 className="time">{String(hours).padStart(2, '0')}</h1>
        </div>
        <div className="time-unit">
          <p className={`font-nunito font-bold ${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}`}>Minutos</p>
          <h1 className="time">{String(minutes).padStart(2, '0')}</h1>
        </div>
        <div className="time-unit">
          <p className={`font-nunito font-bold ${scrolled ? "text-zinc-950" : "text-zinc-100"} ${screen ? "text-zinc-950" : "text-zinc-100"}`}>Segundos</p>
          <h1 className="time">{String(seconds).padStart(2, '0')}</h1>
        </div>
      </div>
    </div>
  );
}

export default CountdownClock;
