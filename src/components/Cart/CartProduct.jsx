import React from "react";
import SampleData from "../../constants.js";

const CartProduct = ({ data }) => {
  const { product_name, img_link, actual_price, quantity } = data;
  // console.log(SampleData[0]);
  // console.log(data);
  return (
    <div
      className="cart-product flex gap-[12px] p-[16px]"
      style={{ borderBlock: "1px solid #808080" }}
    >
      <img src={img_link} alt="" className="w-[200px]" />
      <div className="details flex flex-col justify-between w-[100%]">
        <div className="info flex gap=[16px] justify-between w-[100%]">
          <strong>{product_name}</strong>
          <strong>{actual_price}</strong>
        </div>
        <div className="controls flex gap-3 border-2 border-double border-orange-400 px-[16px] rounded-[16px] w-[110px] justify-center">
          <button className="control-">{quantity === 1 ? "🗑️" : "-"}</button>
          <select name="" id="">
            <option value="">{quantity}</option>
          </select>
          <button className="control-">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

// {
//     title: "Logitech keyboard",
//     img: "https://via.placeholder.com/400x400",
//     price: 22995,
//     mrp_price: 26995,
//     rating: 4,
//     offer: "15% off",
//     inStock: true,
//     fastDelivery: true,
//     freeShipping: true,
//     gift: false,
//     quantity: 1,
//   }
