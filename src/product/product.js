import React, { useState, useEffect } from "react";
import "./product.css";
import Cart from "../cart";

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(detail);
  useEffect(() => {
    Store();
  }, []);

  const Store = async () => {
    const response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2"
    );
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setDetail(jsonData);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleCart = () => {
    alert(`Thank you for shopping. Your total price is Rs${cart.reduce((total, product) => total + product.price, 0)}.`);
  };

  const handleApp=()=>{
    alert("Dowload the app from  play store");
  }
  const handleSupplier=()=>{
    alert("Contact our tollfree no to know more about it.");
  }


  return (
    <>
      <header>
        <div className="logo">
          <h2>Meesho</h2>
        </div>
        <input type="text" placeholder="Search Products" />
        <nav>
          <ul>
            <li>
              <a href="#" onClick={handleApp}>Download App</a>
            </li>
            <li>
              <a href="#" onClick={handleSupplier}>Become a supplier</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#" onClick={handleCart} >Cart ({Cart.length})</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        {detail.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                <img src={values.image} alt="" />
                <h5>Price : Rs{values.price}</h5>
                <h5>Rating : {values.rating.rate}✡️</h5>

                <button onClick={() => handleAddToCart(values)}>Add to cart</button>
              </div>
            </>
          );
        })}
      </div>
      <Cart />
    </>
  );
};
export default Product;
