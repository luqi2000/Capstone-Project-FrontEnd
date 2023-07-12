import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.jpeg";
import CartIndicator from "./CartIndicator";

const LoggedNavbar = () => (
  <Navbar expand="sm" className="TopbarBeforeLogin sticky-top">
    <Container fluid>
      <Navbar.Brand href="#home" className="text-white">
        <img src={logo} alt="Logo" className="logo-image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <CartIndicator />
          <Nav.Link href="#link">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default LoggedNavbar;
