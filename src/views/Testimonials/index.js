import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "../../components/testimonial-card";
import { magazineContent } from "../../demo-data";
import { Typography } from "@mui/material";

export default class Testimonials extends Component {
  render() {
    return (
      <>
      <Typography align="center" mt={10} variant="h3">
        Testimonials
      </Typography>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        showIndicators={false}
      >
        {magazineContent.testimonials.map((testimonial) => {
          return (
            <TestimonialCard
              src={testimonial.src}
              username={testimonial.username}
              about={testimonial.about}
              feedback={testimonial.feedback}
            />
          );
        })}
      </Carousel>
      </>
    );
  }
}
