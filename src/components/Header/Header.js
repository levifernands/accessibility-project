import React from "react";
import "./Header.css";
import logoAcessaBR from "../../images/logoAcessaBR.svg";
import logoEbac from "../../images/logoEbac.svg";

const Header = (props) => {
  return (
    <header className="headerContainer">
      <div className="headerLogo headerLogoState">
        <img src={logoAcessaBR} alt="Logo AcessaBR" />
        <span className="headerCity">
          / {props.city} - {props.uf}
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
