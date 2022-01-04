import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import Footer from "./components/Footer/Footer";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div className="mainWrapper">
    <div className="mainContainer">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
    <Footer />
  </div>,
  document.getElementById("root")
);
