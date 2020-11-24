import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useData } from "../../contexts/StateProvider";
import { showBasketTotal } from "../../contexts/reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const [{ basket }] = useData();
  const history = useHistory();
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
        value={showBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          history.push("/payment");
        }}
        disabled={!basket.length}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
