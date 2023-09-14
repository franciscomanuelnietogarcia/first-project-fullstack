import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contactos.css";

const Contactos = () => {
  return (
    <Container className="Background">
      <Container className="mt-5">
        <Row className="my-5">
          <Col>
            <div className="text-center">
              <h2 className="display-4 mb-4" style={{ color: "white" }}>
                Sobre nosotros
              </h2>
            </div>
            <p className="lead">
              Bienvenidos a CoursDev, una plataforma de aprendizaje en línea
              dedicada a proporcionar cursos de alta calidad sobre desarrollo de
              software y tecnología. Nuestro objetivo es ayudarte a adquirir
              nuevas habilidades y conocimientos en campos como la programación,
              el diseño web, la ciencia de datos y mucho más.
            </p>
            <p className="lead">
              Nuestros instructores son profesionales experimentados en la
              industria que están comprometidos con brindarte contenido
              educativo relevante y actualizado. Ya sea que estés buscando
              mejorar tus habilidades existentes o explorar nuevas áreas,
              encontrarás una amplia variedad de cursos en nuestra plataforma.
              Estamos dedicados a brindarte una experiencia de aprendizaje
              excepcional.
            </p>
            <p className="lead">
              Creemos que el aprendizaje es un viaje continuo, y estamos aquí
              para apoyarte en cada paso del camino. En CoursDev, nos enorgullece
              ofrecer una experiencia educativa de primer nivel. Cada curso que
              ofrecemos está diseñado cuidadosamente para asegurarse de que
              obtengas la formación más actualizada y relevante.
            </p>
            <p className="lead">
              Además de la calidad de nuestros cursos, nos enorgullece
              proporcionar un ambiente de aprendizaje en línea interactivo y
              colaborativo. Únete a nuestra comunidad global de estudiantes y
              profesionales que comparten tus intereses. Conéctate, colabora y
              crece junto con otros miembros de CoursDev.
            </p>
            <p className="lead">
              ¿Por qué elegir CoursDev? Porque estamos comprometidos con tu éxito.
              Nuestra misión es proporcionarte las herramientas y el conocimiento
              que necesitas para alcanzar tus metas profesionales. Confía en nosotros
              para guiarte en tu viaje de aprendizaje y desarrollo.
            </p>
            <p className="lead">
              ¡Esperamos que disfrutes de tu tiempo en CoursDev y te deseamos mucho
              éxito en tu viaje de aprendizaje!
            </p>
          </Col>
        </Row>
      </Container>
      <Row className="my-5">
        <Col>
          <img
            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1694679860/Instalacio%CC%81n-Oficina-te%CC%81cnica_i1x11f.jpg"
            alt="Imagen relacionada con tecnología o aprendizaje"
            className="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1694679859/aprender-a-programar_y8rpae.jpg"
            alt="Otra imagen relacionada con tecnología o aprendizaje"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contactos;
