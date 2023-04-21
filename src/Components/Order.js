import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import AsNavFor from "./AsForNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import CartContext from "../context/cart/CartContext";
import CartContext from "../context/cart/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Order() {
  // const [searchParams, setSearchParams] = useSearchParams({});
  const { id } = useParams();
  // const productOrder = searchParams.get("order");
  const [productInfo, setProductInfo] = useState({});
  const [adding, setAdding] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const parse = require("html-react-parser");
  const handleNumberChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };
  const { addToCart, handleOpen } = useContext(CartContext);
  // const navigate = useNavigate();
  // const navigateToOrderBasket = () => {
  //   navigate("/basket");
  // };
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

  // console.log(productInfo);
  if (!productInfo) return null;
  if (!productInfo?.images) return null;

  let productDetail = {
    id: productInfo._id,
    title: productInfo.title,
    price: productInfo.price,
    image: productInfo.images[0]?.path,
    quantity: selectedQuantity,
  };
  const handleClick = () => {
    addToCart(productDetail);
    handleOpen();
    notify();
  };

  const notify = () =>
    toast.success("🦄 Бараа сагсанд нэмэгдлээ!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div className="containerF py-7">
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
              className=" col-sm-6 col-12 py-10 "
              style={{ color: "#063255" }}
            >
              <h1 className="text-3xl mb-0">{productInfo.title}</h1>
              <div className="text-xl pt-1 d-flex">
                <span className="">
                  ₮{" "}
                  {productInfo.price &&
                    productInfo.price.toLocaleString(navigator.language, {
                      minimumFractionDigits: 0,
                    })}
                </span>
              </div>
              <div className="contentR">{parse(`${productInfo.content}`)}</div>
              <div className="border-dotted col-sm-6"></div>
              <div className="qnt">
                <label htmlFor="qnty-select" style={{ paddingRight: "8px" }}>
                  Тоо ширхэг:
                </label>
                <select
                  className="border-2"
                  value={selectedQuantity}
                  onChange={handleNumberChange}
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 d-flex flex-wrap gap-3">
                <button
                  onClick={handleClick}
                  className="border-2 col-md-6 col-12 border-indigo-900 py-2 active:bg-teal-500"
                >
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  {adding && <div className="spinner-border"></div>}
                  <FontAwesomeIcon icon={faCartShopping} className="px-2" />
                  Сагслах
                </button>
                <button className="border-2 col-md-6 col-12 border-indigo-900 py-2">
                  Захиалах
                </button>
              </div>
              {/* <button className="rounded py-2 grid grid-cols-12 md:grid-cols-4 lg:grid-cols-3 border-2 mt-2 text-xl bg-amber-500 tracking-wider text-white">
                Захиалах
              </button> */}
            </div>
          </div>
        </div>
        {productInfo && (
          <div>
            <h2>Үзүүлэлт</h2>
            <tbody>
              <tr className="text-sm border-t">
                <th className="py-1.5 px-3.5 max-w-[160px] bg-gray-400/10 col-span-3 font-normal text-left">
                  ISBN
                </th>
                <td className="py-1.5 px-3.5 flex border-2 items-center align-middle col-span-9 text-left">
                  {productInfo.charcs?.ISBN}
                </td>
              </tr>
              <tr className="text-sm border-t">
                <th className="py-1.5 px-3.5 max-w-[160px] bg-gray-400/10 col-span-3 font-normal text-left">
                  Формат{" "}
                </th>
                <td className="py-1.5 px-3.5 flex border-2 items-center align-middle col-span-9 text-left">
                  {productInfo.charcs?.formatt}
                </td>
              </tr>
              <tr className="text-sm border-t">
                <th className="py-1.5 px-3.5 max-w-[160px] bg-gray-400/10 col-span-3 font-normal text-left">
                  Бичигдсэн хэл
                </th>
                <td className="py-1.5 px-3.5 flex border-2 items-center align-middle col-span-9 text-left">
                  {productInfo.charcs?.productLang}
                </td>
              </tr>
              <tr className="text-sm border-t">
                <th className="py-1.5 px-3.5 max-w-[160px] bg-gray-400/10 col-span-3 font-normal text-left">
                  Хэмжээ
                </th>
                <td className="py-1.5 px-3.5 flex border-2 items-center align-middle col-span-9 text-left">
                  {productInfo.charcs?.sizeProduct}
                </td>
              </tr>
            </tbody>
            <div>{parse(`${productInfo.extraContent}`)}</div>
          </div>
        )}
      </div>
    </>
  );
}
