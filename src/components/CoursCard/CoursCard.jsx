import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { fetchCards } from "../../Service/Api";
import "./CoursCard.css";


const CoursCard = () => {
  const [teachers, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const teachersData = await fetchCards();
      setData(teachersData);
    }
    getData();
  }, []);

  return (
    <Container fluid className="min-vh-100 CoursCard-block">
            <Row className="align-items-center ms-5">
            {teachers.map((value, index) => (
          <Col
            key={index}
            lg={4}
            md={6}
            className="d-flex flex-column align-items-center mb-4"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.cover} />
              <Card.Body>
                <Card.Title>{value.teacher}</Card.Title>
                <Card.Text>Estudios: {value.studies}</Card.Text>
                <Card.Text>Experiencia: {value.experience}</Card.Text>
                <Card.Text>Especializacion: {value.specialization}</Card.Text>
                
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