import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const Myfooter = () => {
  return (
    <footer className="footer pt-5 pb-5">
      <div className="container w-50">
        <Row>
          <div className="d-flex">
            <div className="d-flex mb-3">
              <BsFacebook className="me-3 text-white" />
              <BsInstagram className="me-3 text-white" />
              <BsTwitter className="me-3 text-white" />
              <AiOutlineYoutube className="text-white" />
            </div>
          </div>
          <Col sm={3}>
            <div className="text-white text-start">
              <p className="fs-6">Audio and Subtitles</p>
              <p className="fs-6">Media Center</p>
              <p className="fs-6">Privacy</p>
              <p className="fs-6">Contacs us</p>
              <button className="border border-secondary py-1 text-white bg-transparent mt-4 mb-3">Service Code</button>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-white text-start">
              <p className="fs-6">Audio Description</p>
              <p className="fs-6">Investor Relations</p>
              <p className="fs-6">Legal Notices</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-white text-start">
              <p className="fs-6">Help Center</p>
              <p className="fs-6">Jobs</p>
              <p className="fs-6">Cookie Preferences</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-white text-start">
              <p className="fs-6">Gift Cards</p>
              <p className="fs-6">Terms of Use</p>
              <p className="fs-6">Corporate Information</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
export default Myfooter;
