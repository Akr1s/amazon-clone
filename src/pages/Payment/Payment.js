import React from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useData } from "../../contexts/StateProvider";
import "./Payment.css";
import { showBasketLenght } from "../../contexts/reducer";
import { ACTIONS } from "../../contexts/reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useData();
  const history = useHistory();
  if (basket?.length === 0) {
    history.push("/");
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ({" "}
          <Link to="checkout">
            {basket ? showBasketLenght(basket) : 0} items
          </Link>{" "}
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user ? user.email : "Email is undefined"}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <p>
              Card number: <strong>1234567890</strong>
            </p>
            <p>
              Expired date: <strong>22.2030</strong>
            </p>
            <p>
              CCV2: <strong>123</strong>
            </p>
          </div>
        </div>
        <button
          className="payment__btn"
          onClick={() => {
            dispatch({ type: ACTIONS.PAYMENT_SUCCESS });
            history.push("/payment_succesful");
          }}
        >
          Take a purchase
        </button>
      </div>
    </div>
  );
}

export default Payment;
