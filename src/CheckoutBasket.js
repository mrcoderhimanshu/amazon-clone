import React from "react";
import "./CheckoutBasket.css";
import { useStateValue } from "./StateProvider";

function CheckoutBasket({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutBasket">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span role="img">⭐</span>
            ))}
        </p>
        <button onClick={removeFromBasket} className="checkoutProduct__btn">
          Remove from Bucket
        </button>
      </div>
    </div>
  );
}

export default CheckoutBasket;
