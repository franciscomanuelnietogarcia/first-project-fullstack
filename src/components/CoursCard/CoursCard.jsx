import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { fetchCards } from "../../Service/Api";
import "./CoursCard.css";


const CoursCard = () => {
  const [courses, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const coursesData = await fetchCards();
      setData(coursesData);
    }
    getData();
  }, []);

  return (
    <Container fluid className="min-vh-100 CoursCard-block">
      <Row className="justify-content-center justify-content-lg-between mt-5">
        {courses.map((value, index) => (
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
                <Card.Text>Duración: {value.time} horas</Card.Text>
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
