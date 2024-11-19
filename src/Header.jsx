import React from "react";
import Amazonlogo from "./assets/amazoncom.svg";
import SearchLogo from "./assets/search.svg";
import CartLogo from "./assets/cart.svg";
import LocationLogo from "./assets/location.svg";
import dropdownLogo from "./assets/dropdown.svg";
import indiaFlag from "./assets/india.svg";
import { Link } from "react-router-dom";

function Header({ totalCartCount, setCartCount }) {
  return (
    <div className="flex justify-between items-center bg-[#131921] h-[60px] sticky top-0 z-[1]">
      <Link to="/">
        <img
          className="w-[100px] object-contain m-0 mx-[20px] mt-[10px] hover:outline-double hover:outline-[1.4px] hover:outline-white p-[4px]"
          src={Amazonlogo}
          alt=""
        />
      </Link>

      <div className="flex items-end text-white mx-[10px]">
        <img className="h-[18px]" src={LocationLogo} alt="" />
        <div className="flex flex-col">
          <span className="text-[12px] font-normal leading-[14px]">
            Deliver to Guest
          </span>
          <span className="text-[14px] font-bold leading-[15px]">
            Location pincode
          </span>
        </div>
      </div>

      <div className="flex items-center h-[40px] flex-grow rounded-[4px] overflow-hidden">
        <div className="bg-[#d4d4d4] flex items-center h-full p-2 text-[12px] text-[#656565]">
          <div>All</div>
          <img className="h-[16px]" src={dropdownLogo} alt="" />
        </div>
        <input className="h-full flex-grow border-none" type="text" />
        <img className="h-full p-2 bg-[#cd9042]" src={SearchLogo} alt="" />
      </div>

      <div className="flex text-white mx-[20px] space-x-4">
        <div className="flex items-center gap-1">
          <img className="w-[20px]" src={indiaFlag} alt="" />
          <div className="text-[12px] font-semibold">EN</div>
        </div>

        <div className="flex flex-col mx-2">
          <span className="text-[12px] font-normal leading-[14px]">
            Hello Guest!
          </span>
          <span className="text-[14px] font-bold leading-[15px]">Sign In</span>
        </div>

        <div className="flex flex-col mx-2">
          <span className="text-[12px] font-normal leading-[14px]">
            Returns
          </span>
          <span className="text-[14px] font-bold leading-[15px]">& Orders</span>
        </div>

        <Link to="/cart">
          <div className="flex items-end text-white">
            <div className="flex items-center relative">
              <span className="text-[#cd9042] absolute font-semibold -top-[5px] left-[8px] text-[12px]">
                {totalCartCount}
              </span>
              <img className="w-[30px]" src={CartLogo} alt="" />
            </div>
            <span className="ml-1">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
