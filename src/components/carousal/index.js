import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./index.css";

/*
<div className="box1data1">
              <p className="box1data1Content">Our Mission</p>
            </div>
            <div className="box1data2">
              <p className="box1data2Content">
                Perfection in automation, through creating a vision of transparency,
                trust and belief.
              </p>
            </div>
            <div className="box1data3">
              <p className="box1data3Content">
                Work. Build. Play. Lets work on our today to build a promising
                tomorrow, and play a part in completing our Enso; the circle of
                togetherness.
              </p>
            </div>
*/
const Carousal = () => {
  return (
    <div>
      <div className="box1">
        <div className="caraouslBox">
          <Carousel controls={true} indicators={true}>
            <Carousel.Item>
              <img
                className="imgHeight"
                src="/assets/c1.PNG"
                alt="First slide"
              />
              <div className="outerBox">
                <div className="boxc1">
                  <p className="boxHeading"></p>
                </div>
                <div className="boxc12">
                  <p className="boxCaption"></p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgHeight"
                src="/assets/c2.PNG"
                alt="Second slide"
              />
              <div className="outerBox">
                <div className="boxc2">
                  <p className="boxHeading"></p>
                </div>
                <div className="boxc22">
                  <p className="boxCaption"></p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgHeight"
                src="/assets/c3.PNG"
                alt="Third slide"
              />
              <div className="outerBox2">
                <div className="boxc3">
                  <p className="boxHeading"></p>
                </div>
                <div className="boxc32">
                  <p className="boxCaption"></p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
