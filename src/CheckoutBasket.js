import React from "react";
import "./CheckoutBasket.css";
import { useStateValue } from "./StateProvider";

function CheckoutBasket() {
  const [{ basket }] = useStateValue();

  return <div className="checkout_basket"></div>;
}

export default CheckoutBasket;
