import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>Price: Rs {item.price}</p>
        </div>
      ))}
      <h4>Total Price: Rs {getTotalPrice()}</h4>
    </div>
  );
};

export default Cart;