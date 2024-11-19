import React from "react";
import "./HomeCard.css";

const HomeCard = ({ data, key }) => {
  return (
    <div key={key} className="home-card">
      <div className="home-card-title">{data.title}</div>
      <div className="home-card-item-container">
        {data.items.map((item) => (
          <div className="home-card-item">
            <div className="home-card-item-img">
              <img src={item.image} alt="" />
            </div>
            <div className="home-card-item-title">{item.title}</div>
          </div>
        ))}
      </div>
      <a href={data.redirect.url}> {data.redirect.label} </a>
    </div>
  );
};

export default HomeCard;
