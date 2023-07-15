import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user);
  const cart = useSelector(state => state.content[userId] || []);

  const cartLength = cart.length; // Lunghezza del carrello specifico dell'utente corrente

  return (
    <div className="text-end">
      <Button className="" variant="success" onClick={() => navigate("/cart")}>
        <FaShoppingCart className="text-white" />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
