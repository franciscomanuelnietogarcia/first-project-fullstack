import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
} from "react-bootstrap";

const Header = () => {
  return (
    // <Navbar>
    //     <Navbar.Brand as={NavLink} to="/">
    //       <img src={logo} alt="Logo" style={{ width: "75px" }} />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll>
    //         <Nav.Link as={NavLink} to="/" className="text-white">
    //           Inicio
    //         </Nav.Link>
    //         <Nav.Link as={NavLink} to="" className="text-white">Courses</Nav.Link>
    //         <Nav.Link as={NavLink} to="/Contactos" >
    //           Sobre nosotros
    //         </Nav.Link>
    //       </Nav>
    //       {/* <Form className="d-flex me-4">
    //           <Form.Control
    //             type="search"
    //             placeholder="Búsqueda"
    //             className="me-2" // Отступ справа
    //             aria-label="Buscar"
    //           />
    //           <Button variant="outline-success" className="text-white">
    //             Buscar
    //           </Button>
    //         </Form> */}
    //       <Nav>
    //         <Nav.Link as={NavLink} to="/Entrar">
    //           Entrar
    //         </Nav.Link>
    //       </Nav>
    //       <Button
    //         as={NavLink}
    //         to="/Registrar"
    //         variant="primary"
    //         className="ms-3"
    //       >
    //         Registrárme
    //       </Button>
    //     </Navbar.Collapse>
    // </Navbar>
    <>
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-transparent"
      style={{ fontSize: '20px' }}

    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-light">
          <img src={logo} alt="Logo" className="d-inline-block" style={{ width: "80px" }} />
          CoursDev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className="text-white">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Courses" className="text-white">
              Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contactos">
              Sobre nosotros
            </Nav.Link>
          </Nav>
                  {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          <Nav className="ms-3">
            <Button as={NavLink} to="/Entrar" variant="outline-primary" >
              Entrar
            </Button>
          </Nav>
          <div className="my-2"></div>
          <Nav>
            <Button
              as={NavLink}
              to="/Registrar"
              variant="primary"
              className="ms-3"
              size="lg"
            >
              Registrárme
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
