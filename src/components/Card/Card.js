import React from "react";
import Button from "../Button/Button";
import "./Card.css";
import iconAccessibleRestroom from "../../images/facilities/icon-accessible-restroom.png";
import iconAudioDescription from "../../images/facilities/icon-audio-description.png";
import iconBraille from "../../images/facilities/icon-braille.png";
import iconElevator from "../../images/facilities/icon-elevator.png";
import iconGuideDog from "../../images/facilities/icon-guide-dog.png";
import iconLargeDoor from "../../images/facilities/icon-large-door.png";
import iconLibras from "../../images/facilities/icon-libras.png";
import iconParking from "../../images/facilities/icon-parking.png";
import iconRamp from "../../images/facilities/icon-ramp.png";
import iconTactility from "../../images/facilities/icon-tactility.png";

const Card = (item) => {
  return (
    <div className="card cardContainer">
      <div className="cardImage"></div>
      <div className="cardContent">
        <h3>Nome do local</h3>
        <ul className="cardFacilities">
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[0]} ${
              item.facilities[0].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconBraille}
              alt="Braille"
              title="Sinalização em Braile"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[1]} ${
              item.facilities[1].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconAudioDescription}
              alt="Audio Description"
              title="Áudio descrição"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[2]} ${
              item.facilities[2].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconAccessibleRestroom}
              alt="Accessible Restroom"
              title="Banheiro acessível"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[3]} ${
              item.facilities[3].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconElevator}
              alt="Accessible elevator"
              title="Elevador para cadeirantes"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[4]} ${
              item.facilities[4].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconParking}
              alt="Parking for wheelchair users / eldery"
              title="Estacionamento para idosos / deficientes"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[5]} ${
              item.facilities[5].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconGuideDog}
              alt="Guide dogs allowed"
              title="Permite acesso de cães-guias"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[6]} ${
              item.facilities[6].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconTactility}
              alt="Tactility available"
              title="Piso tátil de alerta"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[7]} ${
              item.facilities[7].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconLargeDoor}
              alt="Large doors"
              title="Portas largas"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[7]} ${
              item.facilities[7].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconRamp}
              alt="Ramps for wheelchair users"
              title="Rampas de acesso para cadeirante"
            ></img>
          </li>
          <li
            className="cardFacilitiesItem" /* {`cardFacilitiesItem ${item.facilities[8]} ${
              item.facilities[8].status ? "cardFacilitiesItemDisabled" : ""
            }`} */
          >
            <img
              src={iconLibras}
              alt="Libras"
              title="Atendimento em Libras"
            ></img>
          </li>
        </ul>
      </div>
      <p>LOREM IPSUM DOLOR SIT AMET{/* {item.description} */}</p>
      <Button>Como chegar</Button>
    </div>
  );
};

export default Card;
