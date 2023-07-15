import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

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
      <div>Your order has been cancelled</div>
      <div>You will be redirected to the home page in {count} seconds...</div>
    </div>
  );
};

export default PaymentCancelled;
