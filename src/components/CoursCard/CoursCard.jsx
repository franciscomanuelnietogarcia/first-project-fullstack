
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { fetchCards } from "../../Service/Api";
import "./CoursCard.css";

const CoursCard = () => {
  const [courses, setData] = useState([]);
  const [expandedCards, setExpandedCards] = useState([]); // Estado para controlar qué tarjetas están expandidas

  useEffect(() => {
    async function getData() {
      const coursesData = await fetchCards();
      setData(coursesData);
      // Inicializa el estado para todas las tarjetas como false (no expandidas)
      setExpandedCards(new Array(coursesData.length).fill(false));
    }
    getData();
  }, []);

  const toggleCardExpansion = (index) => {
    // Invierte el estado de expansión para la tarjeta en el índice dado
    const updatedExpandedCards = [...expandedCards];
    updatedExpandedCards[index] = !updatedExpandedCards[index];
    setExpandedCards(updatedExpandedCards);
  };

  return (
    <Container fluid className="min-vh-100 CoursCard-block">
      {/* ... (tu código existente) */}
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
                {/* Muestra el texto completo solo si la tarjeta está expandida */}
                {expandedCards[index] ? (
                  <div>
                    <Card.Text>{value.desc}</Card.Text>
                    <Card.Text>Duración: {value.time} horas</Card.Text>
                  </div>
                ) : null}
                {/* Botón para alternar la expansión de la tarjeta */}
                <Button
                  variant="primary"
                  onClick={() => toggleCardExpansion(index)}
                >
                  {expandedCards[index] ? "Leer menos" : "Leer más"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursCard;



