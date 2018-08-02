import React from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../img/testimonials/testi01.jpg";
import Img2 from "../img/testimonials/testi02.jpg";
import Img3 from "../img/testimonials/testi03.jpg";
import Img4 from "../img/testimonials/testi04.jpg";
import Img5 from "../img/testimonials/testi05.jpg";
import Img6 from "../img/testimonials/testi06.jpg";

const Testimonials = () => {
  return (
    <div className="testi-bg">
      <h2 className="testi-title">Testimonials</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={Img1} alt="Testimonials" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Img2} alt="Testimonials" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Img3} alt="Testimonials" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Img4} alt="Testimonials" />
          {/* <p className="legend">Legend 4</p> */}
        </div>
        <div>
          <img src={Img5} alt="Testimonials" />
          {/* <p className="legend">Legend 5</p> */}
        </div>
        <div>
          <img src={Img6} alt="Testimonials" />
          {/* <p className="legend">Legend 6</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
