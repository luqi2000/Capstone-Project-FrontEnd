import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";

const MainHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row className="contentMain justify-content-center contentMain">
          <Col xs={12} md={8}>
            <Carousel>
              {products.length > 0 ? (
                products.map(product => (
                  <Carousel.Item key={product.id}>
                    <img className="d-block w-100" src={product.img} alt={product.name} />
                    <Carousel.Caption>
                      <h3 className="carousel-title">{product.name}</h3>
                      <p className="carousel-description">{product.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              ) : (
                <Spinner animation="border" variant="success" />
              )}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Myfooter />
    </>
  );
};

export default MainHome;
