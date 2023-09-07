import React from "react";
import { Container } from "react-bootstrap";

import "./footer.css";

export function sum(a, b) {
  return a + b
}

const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="container-grid">
          <div className="boxone">
            <p id="textfooter">
              Lorem ipsum dolor Quisquam culpa, deleniti neque eius{" "}
            </p>
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
      </footer>
    </Container>
  );
};

export default Footer;
