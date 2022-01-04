/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import "../../styles/responsive.css";
import homePicture from "../../images/homePicture.png";
import Pills from "../../components/Pills/Pills";
import { useParams } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import { FilterContext } from "../../contexts/FilterContext";

const places = [
  "Praças",
  "Parques",
  "Igrejas",
  "Teatros",
  "Hotéis",
  "Restaurantes",
  "Zoológicos",
  "Farmácias",
  "Lojas",
  "Museus",
];

const Home = () => {
  const { city, state } = useParams();
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext);
  const { setCity, setState } = useContext(LocationContext);

  const handleFilterPlace = (place) => {
    console.log("Current Place: " + place);
    console.log("Filtered place: " + filteredPlace);

    if (place === filteredPlace) {
      setFilteredPlace("");
      return;
    }
    setFilteredPlace(place);
  };

  useEffect(() => {
    setCity(city);
    setState(state);
  }, [city, state]);
  return (
    <main id="mainContent" className="homeContainer">
      <div className="homeCol">
        <h1 className="homeTitle">{city} para Todos</h1>
        <div className="homePicture homeMainPicture hideDesktop">
          <img src={homePicture} alt="Wheelchair user" />
        </div>
        <p className="homeText">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>
        <p className="homeText">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <div className="homePills">
          {places.map((place) => (
            <Pills
              local={place}
              selected={filteredPlace === place}
              onClick={() => handleFilterPlace(place)}
            />
          ))}
        </div>
      </div>
      <div className="homeCol">
        <div className="homePicture homeMainPicture hideMobile">
          <img src={homePicture} alt="Wheelchair user" />
        </div>
      </div>
    </main>
  );
};

export default Home;
