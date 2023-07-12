import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/loggedHome");
    }, 8000);
  }, [navigate]);

  return (
    <>
      <div>Thank you for your purchase, your transaction has been accepted. Hope to see you again!</div>
      <div>We have sent you a confirmation email!</div>
      <div>You will be redirected to the home page in 8 second...</div>
    </>
  );
};
export default PaymentSuccess;
