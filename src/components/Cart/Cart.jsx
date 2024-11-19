import React, { useState } from "react";
import CartProduct from "./CartProduct";
import sampleData from "../../constants.js";
import Header from "../../Header.jsx";
import CategoryFilters from "../../CategoryFilters.jsx";

const Cart = () => {
  const [isCartEmpty, setCartEmpty] = useState(false);
  const cartData = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  // console.log(cartData);
  function clearCart() {
    localStorage.setItem("cart", "[]");
  }
  return (
    <>
      <Header></Header>
      <CategoryFilters />
      <div className="card-container bg-white">
        <div className="shopping-cart-container flex justify-between p-4">
          <h2 className="cart-title text-[26px] font-[700]">Shooping Cart</h2>
          <button
            className="empty-cart-btn border-[2px] border-solid p-[4px] bg-transparent rounded-[8px]"
            onClick={() => {
              setCartEmpty(true);
              clearCart();
            }}
          >
            Empty Cart
          </button>
        </div>
        <hr />

        {cartData.map((product) => {
          return <CartProduct data={product} />;
        })}
        {/* <CartProduct data={sampleData[0]} />
        <CartProduct data={sampleData[1]} />
        <CartProduct data={sampleData[2]} />
        <CartProduct data={sampleData[3]} />
        <CartProduct data={sampleData[4]} />
        <CartProduct data={sampleData[5]} /> */}
        {/* {{}} because {} starts js and {} is obj */}
      </div>
    </>
  );
};

const sampleProductData = [
  {
    title: "Logitech keyboard",
    img: "https://via.placeholder.com/400x400",
    price: 22995,
    mrp_price: 26995,
    rating: 4,
    offer: "15% off",
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    gift: false,
    quantity: 1,
  },
  {
    title: "Logitech keyboard",
    price: 22995,
    mrp_price: 26995,
    rating: 4,
    offer: "15% off",
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    gift: false,
    quantity: 1,
  },
  {
    title: "Logitech keyboard",
    price: 22995,
    mrp_price: 26995,
    rating: 4,
    offer: "15% off",
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    gift: false,
    quantity: 1,
  },
  {
    title: "Logitech keyboard",
    price: 22995,
    mrp_price: 26995,
    rating: 4,
    offer: "15% off",
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    gift: false,
    quantity: 1,
  },
];

export default Cart;
