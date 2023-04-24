import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatCurrency } from "./formatCurrency";
export function MakeOrder() {
  const { items } = useContext(CartContext);
  const [increaseAmount, setIncreaseAmount] = useState(Number(items.quantity));
  const [decreaseAmount, setDecreaseAmount] = useState(Number(items.quantity));
  const { handleUpdateQuantity, handledeleteItem } = useContext(CartContext);
  if (!items) return null;
  function increasetQtity() {
    if (increaseAmount >= 1) {
      const newQuantity = increaseAmount + 1;
      setIncreaseAmount(newQuantity);
      handleUpdateQuantity(items.id, newQuantity);
    }
  }
  function decreasetQtity() {
    if (decreaseAmount > 1) {
      const newQuantity = decreaseAmount - 1;
      setDecreaseAmount(newQuantity);
      handleUpdateQuantity(items.id, newQuantity);
    }
  }
  return (
    <div className="max-w-screen-xl px-5 h-screen m-auto py-8">
      {/* <h2> Таны сагс</h2> */}
      <div className="px-5 h-screen grid lg:grid-cols-2">
        <div className="">
          {items.map((item) => (
            <>
              <div className="border-b-2 flex flex-row mb-4 py-4 justify-between items-center gap-x-2">
                <img
                  src={item.image}
                  alt="productImg"
                  style={{
                    width: "145px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-muted text-base">{item.price} ₮</p>
                </div>
                <div className="ms-auto font-semibold">
                  {formatCurrency(item.price * item.quantity)}
                </div>

                <div className="border divide-x-4 divide-slate-400/25 text-lg flex justify-content-center items-center">
                  <button onClick={decreasetQtity} className="px-2 font-bold">
                    -
                  </button>
                  {/* <div className="vr"></div> */}
                  <span className="px-2">{item.quantity}</span>
                  {/* <div className="vr"></div> */}
                  <button onClick={increasetQtity} className="px-2 font-bold">
                    +
                  </button>
                </div>
                <div className="vr h-12 items-center m-auto"></div>
                <div className="text-red-700">
                  <RiDeleteBin6Line onClick={() => handledeleteItem(item.id)} />
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-between items-center">
            <div className=" fw-bold fs-5 justify-end">
              {" "}
              Нийт:{" "}
              {formatCurrency(
                items.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <div>
              <button className="btn btn-primary"> Захиалга хийх</button>
            </div>
          </div>
        </div>
        <div>some</div>
      </div>
    </div>
  );
}
