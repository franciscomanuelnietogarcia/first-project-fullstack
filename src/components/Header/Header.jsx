import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-transparent navbar-dark"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Поднимите значение zIndex для Header
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: "80px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action3">Sobre nosotros</Nav.Link>
            <Nav.Link href="#action4">Contactos</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex me-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2" //Отступ справа
                aria-label="Buscar"
              />
              <Button variant="outline-success" className="text-white">
                Búsqueda
              </Button>
            </Form>
            <Nav.Link href="#action1" className="text-white">
              Entrar
            </Nav.Link>
            <Button variant="primary" className="ms-3">
              Registrárme
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
