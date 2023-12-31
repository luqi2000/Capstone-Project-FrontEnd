import { Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";
import { useDispatch } from "react-redux";
import { saveUserAction } from "../redux/actions";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.elements.email.value; //They allow you to extract the "email" and "password" text input values ​​from an event
    const password = event.target.elements.password.value;

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken; //taking from json object the token
        //Save the token in localStorage
        localStorage.setItem("token", token);
        // send to loggedHome component

        const userId = data.userId;
        dispatch(saveUserAction(userId));

        navigate("/loggedHome");
      } else {
        // Gestisci l'errore di autenticazione
        console.log("authentication failure");
        setShowModal(true);
      }
    } catch (error) {
      console.log("Handle network error");
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="d-inline-flex">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="text-white" type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>User not found. Please check your credentials and try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Myfooter />
    </>
  );
};

export default Login;
