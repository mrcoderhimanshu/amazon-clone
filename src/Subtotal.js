import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  let totalAmt = 0;

  for (const [index, value] of basket.entries()) {
    totalAmt = totalAmt + value.price;
  }
  /*
  const AmountTotal = () => {
    for (const [index, value] of basket.entries()) {
      totalAmt = totalAmt + value.price;
    }
  };
  */

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length} items):
              <strong>${totalAmt}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmt}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
