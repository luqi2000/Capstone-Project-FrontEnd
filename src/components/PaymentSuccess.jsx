import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/loggedHome");
    }
  }, [count, navigate]);

  return (
    <div className="text-center">
      <div>Thank you for your purchase, your transaction has been accepted. Hope to see you again!</div>
      <div>We have sent you a confirmation email!</div>
      <div>You will be redirected to the home page in {count} seconds...</div>
    </div>
  );
};

export default PaymentSuccess;
