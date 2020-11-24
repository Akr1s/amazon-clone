import React from "react";
import { Link } from "react-router-dom";
import "./PaymentSuccesful.css";

function PaymentSuccesful() {
  return (
    <div className="paymentSuccesful">
      <div className="paymentSuccesful__container">
        <h2>Thanks for your purchase :)</h2>
        <h2>
          Go to <Link to="/">home</Link> page
        </h2>
      </div>
    </div>
  );
}

export default PaymentSuccesful;
