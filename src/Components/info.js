import axios from "axios";
import { useEffect, useState } from "react";
import "../css/productCard.css";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
export function Info() {
  const [productList, setList] = useState([]);
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

  // function getDetailOf(id) {
  //   setSearchParams({ order: id });
  // }

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
                to={`/products/${product._id}`}
                // as={Link}
                key={product.id}
                className="wrapperD "
                style={linkStyle}
                // onClick={() => getDetailOf(product._id)}
              >
                <div
                  className="col-12 imageDiv"
                  style={{ backgroundImage: `url(${product.images[0].path})` }}
                >
                  {/* {setImgPath(product.image.path)} */}
                </div>
                <div className="desc d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="title m-0" style={{ color: "#063255" }}>
                      {product.title}
                    </h4>
                    <p className="price m-0">
                      {product.price.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}{" "}
                      ₮
                    </p>
                  </div>
                  {/* <button className="my-3 bg-white hover:bg-sky-100 text-sky-800 font-semibold py-2 px-4 border border-sky-400 rounded shadow-md">
                    Сагслах
                  </button> */}
                  <div style={{ color: "grey" }}>
                    {parse(`${product.content}`)}
                  </div>{" "}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
