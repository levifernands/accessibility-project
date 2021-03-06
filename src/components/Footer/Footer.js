import React from "react";
import "./Footer.css";
import iconTop from "../../images/iconTop1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSection footerSectionFirst">
        <div className="footerContainer">
          <p>
            <strong>Observação: </strong>este site é uma amostra de
            desenvolvimento tecnológico de iniciativa independente, as
            informações aqui apresentadas podem estar eventualmente
            desatualizadas, por isso recomendamos sempre conferir as informações
            diretamente com o estabelecimento. A exibição dos locais, nesta
            página, não caracteriza recomendação de uso.
          </p>
        </div>
      </div>
      <div className="footerSection footerSectionSecond">
        <div className="footerContainer">
          <p>
            <strong>
              Projeto Elaborado durante a RDW{" "}
              <a href="https://ebaconline.com.br" target="_blank">
                E.B.A.C
              </a>{" "}
              2021
            </strong>{" "}
            <small>
              Projetado por{" "}
              <a href="https://github.com/cavalcantemmarcelo" target="_blank">
                Marcelo Cavalcante
              </a>{" "}
              e{" "}
              <a href="https://github.com/mja-maia" target="_blank">
                Miguel Maia
              </a>
              , desenvolvido por{" "}
              <a href="https://github.com/levifernands" target="_blank">
                Levi Fernandes
              </a>
              .
            </small>
          </p>
          <a href="#top" className="button">
            <img src={iconTop} alt="Go back to the very top of the page"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
