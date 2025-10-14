"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  const weddingDate = new Date('2025-11-08T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);
  
  if (!isClient) {
    return null;
  }

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="mt-12 w-full max-w-md">
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
        {timeUnits.map((unit, index) => (
          <div key={index} className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <div className="font-headline text-3xl md:text-5xl">{unit.value}</div>
            <div className="text-sm uppercase tracking-widest">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
