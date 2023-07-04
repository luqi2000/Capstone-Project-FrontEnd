import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./logo.jpeg";

const MyNavbar = () => {
  return (
    <Navbar expand="sm" className="TopbarBeforeLogin fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white">
          <img src={logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
