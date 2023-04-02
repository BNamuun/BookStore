import { CarouselNav } from "./CarouselNav";
import axios from "axios";
import { useEffect, useState } from "react";
import clouds from "../images/v1015-111a.jpg";
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
    <div className="" style={{ backgroundColor: "" }}>
      <div className="section-wrap container">
        {/* <img src={clouds} alt="cloud" className="bg-style" /> */}
        <div className="productCard d-flex flex-wrap gap-3 mt-3">
          <div className="text-center">
            {/* <h1 className="text-center ">Хүүхдийн ном</h1> */}
          </div>
          {/* <span>Hoojfha kldj slkj lddf fa sdfklj dfas lkfj</span> */}
          {productList &&
            productList.map((product) => (
              <div key={product.id} className="wrapperD border">
                <div className="imageDiv col-xl-4 col-sm-6 col-12">
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
                <div className="desc text-center d-flex flex-column gap-2 py-2">
                  <h4>{product.title}</h4>
                  <p> {product.content}</p>
                  <h5> Үнэ: {product.price} ₮</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
