import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import AsNavFor from "./AsForNav";
export function Order() {
  // const [searchParams, setSearchParams] = useSearchParams({});
  const { id } = useParams();
  // const productOrder = searchParams.get("order");
  const [productInfo, setProductInfo] = useState({});
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberChange = (event) => {
    setSelectedNumber(parseInt(event.target.value));
  };
  function getProductsDetail() {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/${id}`)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            setProductInfo(data);
          } else {
            alert(`error${status}`);
          }
        });
    }
  }
  useEffect(() => {
    getProductsDetail();
  }, [id]);

  console.log({ productInfo });
  return (
    <>
      <div className="containerF ">
        <div className="content">
          <div className="goods-summary row">
            <div className="goods-image pull-left  col-sm-6 col-12">
              <div className="swiper-container m-auto justofy-content-center">
                {
                  productInfo && <AsNavFor images={productInfo.images} />
                  // productInfo.images?.map((item, index) => (
                  //   <img key={index} src={item.path} alt={productInfo.title} />
                  // ))
                }
              </div>
            </div>
            <div
              className="goods-info pull-right col-sm-6 col-12"
              style={{ color: "#063255" }}
            >
              <h1 className="good-title">{productInfo.title}</h1>
              <div className="good-price pt-3 d-flex">
                <p className="good-symbol">₮</p>
                <span className="good-symbol"> {productInfo.price}</span>
              </div>
              <div className="qnt">
                <label for="qnty-select" style={{ paddingRight: "8px" }}>
                  Тоо ширхэг:
                </label>
                <select value={selectedNumber} onChange={handleNumberChange}>
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button class="rounded tw-px-48 tw-border-solid tw-border-2 tw-mt-2 tw-text-xl tw-border-indigo-500">
                Захиалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
