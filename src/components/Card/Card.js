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

const facilities = [
  { id: 1, name: "Sinalização em Braile", icon: iconBraille },
  { id: 2, name: "Audio descrição", icon: iconAudioDescription },
  { id: 3, name: "Banheiro acessível", icon: iconAccessibleRestroom },
  { id: 4, name: "Elevador para cadeirantes", icon: iconElevator },
  {
    id: 5,
    name: "Estacionamento para idosos / deficientes",
    icon: iconParking,
  },
  { id: 6, name: "Permite acesso de cães-guias", icon: iconGuideDog },
  { id: 7, name: "Piso tátil de alerta", icon: iconTactility },
  { id: 8, name: "Portas largas", icon: iconLargeDoor },
  { id: 9, name: "Rampas de acesso para cadeirante", icon: iconRamp },
  { id: 10, name: "Atendimento em Libras", icon: iconLibras },
];

const isChecked = (facility, place) => {
  const findedFacility = place.facilities.find((currentFacility) => {
    return currentFacility.item === facility.id;
  });

  if (!findedFacility) {
    return false;
  } else {
    return findedFacility.status;
  }
};
const Card = ({ place }) => {
  const imagePath = require("../../images" + place.image);
  return (
    <div className="card cardContainer">
      <div className="cardImage">
        <img src={imagePath.default} alt={place.name} title={place.name} />
      </div>
      <div className="cardContent">
        <h3>{place.name}</h3>
        <ul className="cardFacilities">
          {facilities.map((facility) => (
            <li
              className={`cardFacilitiesItem ${
                isChecked(facility, place) ? "" : "cardFacilitiesItemDisabled"
              }`}
            >
              <img
                src={facility.icon}
                alt={facility.name}
                title={facility.name}
              ></img>
            </li>
          ))}
        </ul>
      </div>
      <p>{place.description}</p>
      <Button>Como chegar</Button>
    </div>
  );
};

export default Card;
