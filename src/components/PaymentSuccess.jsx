import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const orderResponse = await fetch("http://localhost:3001/orders", {
          method: "POST",
          body: JSON.stringify({ userId: userId }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        });

        if (orderResponse.ok) {
          const orderData = await orderResponse.json();
          console.log("Ordine creato con successo:", orderData);
        } else {
          console.error("Errore durante la creazione dell'ordine:", orderResponse);
        }
      } catch (error) {
        console.error("Errore durante la richiesta di creazione dell'ordine:", error);
      }
    };

    fetchData();

    // Avvia il countdown dopo il montaggio del componente
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    // Pulisci il timer quando il componente viene smontato
    return () => clearInterval(timer);
  }, [navigate, userId]);

  useEffect(() => {
    // Quando il countdown arriva a 0, reindirizza l'utente
    if (countdown === 0) {
      navigate("/loggedHome");
    }
  }, [countdown, navigate]);

  return (
    <div className="text-center text-red">
      <div className="text-success">
        Thank you for your purchase, your transaction has been accepted. Hope to see you again!
      </div>
      <div className="text-success">We have sent you a confirmation email!</div>
      <div className="text-success">You will be redirected in {countdown} seconds to the home page...</div>
    </div>
  );
};

export default PaymentSuccess;
