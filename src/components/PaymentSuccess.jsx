import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Thank you for your purchase, your transaction has been accepted. Hope to see you again!</div>
      <Button
        onClick={() => {
          navigate("/loggedHome");
        }}>
        Click here to return to the main page
      </Button>
    </>
  );
};
export default PaymentSuccess;
