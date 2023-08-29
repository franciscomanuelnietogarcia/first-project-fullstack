import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import BasicCard from "../Cards/Card";
import Footer from "../Footer/Footer";
import background from "../../assets/images/main-pic.png";

const Home = () => {
  return (
    <Container>
      <section>
        <Header />
        <div className="position-relative">
          <img src={background} alt="main-pic" className="w-100" />
          <div className="overlay position-absolute top-0 start-0">
            <Container className="custom-margin">
              <Row>
                <Col lg={6} className="d-flex flex-column align-items-start">
                  <h1
                    className="text-white pl-3"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      padding: "150px 0 0",
                    }}
                  >
                    Estudia <br />
                    Donde estés <br />
                    Cómodo
                  </h1>
                  <h4 className="h4 mt-3 text-warning pl-3">
                    ¿Quiere desarrollar su carrera en TI, <br />
                    aumentar sus ingresos o incluso cambiar de ubicación?
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <BasicCard />
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
      </Container>
  );
};

export default Home;
