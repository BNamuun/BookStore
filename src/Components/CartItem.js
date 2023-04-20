import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import Stack from "react-bootstrap/Stack";
import { formatCurrency } from "./formatCurrency";
import { Button } from "bootstrap";
export function CartItem({ data }) {
  console.log("dta", data);

  if (!data?.item) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <div>
        <img
          src={data.item.images[0]?.path}
          alt="some "
          style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
        {data.item.title && <h4>{data.item?.title}</h4>}
        <div> each price: {data.item.price}</div>
      </div>
      <div>Total price: {formatCurrency(data.item.price * data.qtity)}</div>
      <div>
        {" "}
        <button>-</button>
        <span>{data.qtity}</span> <button>+</button>
      </div>
    </Stack>
  );
}
