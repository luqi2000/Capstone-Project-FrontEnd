import { Button, Form } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";

const Register = () => {
  return (
    <>
      <MyNavbar />
      <Form className="LoginAndRegister ps-3">
        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control type="text" placeholder="Please insert your name" />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Surname</Form.Label>
          <Form.Control type="text" placeholder="Please insert your surname" />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Please insert your password" />
          <Form.Text className="text-muted">We'll never share your password with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label className="text-white">Address</Form.Label>
          <Form.Control type="text" placeholder="Please insert your full address" />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="text-white" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Myfooter />
    </>
  );
};
export default Register;
