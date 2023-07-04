import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";

const MyNavbar = () => (
  <Navbar expand="sm" className="TopbarBeforeLogin sticky-top">
    <Container fluid>
      <Navbar.Brand href="#home" className="text-white">
        <img src={logo} alt="Logo" className="logo-image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to={"/login"} className="custom-link text-black fw-bold">
            Login
          </Link>
          <Link to={"/register"} className="custom-link text-black fw-bold">
            Register
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNavbar;
