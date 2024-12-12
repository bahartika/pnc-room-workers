import React from "react";
import Pelindo from ".././assets/pelindo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <img src={Pelindo} width={175} alt="Pelindo logo" className="bg-white p-4 rounded-xl" />
      <h1 className="text-4xl font-bold pt-5 justify-center text-center text-white drop-shadow-[0_0_2px_black]">PNC ROOM PELINDO BRANCH TANJUNG INTAN</h1>
    </header>
  );
};

export default Header;
