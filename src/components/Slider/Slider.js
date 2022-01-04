import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "./Slider.css";
import api from "../../config/api";

import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const Slider = () => {
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api.get("places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  console.log(places);

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        300: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {places.map((place) => (
        <SwiperSlide key={place.id}>
          <Card key={place.id} place={place} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
