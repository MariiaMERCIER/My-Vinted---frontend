import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Import des Components

import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const stripPromise = loadStripe(
  "pk_test_51M4Oa5LO2uKvmdcRPDIQ5SE5q7mHqe33Ybdj8e2URuY3rKgJIpYSWp448q88CmizVPBvB8YcvW50jHRyzVKnOMDB00EfapnyV9"
);

const Paiement = ({ token, id, handleToken }) => {
  const location = useLocation();
  const { price } = location.state;
  const { title } = location.state;

  return token ? (
    <>
      <Header token={token} handleToken={handleToken} />
      <Elements stripe={stripPromise}>
        <CheckoutForm title={title} price={price} id={id} />
      </Elements>
      <Footer color={true} />
    </>
  ) : (
    <Navigate to="/user/login" />
  );
};
export default Paiement;
