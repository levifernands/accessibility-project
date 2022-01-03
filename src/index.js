import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Curator from "./components/Curator/Curator";
import Footer from "./components/Footer/Footer";
import Places from "./components/Places/Places";
import Routes from "./routes";

const location = {
  state: "CE",
  city: "Fortaleza",
};
ReactDOM.render(
  <div className="mainWrapper">
    <div className="mainContainer">
      <Header city={location.city} uf={location.state} />
      <Routes city={location.city} uf={location.state} />
      <Places />
      <Curator />
    </div>
    <Footer />
  </div>,
  document.getElementById("root")
);
