import React from "react";
import "./Curator.css";
import curatorPicture from "../../images/curatorPicture.jpg";

const Curator = () => {
  return (
    <div className="curatorContainer">
      <div className="curatorPicture">
        <img src={curatorPicture} alt="Levi's picture"></img>
      </div>
      <div className="curatorInfo">
        <div className="curatorTitle">
          <h3>Levi Fernandes</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Estudante de desenvolvimento Web desde 2020, com foco em Javascript e
          suas tecnologias, como Redux, React e etc...
        </p>
      </div>
    </div>
  );
};

export default Curator;
