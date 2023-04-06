import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export function Order() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const productOrder = searchParams.get("order");
  const [productInfo, setProductInfo] = useState({});
  function getProductsDetail() {
    if (productOrder) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products/${productOrder}`)
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
  }, [productOrder]);

  console.log({ productInfo });
  return <></>;
}
