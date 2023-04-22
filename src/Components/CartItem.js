import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart/CartContext";
import Stack from "react-bootstrap/Stack";
import { formatCurrency } from "./formatCurrency";
import { Button } from "bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
export function CartItem({ data }) {
  console.log("dta", data);
  const [increaseAmount, setIncreaseAmount] = useState(Number(data.quantity));
  const [decreaseAmount, setDecreaseAmount] = useState(Number(data.quantity));
  const { handleUpdateQuantity, handledeleteItem } = useContext(CartContext);

  if (!data) return null;
  function increasetQtity() {
    if (increaseAmount >= 1) {
      const newQuantity = increaseAmount + 1;
      setIncreaseAmount(newQuantity);
      handleUpdateQuantity(data.id, newQuantity);
    }
  }
  function decreasetQtity() {
    if (decreaseAmount > 1) {
      const newQuantity = decreaseAmount - 1;
      setDecreaseAmount(newQuantity);
      handleUpdateQuantity(data.id, newQuantity);
    }
  }

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
        <button onClick={decreasetQtity}>-</button>
        <span>{data.quantity}</span> <button onClick={increasetQtity}>+</button>
      </div>
      <div>
        <RiDeleteBin6Line onClick={() => handledeleteItem(data.id)} />
      </div>
    </Stack>
  );
}
