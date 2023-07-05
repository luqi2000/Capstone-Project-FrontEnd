import { Card, Container, ListGroup, Row, Col, Spinner, Button } from "react-bootstrap";
import LoggedNavbar from "./LoggedNavbar";
import { useEffect, useState } from "react";
import Myfooter from "./Myfooter";

const LoggedHome = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <Container fluid className="loggedHome">
        <Row>
          {isLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            products.map(product => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{product.category}</ListGroup.Item>
                    <ListGroup.Item>{product.price}$</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button>More details</Button>
                    <Button href="#">Add to card</Button>
                  </Card.Body>
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
