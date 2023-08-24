import React, {Component} from "react";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function Header() {
        return ( 
            <Navbar fixed= "top" expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">CourDevs</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto" navbarScroll>
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Courses</Nav.Link>
                  <NavDropdown title="Más" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action4">Sobre nosotros</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Contactos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                <div className="d-flex align-items-center">
                    <Button variant="outline-success">Búsqueda</Button>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Nav.Link href="#action1">Entrar</Nav.Link>
                    </Form>
                    <Button variant="outline-primary" className="ms-3">Registrárme</Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
}