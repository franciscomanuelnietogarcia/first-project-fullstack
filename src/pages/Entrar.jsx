import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Registrar.css";
import logo from "../assets/images/logo.png";


const Entrar = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      event.preventDefault();

      // Получаем значение введенного email и пароля
      const email = form.elements["formBasicEmail"].value;
      const password = form.elements["formBasicPassword"].value;

      // Проверяем, если введенные данные соответствуют желаемым
      if (email === "slavafit@mail.ru" && password === "123") {
        // Перенаправляем на AdminPanel
        navigate("/AdminPanel");
      } else {
        console.log("Detalles de acceso incorrectos");
      }
    }

    setValidated(true);
  };

  return (
    <section>
      <Header />

      <div className="d-flex justify-content-center align-items-center vh-100 registrar">
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
        <img 
        className="mb-4 text-center mx-auto d-block"
        src={logo}
        alt="logo CoursDev"
        height="72"
      />
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4">Email</Form.Label>
            <Form.Control required type="email" placeholder="Ingresa email" defaultValue=""/>
            <Form.Text className="text-muted">
              No garantizamos que su dirección de correo electrónico sea segura.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-4">Contraseña</Form.Label>
            <Form.Control required type="password" placeholder="Ingresa contraseña" defaultValue=""/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acuérdate de mí" />
          </Form.Group>
          <Button variant="primary" type="submit" className="text-center mx-auto d-block">
            Entrar
          </Button>
          <p className="mt-5 mb-3 text-center text-muted"> CoursDev © 2023</p>
        </Form>
      </div>
    </section>
  );
};

export default Entrar;
