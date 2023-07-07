import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();

  const carLength = useSelector(state => state.cart.content.length); //return only a length number
  return (
    <div className="text-end">
      <Button className="" variant="success" onClick={() => navigate("/cart")}>
        <FaShoppingCart className="text-white" />
        <span className="ms-2">{carLength}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
