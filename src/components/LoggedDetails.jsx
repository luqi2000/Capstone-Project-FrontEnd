import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Myfooter from "./Myfooter";
import { useLocation } from "react-router-dom";
import LoggedNavbar from "./LoggedNavbar";

const LoggedDetails = () => {
  const location = useLocation();
  const product = location.state;
  console.log(product);

  return (
    <>
      <LoggedNavbar />
      <Container>
        <Row className="">
          <Col xs={12} md={6}>
            <img src={product.img} alt="product selected" className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <h1>Name: {product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} $</p>
            <Form.Select aria-label="Default select example" size="sm">
              <option>Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
            </Form.Select>
            <Button className="mt-2">Add To Card</Button>
          </Col>
        </Row>
      </Container>
      <Myfooter />
    </>
  );
};
export default LoggedDetails;
