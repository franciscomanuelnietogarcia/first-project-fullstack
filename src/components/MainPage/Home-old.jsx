import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../Header/Header";
import BasicCard from "../Cards/Card";
import CoursCard from "../CoursCard/CoursCard";
import Footer from "../Footer/Footer";
import background from "../../assets/images/main-pic.png";
import TopButton from "../TopButton/TopButton";

const Home = () => {
  return (
    <Container>
      <Header />

      <Card className="bg-dark">
        <Card.Img
          src={background}
          alt="main-pic"
          style={{ objectFit: "cover", maxHeight: "100vh" }}
        />
        <Row className="align-items-center ms-5">
          <Col
            lg={6}
            className="d-flex flex-column align-items-start text-white"
          >
            <h1 className="pl-3 mb-3 mt-3">
              {" "}
              Estudia <br />
              Donde estés <br />
              Cómodo
            </h1>
            <h4 className="text-warning pl-3">
              ¿Quiere desarrollar su carrera en TI, <br />
              aumentar sus ingresos o incluso cambiar de ubicación?
            </h4>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">Leer más</Button>
          </Col>
        </Row>
      </Card>

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
      <TopButton />
    </Container>
  );
};

export default Home;
