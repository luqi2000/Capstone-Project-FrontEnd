import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Myfooter from "./Myfooter";
import { useLocation } from "react-router-dom";
import LoggedNavbar from "./LoggedNavbar";

import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/actions";
import { useState } from "react";

const LoggedDetails = () => {
  const location = useLocation();
  const product = location.state;
  const [quantity, setQuantity] = useState(1);
  console.log(product);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productsToAdd = Array.from({ length: quantity }, () => product); // Crea un array di prodotti in base alla quantità

    productsToAdd.forEach(product => {
      dispatch(addToCartAction(product));
    });
  };

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
            <Form.Select
              aria-label="Default select example"
              size="sm"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}>
              <option>Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
            </Form.Select>
            <Button className="mt-2" onClick={handleAddToCart}>
              Add To Card
            </Button>
          </Col>
        </Row>
      </Container>
      <Myfooter />
    </>
  );
};
export default LoggedDetails;
