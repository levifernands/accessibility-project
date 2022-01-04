import React, { useContext } from "react";
import Slider from "../Slider/Slider";
import "./Places.css";
import { FilterContext } from "../../contexts/FilterContext";

const Places = () => {
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext);
  return (
    <section className="places">
      <div className="placesHeader">
        <h2 className="placesTitle">
          {filteredPlace ? filteredPlace + " " : "Locais "}
          <span>Acessíveis</span>
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
