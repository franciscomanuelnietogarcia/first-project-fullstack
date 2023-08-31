import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../Header/Header";
import BasicCard from "../Cards/Card";
import CoursCard from "../CoursCard/CoursCard";
import Footer from "../Footer/Footer";
import background from "../../assets/images/main-pic.png";
import TopButton from "../TopButton/TopButton"

const Home = () => {
  return (
    <section>
      <Container>
        <Header />
        <Card className="bg-dark text-white">
          <Card.Img
            src={background}
            alt="main-pic"
            style={{ objectFit: "cover", maxHeight: "100vh" }}
          />
          <Card.ImgOverlay>
            <Card.Title
              className="ms-5"
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                padding: "150px 0 0",
              }}
            >
              Estudia <br />
              Donde estés <br />
              Cómodo
            </Card.Title>
            <Card.Text className="mt-5 text-warning ms-5">
                <p className="fs-4">
                  ¿Quiere desarrollar su carrera en TI, <br />
                  aumentar sus ingresos o incluso cambiar de ubicación?
                </p>
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
            {/* <Button variant="primary">Leer más</Button> */}
          </Card.ImgOverlay>
        </Card>
      </Container>
      <section>
        
        <Container>
          <Row>
            <Col>
              <BasicCard />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CoursCard />
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
      <TopButton />
    </section>
  );
};

export default Home;
