import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
            <Row className="align-items-center ms-5">
        <Col lg={6} className="d-flex flex-column align-items-start text-white">
          <h1 className="pl-3 mb-3 mt-3"> Nuestros formadores.
          </h1>
          <h4 className="text-warning pl-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quidem nobis vitae, natus iure iste sequi quas omnis temporibus eum commodi eligendi quis doloribus possimus numquam in excepturi tempora! Doloremque!.
          </h4>
        </Col>
      </Row>
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
