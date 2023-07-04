import { Button, Form } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Myfooter from "./Myfooter";

const Login = () => (
  <>
    <MyNavbar />
    <Form className="LoginAndRegister ps-3 pt-5">
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label className="text-white">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" size="sm" />
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
export default Login;
