import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import accountLogo from "../../assets/signin/account.svg";

const Sidebar = ({ open, setSidebar }) => {
  function closeSidebar() {
    setSidebar(false);
  }
  return open ? (
    <div className="parent-sidebar">
      <div className="sidebar-background"></div>
      <div className="sidebar-container">
        <button className="slider-sign-in">
          <img src={accountLogo} alt="" />
          <Link to="/signin">Hello, Sign In</Link>
        </button>
        <button className="cross-sidebar" onClick={closeSidebar}>
          X
        </button>
        <div className="side-bar-items">
          <ContentContainer />
          <ContentContainer />
          <ContentContainer />
          <ContentContainer />
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;

function ContentContainer() {
  return (
    <>
      <div className="content-container">
        <div className="content-title">Trending</div>
        <div className="content-items">
          <div className="content-item">Best Seller</div>
          <div className="content-item">New Release</div>
          <div className="content-item">Movers and Shakers</div>
        </div>
      </div>
    </>
  );
}
