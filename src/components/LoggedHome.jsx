import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup, Row, Col, Spinner, Button } from "react-bootstrap";
import LoggedNavbar from "./LoggedNavbar";
import Myfooter from "./Myfooter";
import { useNavigate } from "react-router-dom";

const LoggedHome = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // Nuovo stato per la categoria selezionata

  const navigate = useNavigate();

  const filterProductsByCategory = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <LoggedNavbar />
      <Container fluid>
        <Row>
          <div className="d-flex w-100 my-4">
            <Button
              variant={selectedCategory === "Gifts" ? "primary" : "outline-primary"}
              className="mx-2"
              onClick={() => filterProductsByCategory("Gifts")}>
              Gifts
            </Button>
            <Button
              variant={selectedCategory === "Jewelry" ? "primary" : "outline-primary"}
              className="mx-2"
              onClick={() => filterProductsByCategory("Jewelry")}>
              Jewelry
            </Button>
            <Button
              variant={selectedCategory === "Games" ? "primary" : "outline-primary"}
              className="mx-2"
              onClick={() => filterProductsByCategory("Games")}>
              Games
            </Button>
          </div>
        </Row>
        <Row>
          {isLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            products
              .filter(product => !selectedCategory || product.category === selectedCategory)
              .map(product => (
                <Col
                  className="mb-4"
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  onClick={() => navigate("/products/" + product.id, { state: product })}>
                  <Card className="loggedCard ">
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.name}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{product.category}</ListGroup.Item>
                      <ListGroup.Item>{product.price}$</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              ))
          )}
        </Row>
      </Container>
      <Myfooter />
    </>
  );
};

export default LoggedHome;
