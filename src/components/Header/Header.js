import React from "react";

import logo from "../assets/logofinale1.png";
import { BsPaintBucket } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";

const Header = () => {
  return (
    <div className="HeaderPokemon">
      <div className="Header2">
        {" "}
        <h1>
          <a href="/">
            <AiOutlineCar />
          </a>
        </h1>
        <h1>
          <a href="/">
            <BsPaintBucket />
          </a>
        </h1>
      </div>

      <div className="HeaderLinks">
        <img src={logo} alt="Logo Boca" />
      </div>
    </div>
  );
};

export default Header;
