import React, { useState } from "react";
import "./styles.css";
import "../../styles/responsive.css";
import homePicture from "../../images/homePicture.png";
import Pills from "../../components/Pills/Pills";

const places = [
  "Praça",
  "Parque",
  "Igreja",
  "Hotel",
  "Restaurante",
  "Zoológico",
  "Farmácia",
  "Loja",
  "Museu",
];

const Home = (props) => {
  const [selectedPill, setSelectedPill] = useState("");
  return (
    <main id="mainContent" className="homeContainer">
      <div className="homeCol">
        <h1 className="homeTitle">{props.city} para Todos</h1>
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
          {places.map((item) => (
            <Pills
              local={item}
              selected={selectedPill === item}
              onClick={() => setSelectedPill(item)}
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
