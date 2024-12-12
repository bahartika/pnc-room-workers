import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  };

  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <section className="flex flex-col items-center pt-1 text-white my-4">
      <p className="text-3xl font-bold drop-shadow-[0_0_2px_black]">{formatTime(currentTime)} WIB</p>
      <p className="text-3xl font-bold text-center drop-shadow-[0_0_2px_black]">{formatDate(currentTime)}</p>
    </section>
  );
};

export default DigitalClock;
