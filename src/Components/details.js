import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/swiper.css";
export function Details() {
  const [productDetail, setProductDetail] = useState([]);
  function loadProuducts() {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setProductDetail(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProuducts();
  }, []);
  console.log({ productDetail });
  return (
    <>
      <div className="header">
        <div className="content containerM">
          <div className="goods-summary row">
            <div className="goods-image pull-left  col-sm-6 col-12">
              <div className="swiper-container m-auto justofy-content-center">
                {/* <img src={img1} alt="mskjf" /> */}
              </div>
              <div className="swiper-pagination">
                <div className="swiper-pagination-list pb-5"></div>
              </div>
            </div>
            <div className="goods-info pull-right col-sm-6 col-12">
              <h1 className="good-title">{productDetail.title}</h1>
              <div className="good-price pt-3 d-flex">
                <p className="good-symbol">₮</p>
                <span className="good-symbol"> 40000</span>
              </div>
              <div className="qnt">
                <label htmlFor="quantity">Quantity:</label>
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
