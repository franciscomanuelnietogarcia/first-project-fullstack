import React, { useState } from "react";
import { Form, Row, Col, Button, Toast } from "react-bootstrap";
import Header from "../components/Header/Header";
import "./Registrar.css";
import logo from "../assets/images/logo.png";
import axios from "axios";

function Registrar() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
    role: "User",
  });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();// Предотвращаем отправку формы по умолчанию Impedir el envío de formularios de forma predeterminada
    const form = event.currentTarget;

  if (form.checkValidity() === false || formData.password !== confirmPassword) {
      event.stopPropagation();
      setValidated(true);
      return;
    } 

      try {
        const response = await axios.post(
          "http://localhost:5000/users",
          formData
        );
        const newUserData = response.data;
        console.log("Respuesta del servidor:", newUserData);
        setValidated(true);
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false); // Cerrar notificación después de 3s
        }, 3000);
      } catch (error) {
        console.error("Error en el envío de datos:", error);
      }
    
    setValidated(true);
  };

  return (
    <>
      <Header />
      <div></div>
      <div className="d-flex justify-content-center align-items-center vh-100 registrar">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <img 
        className="mb-4 text-center mx-auto d-block"
        src={logo}
        alt="logo CoursDev"
        height="72"
      />
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label className="fs-5">Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <Form.Control.Feedback type="invalid">
                Por favor proporcione un nombre válido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label className="fs-5">Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese su dirección de correo electrónico válida.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              className="p-3"
              controlId="validationCustom03"
            >
              <Form.Label className="fs-5">Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Proporcione una contraseña válida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              className="p-3"
              controlId="validationCustom04"
            >
              <Form.Label className="fs-5">Сonfirmar сontraseña</Form.Label>
              <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirmar сontraseña"
                  defaultValue=""
                  isInvalid={formData.password !== confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
              Las contraseñas no coinciden.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="mt-4 text-center mx-auto d-block">
            Entregar form
          </Button>
          <p className="mt-5 mb-3 text-center text-muted"> CoursDev © 2023</p>
        </Form>
        <Toast
          show={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          style={{
            position: "fixed",
          }}
          className="text-center position-absolute top-50 start-50 translate-middle"
        >
          <Toast.Header>
            <strong className="me-auto">Éxito!</strong>
          </Toast.Header>
          <Toast.Body>¡Datos enviados exitosamente!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}

export default Registrar;
