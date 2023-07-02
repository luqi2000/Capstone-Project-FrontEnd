import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">GIFT SHOP CENTER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
            <Nav.Link href="#link">Shopping Cart</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
