import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "./Slider.css";
import api from "../../config/api";
import axios from "axios";

import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const Slider = () => {
  /* const { filteredPlaces, setFilteredPlace } = useContext(FilterContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await axios.get("../../apis/places");
      console.log(result);

      if (result.status === 200) {
        setPlaces(result.data);
      }
    };

    fetchPlaces();
  }, [filteredPlaces]); */

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api.get("places").then(({ data }) => {
      setPlaces(data.places);
    });
    console.log(places);
  }, []);
  return (
    <Swiper
      slidesPerView={4}
      breakpoints={{
        300: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <Card /* key={item.id} item={item} */ />
      </SwiperSlide>

      <SwiperSlide /* key={item.id} */>
        <Card /* key={item.id} item={item} */ />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
