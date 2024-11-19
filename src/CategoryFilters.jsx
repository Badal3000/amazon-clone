import React from "react";
import menuLogo from "./assets/menu.svg";
const items = [
  "Fresh",
  "Best Sellers",
  "MX Player",
  "Sell",
  "Books",
  "Kindle eBooks",
  "Amazon Business",
  "AmazonBasics",
  "Gift Cards",
  "Gift Ideas",
  "Buy Again",
  "Home Improvement",
  "Health",
  "Household & Personal Care",
  "New Releases",
];

const CategoryFilters = ({ open, setSidebar }) => {
  function openSidebar() {
    console.log("Open Called!");
    setSidebar(true);
  }
  return (
    <ul className="category-list flex justify-start items-center w-[100%] h-[40px] list-none gap-[20px] overflow-clip bg-[#232F3E] text-[14px] font-[400] text-white">
      <li
        className="category-item text-nowrap flex items-center cursor-pointer all my-auto mx-[20px] font-[700] gap-[4px]"
        onClick={openSidebar}
      >
        <img src={menuLogo} alt="menu-icon" />
        <span>All</span>
      </li>
      {items.map((item) => {
        return (
          <li className="category-item text-nowrap flex items-center cursor-pointer">
            {item}
          </li>
        );
      })}
      {/* This also Works
        {items.map((item)=>
            <li className="category-item">{item}</li>
        )} */}
    </ul>
  );
};

export default CategoryFilters;
