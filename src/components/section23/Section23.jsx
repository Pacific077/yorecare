import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Section23.css";
import img1 from "../../contents/carousel1.jpg";
import img2 from "../../contents/carousel2.jpg";
import img3 from "../../contents/carousel3.jpg";
import img4 from "../../contents/carousel4.jpg";
import './Sec23resp.css'
const Section23 = () => {
  return (
    <div className="section23">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt=""/>
        </div>
      </Carousel>
    </div>
  );
};

export default Section23;
