import { Button, Col, ListGroup, Row } from "react-bootstrap";
import LoggedNavbar from "./LoggedNavbar";
import Myfooter from "./Myfooter";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart.content);
  const dispatch = useDispatch();
  return (
    <>
      <LoggedNavbar />
      <Row className="cart">
        <Col sm={12} className="font-weight-bold text-white mb-5 ms-3">
          TOTAL:{" "}
          <span className="display-6 text-primary">
            {cart.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0).toFixed(2)}${" "}
            {/* toFixed for having a decimal number */}
          </span>
        </Col>
      </Row>

      <Row>
        <Col sm={12} className="mb-5">
          <ListGroup variant="flush">
            {cart.length > 0 ? (
              cart.map((product, i) => (
                <ListGroup.Item key={i}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: i });
                    }}>
                    <FaTrash />
                  </Button>
                  <img className="product-cover-small weigth-10px" src={product.img} alt="product selected" />
                  {product.name}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="lead ">
                <span className="text-primary opacity-50 fs-1 me-2">
                  {" "}
                  <FaShoppingCart />
                </span>
                Your cart is empty
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>

      <Myfooter />
    </>
  );
};

export default Cart;
