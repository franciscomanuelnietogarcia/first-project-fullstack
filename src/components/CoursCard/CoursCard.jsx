import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Coursedata from "./Coursedata";
import "./CoursCard.css";

const CoursCard = () => {
  return (
    <Container fluid className="min-vh-100 CoursCard-block">
      <Row className="justify-content-center justify-content-lg-between mt-5">
        {Coursedata.map((value, index) => (
          <Col
            key={index}
            lg={4}
            md={6}
            className="d-flex flex-column align-items-center mb-4"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.cover} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
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

export default CoursCard;
