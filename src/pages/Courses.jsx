import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { fetchCourses } from "../Service/Api";
import CustomModal from "../components/Modales/ModalComprar"; // Importa el componente Modal


const Courses = () => {
  const [courses, setData] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    async function getData() {
      const coursesData = await fetchCourses();
      setData(coursesData);
    }
    getData();
  }, []);

  const handleBuyClick = () => {
    // Cuando se haga clic en "Comprar", muestra el modal
    setShowModal(true);
  };

  const closeModal = () => {
    // Función para cerrar el modal
    setShowModal(false);
  };

  return (
    <section>
      <Container fluid className="min-vh-100 CoursCard-block">
        <h1 className="pl-3 mb-3 mt-3" style={{ color: "white" }}>Nuestros Cursos</h1>
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
                  <Card.Text> {value.desc}</Card.Text>
                  <Card.Text>Precio: €{value.price}</Card.Text>
                  <Card.Text>Duración: {value.time} Horas</Card.Text>
                  <Button variant="primary" onClick={handleBuyClick}>
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CustomModal show={showModal} onHide={closeModal} />
    </section>
  );
};

export default Courses;
