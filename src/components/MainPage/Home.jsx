import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
            <Card.Text>
              <h4 className="mt-5 text-warning ms-5">
                ¿Quiere desarrollar su carrera en TI, <br />
                aumentar sus ingresos o incluso cambiar de ubicación?
              </h4>
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </Container>
      <section>
        <Header />
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
