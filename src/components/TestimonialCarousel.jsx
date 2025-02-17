import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg">
          <p className="text-lg italic mb-4">"{testimonial.text}"</p>
          <h3 className="font-semibold">{testimonial.author}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;