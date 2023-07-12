import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/loggedHome");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center">
      <div>Your order has been cancelled</div>
      <div>You will be redirected to the home page in 5 second...</div>
    </div>
  );
};
export default PaymentCancelled;
