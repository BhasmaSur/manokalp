import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCard = ({ src, username, about, feedback }) => {
  return (
    <div>
      <img alt={src} src={src} />
      <div className="myCarousel">
        <h3>{username}</h3>
        <h4>{about}</h4>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
