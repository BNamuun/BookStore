import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import img1 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Back1_2400x2400.jpeg";
import img2 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Back2_2400x2400.jpeg";
import img3 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Front1_2400x2400.jpeg";
import img4 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Open_2400x2400.jpeg";
import img5 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Thumbnail_2400x2400.jpeg";
import img6 from "../images/Level_1/B2D0178UsborneMyVeryFirstReadingLibrary-50Books-Thumbnail_2400x2400.jpeg";
import "../css/swiper.css";
export function Details() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <>
      <div className="header">
        <div className="content containerM">
          <div className="goods-summary row">
            <div className="goods-image pull-left  col-sm-6 col-12">
              <div className="swiper-container m-auto justofy-content-center">
                <img src={img1} alt="mskjf" />
              </div>
              <div className="swiper-pagination">
                <div className="swiper-pagination-list pb-5">
                  <Slider {...settings}>
                    <div>
                      <img src={img1} alt="My first reading book" />
                    </div>
                    <div>
                      <img src={img2} alt="My first reading book" />
                    </div>
                    <div>
                      <img src={img3} alt="My first reading book" />
                    </div>
                    <div>
                      <img src={img4} alt="My first reading book" />
                    </div>
                    <div>
                      <img src={img5} alt="My first reading book" />
                    </div>
                    <div>
                      <img src={img4} alt="My first reading book" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="goods-info pull-right col-sm-6 col-12">
              <h1 className="good-title"> My Reading Library</h1>
              <div className="good-price pt-3 d-flex">
                <p className="good-symbol">₮</p>
                <span className="good-symbol"> 40000</span>
              </div>
              <div className="qnt">
                <label for="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  value="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
