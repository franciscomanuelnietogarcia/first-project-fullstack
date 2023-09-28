import React, { useState, useRef } from "react";
import { Form, Row, Col, Button, Toast, Container } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Registrar.css";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

function Registrar() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "User",
  });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const captcha = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  
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

  if (form.checkValidity() === false || formData.password !== confirmPassword || captchaValue === null) {
      event.stopPropagation();
      setValidated(true);
      return;
    } 

      try {
        const response = await axios.post(
          "http://localhost:5000/users",
          formData,
          console.log(formData)
        );
        const newUserData = response.data;
        console.log("Respuesta del servidor:", newUserData);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        
        setValidated(true);
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false); // Cerrar notificación después de 3s
        }, 3000);
      } catch (error) {
        console.error("Error en el envío de datos:", error);
      }
    
    form.reset();
    captcha.current.reset();
    setCaptchaValue(null);
    setValidated(true);
  };

  return (
    <Container className="registrar">
      <Header />
        <Form validated={validated} onSubmit={handleSubmit}>

          <Row className="mb-1 mt-4 d-flex justify-content-center">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label className="fs-5">Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <Form.Control.Feedback type="invalid">
                Por favor proporcione un nombre válido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
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
          <Row className="mb-3 d-flex justify-content-center">
            <Form.Group
              as={Col}
              md="3"
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
              md="3"
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
          <ReCAPTCHA
            className="d-flex justify-content-center"
            ref={captcha}
            sitekey="6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc"
            onChange={(value) => setCaptchaValue(value)}
          />
          <Button type="submit" className="mt-4 text-center mx-auto d-block">
            Send
          </Button>
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
        <div>.</div>
        <Footer/>
    </Container>
  );
}

export default Registrar;
