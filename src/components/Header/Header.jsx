// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Header.css";
// import logo from "../../assets/images/logo.png";
// import {
//   Button,
//   Container,
//   Nav,
//   Navbar,
//   NavDropdown,
//   Form,
// } from "react-bootstrap";

// const Header = () => {
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="md"
//       className="bg-transparent"
//       style={{ fontSize: '20px', color: 'black' }}
//     >
//       <Container>
//         <Navbar.Brand as={NavLink} to="/" className="text-light">
//           <img src={logo} alt="Logo" className="d-inline-block" style={{ width: "80px" }} />
//           CoursDev
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" navbarScroll>
//             <Nav.Link as={NavLink} to="/" className="text-black" activeClassName="active-link">
//               Inicio
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/Courses" className="text-black" activeClassName="active-link">
//               Cursos
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/Contactos" className="text-black" activeClassName="active-link">
//               Sobre nosotros
//             </Nav.Link>
//           </Nav>
//           <Nav className="ms-3">
//             <Button as={NavLink} to="/Entrar" variant="outline-primary">
//               Entrar
//             </Button>
//           </Nav>
//           <div className="my-2"></div>
//           <Nav>
//             <Button
//               as={NavLink}
//               to="/Registrar"
//               variant="primary"
//               className="ms-3"
//               size="lg"
//             >
//               Registrárme
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import {
  Button,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-transparent"
      style={{ fontSize: '20px', color: 'black' }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-light">
          <img src={logo} alt="Logo" className="d-inline-block" style={{ width: "80px" }} />
          CoursDev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={NavLink} to="/" className="text-black" activeClassName="active-link">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Courses" className="text-black" activeClassName="active-link">
              Cursos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contactos" className="text-black" activeClassName="active-link">
              Sobre nosotros
            </Nav.Link>
          </Nav>
          <Nav className="ms-3">
            <Button as={NavLink} to="/Entrar" variant="outline-primary">
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
  );
};

export default Header;
