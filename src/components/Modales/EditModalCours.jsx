import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, onHide, onSubmit, editedCourse, setEditedCourse }) => {
  return (
    <Modal show={show} onHide={onHide}>
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
              <Form.Label>Duración</Form.Label>
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
        <Button variant="secondary" onClick={onHide}>
          Сancelación
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
