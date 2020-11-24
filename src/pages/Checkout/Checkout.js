import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import Subtotal from "../../components/Subtotal/Subtotal";
import { useData } from "../../contexts/StateProvider";
import "./Checkout.css";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useData();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-ad"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">
            Hello, {user ? `${user.email}` : "Guest"}. This is your shopping
            Basket
          </h2>
          <FlipMove>
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
          </FlipMove>
          {!basket.length && (
            <div className="checkout_empty">
              <h2>There aren`t anything yet :(</h2>
              <h3>
                Go <Link to="/">here</Link> to add anything to your basket.
              </h3>
            </div>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
