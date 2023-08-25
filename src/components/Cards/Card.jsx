import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Sdata from "./Sdata";
import "./Card.css";

const BasicCard = () => {
  return (
    <Container fluid className="min-vh-100 card-block">
      <Row className="align-items-center ms-5">
        <Col lg={6} className="d-flex flex-column align-items-start text-white">
          <h1 className="pl-3 mb-3 mt-3"> Ventajas de Formarse con Nosotros.
          </h1>
          <h4 className="text-warning pl-3">
            Sumérgete en el aprendizaje desde la primera lección.
          </h4>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-lg-between mt-5">
        {Sdata.map((value, index) => (
          <Col
            key={index}
            lg={4}
            md={6}
            className="d-flex flex-column align-items-center mb-4"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={value.cover}
                alt=""
                className="img-slider"
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <hr className="colored-line" />
                <Card.Text>{value.desc}</Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BasicCard;
