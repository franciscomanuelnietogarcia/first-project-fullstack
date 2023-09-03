import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, onHide, onSubmit, selectedUser, setSelectedUser }) => {
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.title : ""}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Desc</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.desc : ""}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    desc: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Cover</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.cover : ""}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    cover: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
  );
};


    export default EditModal;