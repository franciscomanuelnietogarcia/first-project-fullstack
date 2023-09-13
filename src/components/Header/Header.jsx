import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-transparent navbar-dark"
      style={{
        zIndex: 1000, // Поднимите значение zIndex для Header
      }}
    >
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "100px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link href="Courses">Courses</Nav.Link>
            <Nav.Link as={NavLink} to="/Contactos">
              Sobre nosotros
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex me-5">
              <Form.Control
                type="search"
                placeholder="Búsqueda"
                className="me-2" // Отступ справа
                aria-label="Buscar"
              />
              <Button variant="outline-success" className="text-white">
                Buscar
              </Button>
            </Form>
            <Nav.Link
              as={NavLink}
              to="/Entrar"
              variant="outline-success"
              className="text-white"
            >
              Entrar
            </Nav.Link>
            <Button
              as={NavLink}
              to="/Registrar"
              variant="primary"
              className="ms-3"
            >
              Registrárme
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;