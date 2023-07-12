import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Your order has been cancelled</div>
      <Button
        onClick={() => {
          navigate("/loggedHome");
        }}>
        Click here to return to the main page
      </Button>
    </>
  );
};
export default PaymentCancelled;
