import { Button, Form, Modal } from "react-bootstrap";
import LoggedNavbar from "./LoggedNavbar";
import Myfooter from "./Myfooter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// ... (importazioni rimanenti)

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    surname: "",
    address: "",
    phoneNumber: ""
  });
  const userId = useSelector(state => state.user);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUserDetails();
    // eslint-disable-next-line
  }, []);

  const fetchUserDetails = () => {
    // Effettua la richiesta Fetch (GET) per ottenere i dati dell'utente
    fetch(`http://localhost:3001/user/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore durante la richiesta dei dati utente");
        }
        return response.json();
      })
      .then(data => {
        // Aggiorna lo stato con i dati ricevuti dalla richiesta
        console.log(data);
        setUserDetails(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleSubmit = event => {
    event.preventDefault();

    const updatedUserData = {
      name: userDetails.name,
      surname: userDetails.surname,
      address: userDetails.address,
      phoneNumber: userDetails.phoneNumber
    };

    // Effettua la richiesta Fetch (PUT) per aggiornare i dati dell'utente
    fetch(`http://localhost:3001/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify(updatedUserData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore durante l'aggiornamento dei dati utente");
        }
        return response.json();
      })
      .then(data => {
        // Mostra il modal di successo
        setShowSuccessModal(true);
        // Aggiorna i dettagli dell'utente nello stato
        setUserDetails(data);
      })
      .catch(error => {
        // Mostra il modal di errore
        setShowErrorModal(true);
        setErrorMessage("Errore durante l'aggiornamento del profilo: " + error.message);
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
      <LoggedNavbar />
      <Form className="ps-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formBasicName">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your name"
            value={userDetails.name}
            onChange={e => setUserDetails(prevState => ({ ...prevState, name: e.target.value }))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicSurname">
          <Form.Label className="text-white">Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your surname"
            value={userDetails.surname}
            onChange={e => setUserDetails(prevState => ({ ...prevState, surname: e.target.value }))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicAddress">
          <Form.Label className="text-white">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your full address"
            value={userDetails.address}
            onChange={e => setUserDetails(prevState => ({ ...prevState, address: e.target.value }))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPhoneNumber">
          <Form.Label className="text-white">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your Phone number"
            value={userDetails.phoneNumber}
            onChange={e => setUserDetails(prevState => ({ ...prevState, phoneNumber: e.target.value }))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="text-white" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit
        </Button>
      </Form>
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The change was made successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modification Error</Modal.Title>
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
      <Myfooter />;
    </>
  );
};
export default EditProfile;
