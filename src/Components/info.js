import { CarouselNav } from "./CarouselNav";
import axios from "axios";
import { useEffect, useState } from "react";
import clouds from "../images/v1015-111a.jpg";
import kid from "../images/kid-1.png";
import "../css/productCard.css";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function Info() {
  const [productList, setList] = useState([]);
  const [productImg, setImgPath] = useState([]);
  const parse = require("html-react-parser");
  const linkStyle = {
    textDecoration: "none",
  };
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
        <div className="row text-center m-4">
          <h2 className="m-0">
            {" "}
            <FontAwesomeIcon icon={faEarthAmericas} className="px-3" />
            Usborne Хүүхдийн үлгэрийн номын сан{" "}
            <FontAwesomeIcon icon={faEarthAmericas} />
          </h2>
        </div>
        <div className="productCard d-flex flex-wrap mb-4">
          {/* <span>Hoojfha kldj slkj lddf fa sdfklj dfas lkfj</span> */}
          {productList &&
            productList.map((product) => (
              <Link
                to={"/example"}
                as={Link}
                key={product.id}
                className="wrapperD "
                style={linkStyle}
              >
                <div
                  className="col-12 imageDiv"
                  style={{ backgroundImage: `url(${product.image.path})` }}
                >
                  {/* {setImgPath(product.image.path)} */}
                </div>
                <div className="desc d-flex flex-column">
                  <h4 className="title" style={{ color: "#063255" }}>
                    {product.title}
                  </h4>
                  <div style={{ color: "grey" }}>{parse(product.content)}</div>{" "}
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="price m-0">{product.price} ₮</h5>
                    {/* <h5 className="text-primary">Дэлгэрэнгүй харах</h5> */}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
