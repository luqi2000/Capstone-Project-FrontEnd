import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../redux/actions";

const Cart = () => {
  const cart = useSelector(state => state.content);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    // Calcola il totale dei prezzi
    const total = cart.reduce((accumulator, product) => accumulator + parseFloat(product.price), 0).toFixed(2);

    try {
      // Invia una richiesta al tuo backend per ottenere l'sessionId
      const response = await fetch("http://localhost:3001/api/pagamento", {
        method: "POST",
        body: JSON.stringify({ total: total }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        const { sessionId } = data; // Ottieni l'sessionId dalla risposta del backend

        // Esegui il redirect a Stripe Checkout utilizzando l'sessionId
        const stripe = window.Stripe(
          "pk_test_51NSKqzJetIPju7BqPH5T3DcJ51PCUuGIsC5j2Je6s0oywMXNUIAv8bBNfAbnN5wQy2AUtjykrknOJErazSwzd1ic00mp4Ht80W"
        );
        await stripe.redirectToCheckout({ sessionId: sessionId });
      } else {
        // Gestisci l'errore dalla risposta del backend
      }
    } catch (error) {
      console.error("Errore durante la richiesta di pagamento:", error);
    }
  };

  return (
    <>
      <Row className="cart">
        <Col className="font-weight-bold text-white mb-5 ms-3 d-flex justify-content-between">
          <span className="display-6 text-primary">
            TOTAL: {cart.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0).toFixed(2)}$
          </span>
          <div>
            <button onClick={handlePayment}>Checkout</button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} className="mb-5">
          <ListGroup variant="flush">
            {cart.length > 0 ? (
              cart.map((product, i) => (
                <ListGroup.Item key={i}>
                  <Button variant="danger" onClick={() => dispatch(removeFromCartAction(i))}>
                    <FaTrash />
                  </Button>
                  <img className="product-cover-small weigth-10px" src={product.img} alt="product selected" />
                  {product.name}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="lead">
                <span className="text-primary opacity-50 fs-1 me-2">
                  <FaShoppingCart />
                </span>
                Your cart is empty
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
