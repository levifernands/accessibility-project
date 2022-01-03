import React from "react";
import Slider from "../Slider/Slider";
import "./Places.css";

const Places = () => {
  return (
    <section className="places">
      <div className="placesHeader">
        <h2 className="placesTitle">
          Locais <span>Acessíveis</span>
        </h2>
        <div className="placesSelect">
          <h5>Ordenar por:</h5>
          <select>
            <option>distância</option>
            <option>alfabeto</option>
          </select>
        </div>
      </div>
      <div className="placesContent">
        <Slider />
      </div>
    </section>
  );
};

export default Places;
