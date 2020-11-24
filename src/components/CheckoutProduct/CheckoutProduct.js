import React, { forwardRef } from "react";
import { useData } from "../../contexts/StateProvider";
import "./CheckoutProduct.css";
import { ACTIONS } from "../../contexts/reducer";

const CheckoutProduct = forwardRef(
  ({ id, title, image, rating, price, quantity }, ref) => {
    const [_, dispatch] = useData();
    const removeFromBusket = () => {
      dispatch({ type: ACTIONS.REMOVE_FROM_BUSKET, id: id });
    };
    const decreaseQuantity = () => {
      dispatch({ type: ACTIONS.DECREASE_QUANTITY, id: id });
    };
    const increaseQuantity = () => {
      dispatch({ type: ACTIONS.INCREASE_QUANTITY, id: id });
    };
    return (
      <div className="checkoutProduct" ref={ref}>
        <img src={image} alt={title} className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>★</p>
              ))}
          </div>
          <div className="checkoutProduct__quantityBox">
            <button
              className="checkoutProduct__quantityBtn"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <p className="checkoutProduct__quantity">
              Quantity: <strong>{quantity}</strong>
            </p>
            <button
              className="checkoutProduct__quantityBtn"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button onClick={removeFromBusket}>Remove from Basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
