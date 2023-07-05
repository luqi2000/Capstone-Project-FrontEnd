import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
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
        const token = data.token;
        // Salva il token nel localStorage o in un altro meccanismo di storage
        localStorage.setItem("token", token);
        // Reindirizza alla pagina successiva
        navigate("/loggedHome");
      } else {
        // Gestisci l'errore di autenticazione
        console.log("Errore di autenticazione");
      }
    } catch (error) {
      // Gestisci l'errore di rete
      console.log("Errore di rete");
    }
  };

  return (
    <>
      <MyNavbar />
      <Form className="LoginAndRegister ps-3 pt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" size="sm" name="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="text-white" type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Myfooter />
    </>
  );
};

export default Login;
