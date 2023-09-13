import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { fetchCourses } from "../Service/Api";

const Courses = () => {
  const [courses, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const coursesData = await fetchCourses();
      setData(coursesData);
    }
    getData();
  }, []);

  return (
    <section>
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
    </section>
  );
};

export default Courses;
