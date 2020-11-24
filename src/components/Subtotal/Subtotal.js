import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useData } from "../../contexts/StateProvider";
import { showBasketTotal } from "../../contexts/reducer";

function Subtotal() {
  const [{ basket }] = useData();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={showBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
