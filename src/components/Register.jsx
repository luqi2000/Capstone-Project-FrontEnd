import { Button, Form, Modal } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const userData = {
      name,
      surname,
      email,
      password,
      address,
      phoneNumber
    };

    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.status === 201) {
          // Registration successful
          setShowSuccessModal(true);
          setName("");
          setSurname("");
          setEmail("");
          setPassword("");
          setAddress("");
          setPhoneNumber("");
        } else {
          // Registration failed
          response.json().then(data => {
            setShowErrorModal(true);
            setErrorMessage(data.message || "An error occurred during registration.");
          });
        }
      })
      .catch(error => {
        console.error(error);
        setShowErrorModal(true);
        setErrorMessage("An error occurred during registration.");
      });
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };

  return (
    <>
      <MyNavbar />
      <Form className="ps-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formBasicName">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please insert your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicSurname">
          <Form.Label className="text-white">Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please insert your surname"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Please insert your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Form.Text className="text-muted">We'll never share your password with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicAddress">
          <Form.Label className="text-white">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please insert your full address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPhoneNumber">
          <Form.Label className="text-white">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please insert your Phone number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="text-white" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please go to the Login page.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Myfooter />
    </>
  );
};
export default Register;
