import React from "react";
import { Link } from "react-router-dom";
import Carousal from "../../components/carousal";
import Footer from "../../components/footer";
import { Navbar } from "../../components/Navbar";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        <Link to="/vaishali-mardhekar">Vaishali Mardhekar</Link>
      </div>
      <div>
        <Link to="/medha-madhav">Medha Madhav</Link>
      </div>
      <div>
        <Link to="/editorial-board">Eitorial Board</Link>
      </div>
      <div>
        <Footer/>
        </div>
    </div>
  );
};
