import React from "react";
import "./Carousel.css";
import image1 from "../../assets/carousel/photo1.jpg";
import image2 from "../../assets/carousel/photo2.jpg";
import image3 from "../../assets/carousel/photo3.jpg";
import image4 from "../../assets/carousel/photo4.jpg";
import image5 from "../../assets/carousel/photo5.jpg";
import image6 from "../../assets/carousel/photo6.jpg";
import image7 from "../../assets/carousel/photo7.jpg";

const Carousel = () => {
  let currentImg = 0;
  let imagesArr = [image1, image2, image3, image4, image5, image6, image7];
  // let images = document.querySelectorAll(".carousel-img");
  // images.forEach((image, index) => {
  //   image.style.transform = `translatex(${index * 100}%)`;
  // });
  // let interval = setInterval(moveForward, 5000);
  function moveBack() {
    // clearInterval(interval);
    currentImg++;
    console.log(currentImg);
    currentImg %= imagesArr.length;
    moveImg();
  }
  function moveForward() {
    // clearInterval(interval);
    currentImg--;
    console.log(currentImg);
    currentImg = (currentImg + imagesArr.length) % imagesArr.length;
    moveImg();
  }
  function moveImg() {
    const images = document.querySelectorAll(".carousel-img"); // We have to reinitialize it as className carousel-img is not found if we query Select it before  the insertion of the images.
    images.forEach((image, index) => {
      image.style.transform = `translatex(${(index - currentImg) * 100}%)`;
      image.style.transition = "1s";
    });
    // interval = setInterval(moveForward, 5000);
  }
  return (
    <div className="carousel-container">
      <div className="carousel-blur-container"></div>
      <div className="carousel-img-container">
        {imagesArr.map((image) => {
          return <img src={image} alt="" className="carousel-img" />;
        })}
        <button
          className="carousel-left-btn carousel-btn"
          onClick={moveForward}
        >
          {" "}
          &lt;{" "}
        </button>
        <button className="carousel-right-btn carousel-btn" onClick={moveBack}>
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
