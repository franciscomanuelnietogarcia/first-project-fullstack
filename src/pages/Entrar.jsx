import React, { useState } from "react";
import { Form, Button, Col, Modal, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo.png";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Registrar.css";

const Entrar = () => {
  const [validated, setValidated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (loginData.rememberMe) {
        // Сохраняем данные в localStorage
        localStorage.setItem("rememberedEmail", loginData.email);
        localStorage.setItem("rememberedPassword", loginData.password);
      } else {
        // Удаляем сохраненное значение пароля из localStorage
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }
      try {
        const response = await axios.get("http://localhost:5000/users");
        const users = response.data;
        const user = users.find(
          (user) =>
            user.email === loginData.email &&
            user.password === loginData.password
        );

        if (user) {
          if (user.role === "Admin") {
            navigate("/AdminPanel");
          }  
          else if (user.role === "User") {
              navigate("/PersonalArea", { state: { user } });
          } else {
            setLoginError("Acceso no autorizado");
          }
        } else {
          setLoginError("Detalles de acceso incorrectos");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    setValidated(true);
  };

  return (
    <Container className="registrar">
      <Header />

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", width: "100%" }}
          className="mx-auto"
        >
          <img
            className="mb-4 text-center mx-auto d-block"
            src={logo}
            alt="logo CoursDev"
            height="72"
          />
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4">Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingresa email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              No garantizamos que su dirección de correo electrónico sea segura.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-4">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingresa contraseña"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
            {loginError && <div className="text-danger">{loginError}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acuérdate de mí"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            type="submit"
            className="text-center mx-auto d-block"
          >
            Entrar
          </Button>
          <p className="mt-5 mb-3 text-center text-muted"> CoursDev © 2023</p>
        </Form>
        <Modal show={loginError !== ""} onHide={() => setLoginError("")}>
          <Modal.Header closeButton>
            <Modal.Title>Error de acceso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-danger">{loginError}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setLoginError("")}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      <Footer />
    </Container>
  );
};

export default Entrar;
