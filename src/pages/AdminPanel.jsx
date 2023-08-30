import React, { useState, useEffect } from "react";
import { Container, Card,  Row,  Col, ListGroup, Button, Modal, Form, Table} from "react-bootstrap";
import axios from "axios";
import "./AdminPanel.css";
import TablaUsers from "./TablaUsers";
import TopButton from "../components/TopButton/TopButton"
import Header from "../components/Header/Header"

function CoursList() {

  // const fakeAPI = "http://localhost:5000/course";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Coursedata, setCoursedata] = useState([]);
  //модальное окно добавления
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    id:"",
    cover: "",
    title: "",
    price: "",
    time: "",
    desc: "",
  });
//модальное окно редактирования
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCourseIndex, setEditCourseIndex] = useState(null);
  const [editedCourse, setEditedCourse] = useState({
    cover: "",
    title: "",
    price: "",
    time: "",
    desc: "",
  });
  const handleEditCourse = (index) => {
    setEditCourseIndex(index);
    setEditedCourse(Coursedata[index]);
    setShowEditModal(true);
  };
  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditCourseIndex(null);
    setEditedCourse({
      cover: "",
      title: "",
      price: "",
      time: "",
      desc: "",
    });
  };
  const handleSaveEditedCourse = async () => {
    try {
      const courseIdToEdit = Coursedata[editCourseIndex].id; // Assuming each course has an "id" field
      await axios.put(`http://localhost:5000/course/${courseIdToEdit}`, editedCourse);
      const updatedCourses = [...Coursedata];
      updatedCourses[editCourseIndex] = editedCourse;
      setCoursedata(updatedCourses);
      handleEditModalClose();
    } catch (error) {
      console.error("Error saving edited course:", error);
    }
  };

//отображение карточек курсов
  useEffect(() => {
    axios
      .get("http://localhost:5000/course")
      .then((response) => {
        setCoursedata(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
//открытие
  const handleAddModalShow = () => {
    setShowAddModal(true);
  };
//и закрытие модального окна
  const handleAddModalClose = () => {
    setShowAddModal(false);
  };


//метод post для добавления новой карточки
  const handleAddCourse = async () => {
    try {
      const response = await axios.post("http://localhost:5000/course", newCourse );
      const addedCourse = response.data;
      setCoursedata([...Coursedata, addedCourse]);
      setNewCourse({ id, title: "", desc: "", price: "", time: "", cover: "" });
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
//модальное окно для удаления карточки
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [courseToDeleteIndex, setCourseToDeleteIndex] = useState(null);

  const handleDeleteConfirmationShow = (index) => {
    setCourseToDeleteIndex(index);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmationClose = () => {
    setShowDeleteConfirmation(false);
    setCourseToDeleteIndex(null);
  };

  const handleDeleteCourseConfirmed = () => {
    if (courseToDeleteIndex !== null) {
      handleDeleteCourse(courseToDeleteIndex);
      handleDeleteConfirmationClose();
    }
  };

  const handleDeleteCourse = async (index) => {
    try {
      const courseIdToDelete = Coursedata[index].id; // Assuming each course has an "id" field
      await axios.delete(`http://localhost:5000/course/${courseIdToDelete}`);
      const updatedCourses = [...Coursedata];
      updatedCourses.splice(index, 1);
      setCoursedata(updatedCourses);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Container>
        <Header />
      <h1>Gestión de courses</h1>
      <Button
        className="mt-4 text-center mx-auto d-block"
        variant="primary"
        onClick={handleAddModalShow}
      >
        Añadir nuevo courso
      </Button>
      <Row className="d-flex justify-content-center">
        {Coursedata.map((value, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-3">
            <Card style={{ width: "15rem", boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)"}}>
              <Card.Img variant="top" src={value.cover} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.desc}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>El precio: {value.price} €</ListGroup.Item>
                <ListGroup.Item>Duración: {value.time} horas</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-between">
                <Button
                  variant="warning" className="me-5"
                  onClick={() => handleEditCourse(index)}
                >
                  Modificar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteConfirmationShow(index)}
                >
                  Borrar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>

{/* bloque modal ventanas */}
          {/* modal añadir */}
      <Modal show={showAddModal} onHide={handleAddModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir nuevo courso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter descripcion"
                value={newCourse.desc}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, desc: e.target.value })
                }
              />
              </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                placeholder="Precio"
                value={newCourse.price}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, price: e.target.value })
                }
              />
              </Form.Group>
              <Form.Group controlId="time">
              <Form.Label>Duración</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                placeholder="Duración:"
                value={newCourse.time}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="cover">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter cover URL"
                value={newCourse.cover}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, cover: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddModalClose}>
            Cancelación
          </Button>
          <Button variant="primary" onClick={handleAddCourse}>
            Añadir Course
          </Button>
        </Modal.Footer>
      </Modal>


      {/* modal modificar */}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar tarjetita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="Introduce el título">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce el título"
                value={editedCourse.title}
                onChange={(e) =>
                  setEditedCourse({ ...editedCourse, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Introduce el descripción"
                value={editedCourse.desc}
                onChange={(e) =>
                  setEditedCourse({ ...editedCourse, desc: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                placeholder="Precio en euros:"
                value={editedCourse.price}
                onChange={(e) =>
                  setEditedCourse({ ...editedCourse, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="time">
              <Form.Label>Ducarión</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                placeholder="Ducarión en horas:"
                value={editedCourse.time}
                onChange={(e) =>
                  setEditedCourse({ ...editedCourse, time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="cover">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce URL del image"
                value={editedCourse.cover}
                onChange={(e) =>
                  setEditedCourse({ ...editedCourse, cover: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Сancelación
          </Button>
          <Button variant="primary" onClick={handleSaveEditedCourse}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


                {/* modal eliminar */}
      <Modal
        show={showDeleteConfirmation} onHide={handleDeleteConfirmationClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar tarjetita</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este curso?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteConfirmationClose}>
            Cancelación
          </Button>
          <Button variant="danger" onClick={handleDeleteCourseConfirmed}>
            Hazlo
          </Button>
        </Modal.Footer>
      </Modal>
      <TablaUsers />
      <TopButton />
    </div>
  );
}

export default CoursList;
