import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Primero debes registrarte para comprar este curso.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={onHide}>
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
