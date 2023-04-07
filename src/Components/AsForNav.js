import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function AsNavFor({ images }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    // slidesToScroll: ,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1Ref}>
        {images?.map((item, index) => (
          <img
            key={index}
            src={item.path}
            alt="jskdlf"
            style={{ backgroundSize: "contain" }}
          />
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2Ref}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        {images?.map((item, index) => (
          <img
            className="ratio ratio-4x3 overflow-hidden"
            key={index}
            src={item.path}
            alt="jskdlf"
          />
        ))}
      </Slider>
    </div>
  );
}

export default AsNavFor;
