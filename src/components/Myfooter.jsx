import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Visa from "../images/visa.png";
import Mastercard from "../images/mastercard.png";
import Maestro from "../images/maestro.png";
import American from "../images/american.png";

const Myfooter = () => {
  return (
    <Container fluid className="text-white pt-5">
      <Row>
        <Col>
          <h4>Contact us</h4>
          <p>
            <strong>Address: </strong>654 Kingroad avenue
          </p>
          <p>
            <strong>Phone: </strong>+447723006645
          </p>
          <p>
            <strong>Hours Open: </strong>From 8 A.m to 5 P.m
          </p>
          <p>
            <strong>Follow us: </strong>
          </p>
          <div className="d-flex mb-3">
            <BsFacebook size={30} className="me-3 text-white" />
            <BsInstagram size={30} className="me-3 text-white" />
            <BsTwitter size={30} className="me-3 text-white" />
            <a
              href="https://www.linkedin.com/in/luqman-mohammad-full-stack-developer/"
              target="_blank"
              rel="noopener noreferrer">
              <BsLinkedin size={30} className="text-white" />
            </a>
          </div>
        </Col>
        <Col>
          <h4>About</h4>
          <p>About us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
          <p>Tax Policy</p>
          <p>Fee Policy</p>
          <p>Terms & Conditions</p>
        </Col>
        <Col>
          <h4>Install App</h4>
          <p>Available On Google Play Services & App Store</p>
          <p>Payment method:</p>
          <p>
            <img src={Visa} alt="visa" className="me-2" style={{ height: "30px" }} />
            <img src={Mastercard} alt="visa" className="me-2" style={{ height: "30px" }} />
            <img src={Maestro} alt="visa" className="me-2" style={{ height: "40px" }} />
            <img src={American} alt="visa" className="me-2" style={{ height: "60px" }} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Myfooter;
