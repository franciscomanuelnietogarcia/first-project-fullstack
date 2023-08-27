import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Registrar.css";


function Registrar() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 registrar">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <img 
        class="mb-4 text-center mx-auto d-block"
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
              placeholder="Nombre"
              defaultValue=""
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
              placeholder="Email address"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su dirección de correo electrónico válida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" class="p-3" controlId="validationCustom03">
            <Form.Label className="fs-5">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Contraseña"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Proporcione una contraseña válida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" class="p-3" controlId="validationCustom04">
            <Form.Label className="fs-5">Сonfirmar сontraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirmar сontraseña"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor proporcione una confirmación de contraseña válida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit"  className="mt-4 text-center mx-auto d-block">Entregar form</Button>
        <p class="mt-5 mb-3 text-center text-muted"> CoursDev © 2023</p>
      </Form>
      </div>
    </>
  );
}

export default Registrar;