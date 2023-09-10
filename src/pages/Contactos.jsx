// About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Contactos.css"


const Contactos = () => {
  return (
    <section>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-4">Sobre nosotros</h2>
            <p>
              Bienvenidos a CoursDev, una plataforma de aprendizaje en línea
              dedicada a proporcionar cursos de alta calidad sobre desarrollo de
              software y tecnología. Nuestro objetivo es ayudarte a adquirir
              nuevas habilidades y conocimientos en campos como la programación,
              el diseño web, la ciencia de datos y mucho más.
            </p>
            <p>
              Nuestros instructores son profesionales experimentados en la
              industria que están comprometidos con brindarte contenido
              educativo relevante y actualizado. Ya sea que estés buscando
              mejorar tus habilidades existentes o explorar nuevas áreas,
              encontrarás una amplia variedad de cursos en nuestra plataforma.
            </p>
            <p>
            Nuestros cursos están diseñados con un enfoque práctico y hands-on. 
            Creemos que la mejor manera de aprender a programar es a través de la experimentación activa. 
            Nuestros instructores altamente capacitados no solo te guiarán a través de los conceptos fundamentales, 
            sino que también te desafiarán con proyectos del mundo real 
            que te permitirán aplicar tus conocimientos en situaciones prácticas.
            </p>
            <p>
              Además de ofrecer una variedad de cursos, 
              ya sea que estés dando tus primeros pasos en la programación o busques perfeccionar tus habilidades, 
              tenemos una amplia gama de cursos para todos los niveles. Desde fundamentos de programación 
              hasta cursos especializados en tecnologías emergentes, estamos aquí para satisfacer tus necesidades de aprendizaje.
            </p>
            <p>
              Estamos dedicados a brindarte una experiencia de aprendizaje
              excepcional. ¡Esperamos que disfrutes de tu tiempo en CoursDev y
              te deseamos mucho éxito en tu viaje de aprendizaje!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default Contactos;
