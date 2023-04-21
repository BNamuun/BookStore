import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart/CartContext";
import Stack from "react-bootstrap/Stack";
import { formatCurrency } from "./formatCurrency";
import { Button } from "bootstrap";
export function CartItem({ data }) {
  console.log("dta", data);

  if (!data) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <div>
        <img
          src={data.image}
          alt="some "
          style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
        {data.title && <h4>{data.title}</h4>}
        <div> each price: {data.price}</div>
      </div>
      <div>Total price: {formatCurrency(data.price * data.quantity)}</div>
      <div>
        {" "}
        <button>-</button>
        <span>{data.quantity}</span> <button>+</button>
      </div>
    </Stack>
  );
}
