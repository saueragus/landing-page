import React from 'react';

function TuComponente() {
  return (
    <div>
      <svg
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="53%" x2="100%" y2="47%">
            <stop offset="5%" stopColor="#e84157" />
            <stop offset="95%" stopColor="#f0794f" />
          </linearGradient>
        </defs>
        <path
          d="M 0,200 C 0,200 0,100 0,100 C 125.06666666666666,77.2 250.13333333333333,54.4 418,58 C 585.8666666666667,61.6 796.5333333333333,85.6 974,93 C 1151.4666666666667,100.4 1295.7333333333333,94.2 1440,88 C 1440,88 1440,200 1440,200 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        />
      </svg>
    </div>
  );
}

export default TuComponente;
