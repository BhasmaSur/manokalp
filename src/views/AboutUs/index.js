import React from "react";
import AboutAprna from "../../components/about-aparna";
import AboutUsTemplate from "../../components/aboutus-template";
import Footer from "../../components/footer";
import { Navbar } from "../../components/navbar";
import OurVision from "../../components/our-vision";

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <AboutUsTemplate />
      <AboutAprna />
      <Footer/>
    </>
  );
};

export default AboutUs;
