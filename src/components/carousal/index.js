import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import "./index.css"
const Carousal = () => {
    return (
        <div>
          <div className="box1">
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
                      <p className="boxHeading">
                        Flexible automations to improve production efficiency
                      </p>
                    </div>
                    <div className="boxc12">
                      <p className="boxCaption">
                        Flexible Automation is a concept that allows a robotic cell
                        to be re-tasked quickly and easily allowing for multiple
                        automation processes while requiring minimal change
                        over. The main challenge has been dealing with parts that
                        are difficult to feed and those with high mix / low volume.
                        Traditionally, for many of these applications, automation
                        has been cost prohibitive. Investing in automation with
                        Re-deployable Assets now makes these applications feasible.
                      </p>
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
                      <p className="boxHeading">
                        Innovative, high-performance solutions for complex process
                        automations
                      </p>
                    </div>
                    <div className="boxc22">
                      <p className="boxCaption">
                        Reliable, easy-to-use still innovative solutions with
                        responsive and expert services. Your path to improved
                        performance starts here.
                      </p>
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
                      <p className="boxHeading">
                        High technology, low-cost automations
                      </p>
                    </div>
                    <div className="boxc32">
                      <p className="boxCaption">
                        It is a technology that creates some degree of low-cost
                        automation services around the existing equipment, tool,
                        methods and people using mostly standard components available
                        in the market.
                      </p>
                    </div>
                  </div>
                  
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      );
    };

export default Carousal