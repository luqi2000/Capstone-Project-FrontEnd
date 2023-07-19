import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import CartIndicator from "./CartIndicator";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoggedNavbar = () => {
  return (
    <Navbar expand="sm" className="TopbarBeforeLogin sticky-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white">
          <img src={logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex">
              <div className="mt-2">
                <CartIndicator />
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="user-dropdown">
                  <FaUserCircle size={40} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/mainHome">
                    Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default LoggedNavbar;
