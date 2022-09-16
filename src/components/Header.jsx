import React from "react";
import Formhp from "./headercomponents/form";

const Header = () => {
  return (
    <header className="container-header-hp">
      <div className="black-window">
        <div className="container-text-and-form">
          <div className="text-header">
            <h1>
              <strong className="str-h1-1">EL AMOR</strong>
              <br />
              <strong className="str-h1-2">EN LOS TIEMPOS DE </strong>
              <br />
              <p className="p-h1">LA TRANSFORMACIÓN DIGITAL</p>
            </h1>
            <p>
              Combinamos{" "}
              <strong className="white-str">el encanto del amor</strong> con la
              magia de la{" "}
              <strong className="white-str">innovación tecnológica</strong> de{" "}
              <strong>HPE GreenLake</strong>, en una experiencia única y
              exclusiva para mostrarte todo lo que puedes lograr con nosotros.{" "}
              <strong className="white-str">Confirma tu asistencia</strong> a
              nuestro evento privado para conocer más:
            </p>
          </div>
          <Formhp />
        </div>
      </div>
    </header>
  );
};

export default Header;
