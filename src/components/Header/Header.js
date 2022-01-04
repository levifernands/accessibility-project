import React, { useContext } from "react";
import "./Header.css";
import logoAcessaBR from "../../images/logoAcessaBR.svg";
import logoEbac from "../../images/logoEbac.svg";
import { LocationContext } from "../../contexts/LocationContext";

const Header = () => {
  const { city, state } = useContext(LocationContext);
  return (
    <header className="headerContainer">
      <div className="headerLogo headerLogoState">
        <img src={logoAcessaBR} alt="Logo AcessaBR" />
        <span className="headerCity">
          / {city} - {state}
        </span>
      </div>
      <div className="headerLogoEbac">
        <span className="headerLogoSpan">apoio: </span>
        <img src={logoEbac} alt="Logo Ebac" />
      </div>
    </header>
  );
};

export default Header;
