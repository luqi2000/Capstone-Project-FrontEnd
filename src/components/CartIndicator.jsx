import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const CartIndicator = () => {
  return (
    <div className="text-end">
      <Button className="" variant="success">
        <FaShoppingCart className="text-white" />
        <span className="ms-2">0</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
