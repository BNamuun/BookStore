import { CarouselNav } from "./CarouselNav";
import axios from "axios";
import { useEffect, useState } from "react";
import clouds from "../images/v1015-111a.jpg";
import kid from "../images/kid-1.png";
import "../css/productCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faRocket } from "@fortawesome/free-solid-svg-icons";
export function Info() {
  const [productList, setList] = useState([]);

  function loadProuducts() {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProuducts();
  }, []);

  return (
    // style={{ backgroundColor: "#B4E4FF" }}
    <div className="all">
      <div className="containerNav">
        {/* <img src={clouds} alt="cloud" className="bg-style" /> */}
        {/* <img className="" style={{ width: "20%" }} src={kid} alt="kid" /> */}
        <div className="m-auto row text-center pt-4">
          <h2>
            {" "}
            <FontAwesomeIcon icon={faRocket} className="px-3" />
            Usborne Хүүхдийн үлгэрийн номын сан{" "}
            <FontAwesomeIcon icon={faEarthAmericas} />
          </h2>
        </div>
        <div className="productCard d-flex flex-wrap m-auto justify-content-center">
          {/* <span>Hoojfha kldj slkj lddf fa sdfklj dfas lkfj</span> */}
          {productList &&
            productList.map((product) => (
              <div key={product.id} className="wrapperD">
                <div className="imageDiv col-12">
                  {
                    <img
                      className="m-auto d-block p-5 card_img"
                      src={product.image.path}
                      width="100%"
                      alt=""
                      style={{}}
                    />
                  }{" "}
                </div>
                <div className="desc border text-center d-flex flex-column gap-2 py-2">
                  <h4 className="title">{product.title}</h4>
                  <p> {product.content}</p>
                  <div className="d-flex justify-content-between">
                    <h5 className="price">{product.price} ₮</h5>
                    <button className="btn btn-primary px-5">More</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
