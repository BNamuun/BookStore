import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import Stack from "react-bootstrap/Stack";
import { formatCurrency } from "./formatCurrency";
import { RiDeleteBin6Line } from "react-icons/ri";
export function CartItem({ data }) {
  console.log("dta", data);
  // const [increaseAmount, setIncreaseAmount] = useState(Number(data.quantity));
  // const [decreaseAmount, setDecreaseAmount] = useState(Number(data.quantity));
  const { handleUpdateQuantity, handledeleteItem } = useContext(CartContext);

  if (!data) return null;
  function increasetQtity() {
    if (data.quantity >= 1) {
      const newQuantity = data.quantity + 1;
      // setIncreaseAmount(newQuantity);
      handleUpdateQuantity(data.id, newQuantity);
    }
  }
  function decreasetQtity() {
    if (data.quantity > 1) {
      const newQuantity = data.quantity - 1;
      // setDecreaseAmount(newQuantity);
      handleUpdateQuantity(data.id, newQuantity);
    }
  }

  return (
    <Stack
      direction="horizontal"
      gap={5}
      className="max-w-screen-xl border-b-2 border-dashed border-gray-30 flex items-center "
    >
      <div>
        <img
          src={data.image}
          alt="some "
          style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
        {data.title && <h4>{data.title}</h4>}
        <div className="text-muted text-base">₮ {data.price}</div>
      </div>
      <div className="ms-auto font-semibold">
        {formatCurrency(data.price * data.quantity)}
      </div>

      <div className="border divide-x-4 divide-slate-400/25 text-lg flex justify-content-center items-center">
        <button onClick={decreasetQtity} className="px-2 font-bold">
          -
        </button>
        {/* <div className="vr"></div> */}
        <span className="px-2">{data.quantity}</span>
        {/* <div className="vr"></div> */}
        <button onClick={increasetQtity} className="px-2 font-bold">
          +
        </button>
      </div>

      <div className="text-red-700">
        <RiDeleteBin6Line onClick={() => handledeleteItem(data.id)} />
      </div>
    </Stack>
  );
}
