import React, { useContext } from "react";
import sampleData from "../../constants.js";
import { ThemeContext } from "../../App.jsx";

function addToCart(product_to_add) {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  console.log(cart);
  console.log("Before : ", product_to_add);
  const newCart = cart.filter((item) => {
    return item.product_id !== product_to_add.product_id;
  });
  console.log("After : ", product_to_add);

  console.log(newCart);

  let present = cart.find(
    (item) => item.product_id === product_to_add.product_id
  );
  console.log(present);
  if (present) {
    present.quantity += 1;
    localStorage.setItem("cart", JSON.stringify([...newCart, present]));
  } else {
    product_to_add = { ...product_to_add, quantity: 1 };
    localStorage.setItem("cart", JSON.stringify([...newCart, product_to_add]));
  }

  //add to local storage , Update product_to add likewise.
  // if it is present -> product_to_add.quantity+=1
  //else -> {...data, quantity: 1}
  // cart = [{},{},{}];
  // others = cart.filter(id != product_to_add.id)
  // updated_cart = [...others, product_to_add];
}
function removeFromCart(product_to_remove, totalCartCount, setCartCount) {
  console.log("- Clicked!!!");
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const newCart = cart.filter((item) => {
    return item.product_id !== product_to_remove.product_id;
  });

  const present = cart.find((item) => {
    return item.product_id === product_to_remove.product_id;
  });
  if (present && present.quantity > 0) {
    present.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify([...newCart, present]));
    setCartCount(totalCartCount - 1);
  } else {
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  //remove from local storage
  //cart array from local storage
  //find the obj(product_to_remove) and get the obj
  // obj.quantity-=1;
  // cart = [{},{},{}];
  // others = cart.filter(id != product_to_remove.id)
  // updated_cart = [...others, product_to_remove];
}

const ProductCard = ({ data, totalCartCount, setCartCount }) => {
  const themeData = useContext(ThemeContext);
  // console.log(themeData);
  return (
    <div className="component flex flex-col justify-between items-center  gap-[8px] bg-white w-32 max-h-[300px] p-2">
      <img src={data.img_link} alt="" className="w-[100%] min-w-28" />
      <div className="w-[100%] flex gap-[5px] p-2">
        <button
          className="add  p-[4px] w-[100%] bg-[rgb(255,165,0)] text-white text-[1rem] rounded-[15px] cursor-pointer"
          onClick={() => {
            addToCart(data);
            // console.log(totalCartCount);
            setCartCount(totalCartCount + 1);
            // console.log(totalCartCount);
          }}
        >
          +
        </button>
        <button
          className="minus p-[4px] w-[100%] bg-[rgb(255,165,0)] text-white text-[1rem] rounded-[15px] cursor-pointer"
          onClick={() => {
            removeFromCart(data, totalCartCount, setCartCount);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
