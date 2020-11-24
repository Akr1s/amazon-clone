import React from "react";
import { useData } from "../../contexts/StateProvider";
import "./Product.css";
import { ACTIONS } from "../../contexts/reducer";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useData();

  const addToBasket = () => {
    dispatch({
      type: ACTIONS.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
        quantity: 1,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prodact__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>★</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket} className="product__addToBasket">
        Add to Basket
      </button>
    </div>
  );
}
export default Product;
