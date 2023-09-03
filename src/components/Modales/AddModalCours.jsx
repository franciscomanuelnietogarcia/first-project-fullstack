import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddModal = ({ show, onHide, onSubmit, newCourse, setNewCourse }) => {
  return (
    <Modal show={show} onHide={onHide}>
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
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Añadir Course
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
