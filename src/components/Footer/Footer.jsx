import React from "react";
import logo from "../../assets/images/logo.png";

import { Container } from "react-bootstrap";

import "./footer.css";

const Footer = () => {
  return (
        <div className="container-grid footer">
          <div className="boxone mt-2">             
            <img src={logo} alt="Logo" style={{ width: "80px" }} />
          </div>

          <div className="boxtwo">
            <h2>Sobre Nosotros</h2>
            <ul>
              <li>Trabaja con nosotros</li>
              <li>Terminos & Condiciones</li>
              <li>Política de Privacidad</li>
            </ul>
          </div>
          <div className="boxtwo">
            <h2>Cliente</h2>
            <ul>
              <li>Como Comprar </li>
              <li>Devoluciones & Reembolso</li>
            </ul>
          </div>
          <div className="boxtwo">
            <h2>Contáctanos</h2>
            <ul>
              <li>C/ de los Junior Fullstack, Mérida, 06800, España </li>
              <li>Email: help@gmail.com</li>
              <li>Teléfono: +34 777 888 999</li>
            </ul>
          </div>
        </div>
  );
};

export default Footer;
