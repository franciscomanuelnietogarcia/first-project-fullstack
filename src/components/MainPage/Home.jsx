import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Header/Header";
import BasicCard from "../Cards/Card";
import CoursCard from "../CoursCard/CoursCard";
import Footer from "../Footer/Footer";
import background from "../../assets/images/main-pic.png";
import "./Home.css";

const Home = () => {
  return (
    <Container >
        <div className="position-relative">
            <img src={background} alt="main-banner" className="w-100" />
          <div className="overlay position-absolute top-0 start-0">
            <Header />
              <Row className="margin">
                <Card.Title className="mt-5 fs-1 text-light ms-5">
                Estudia <br />
                Donde estés <br />
                Cómodo
                </Card.Title>
                <Card.Text className="mt-5 text-warning ms-5 fs-4">
                  ¿Quiere desarrollar su carrera en TI, <br />
                  aumentar sus ingresos o incluso cambiar de ubicación?
                </Card.Text>
              </Row>
          </div>
        </div>
          <Row>
            <Col>
              <BasicCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <CoursCard />
            </Col>
          </Row>
        <Footer />
    </Container>
  );
};

export default Home;
