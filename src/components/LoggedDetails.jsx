import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Myfooter from "./Myfooter";
import { useLocation } from "react-router-dom";
import LoggedNavbar from "./LoggedNavbar";

import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../redux/actions";
import { useState } from "react";

const LoggedDetails = () => {
  const location = useLocation();
  const product = location.state;
  const [quantity, setQuantity] = useState(1);
  console.log(product);
  const userId = useSelector(state => state.user);
  console.log(userId);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productsToAdd = Array.from({ length: quantity }, () => product); // Crea un array di prodotti in base alla quantità

    productsToAdd.forEach(product => {
      dispatch(addToCartAction(product, userId));

      const token = localStorage.getItem("token");
      console.log(token);

      fetch("http://localhost:3001/cart/add?productId=" + product.id + "&quantity=" + quantity + "&userId=" + userId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(response => {
          if (response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              return response.json(); // Effettua il parsing solo se la risposta è un JSON valido
            } else {
              return response.text(); // Altrimenti, ritorna la risposta come testo
            }
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then(data => {
          console.log("Product added to cart:", data);
        })
        .catch(error => {
          console.error("Error adding product to cart:", error);
        });
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
              <option value="4">4</option>
              <option value="5">5</option>
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
