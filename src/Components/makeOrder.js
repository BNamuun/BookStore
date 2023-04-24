import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatCurrency } from "./formatCurrency";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const numeral = require("numeral");
export function MakeOrder() {
  const { items } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  // const [increaseAmount, setIncreaseAmount] = useState(Number(items.quantity));
  // const [decreaseAmount, setDecreaseAmount] = useState(Number(items.quantity));
  const { handleUpdateQuantity, handledeleteItem } = useContext(CartContext);
  if (!items) return null;
  console.log(items);
  function increasetQtity(item) {
    if (item.quantity >= 1) {
      const newQuantity = item.quantity + 1;
      // setIncreaseAmount(newQuantity);
      handleUpdateQuantity(item.id, newQuantity);
    }
  }
  function decreasetQtity(item) {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      // setDecreaseAmount(newQuantity);
      handleUpdateQuantity(item.id, newQuantity);
    }
  }
  return (
    <div className="max-w-screen-xl px-5 h-screen m-auto py-8">
      {/* <h2> Таны сагс</h2> */}
      <div className="px-5 h-screen grid lg:grid-cols-2 gap-x-8">
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
                  {numeral(item.price * item.quantity).format("0,0 ")} ₮
                </div>

                <div className="border divide-x-4 divide-slate-400/25 text-lg flex justify-content-center items-center">
                  <button
                    onClick={() => decreasetQtity(item)}
                    className="px-2 font-bold"
                  >
                    -
                  </button>
                  {/* <div className="vr"></div> */}
                  <span className="px-2">{item.quantity}</span>
                  {/* <div className="vr"></div> */}
                  <button
                    onClick={() => increasetQtity(item)}
                    className="px-2 font-bold"
                  >
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
              {numeral(
                items.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              ).format("0,0 ")}{" "}
              ₮
            </div>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => setShowForm(true)}
              >
                {" "}
                Захиалга хийх
              </button>
            </div>
          </div>
        </div>
        <div className="order-form-container">
          <h4 className="text-lg font-semibold text-gray-900">
            Хүлээн авах хаяг
          </h4>
          <Form>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Дүүрэг
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-3  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Дүүрэг сонгох</option>
              <option value="US">УБ-Баянгол</option>
              <option value="CA">УБ-Баянзүрх</option>
              <option value="CA">УБ-Сонгинохайрхан</option>
              <option value="CA">УБ-Сүхбаатар</option>
              <option value="CA">УБ-Хан-Уул</option>
              <option value="CA">УБ-Чингэлтэй</option>
              <option value="FR">Налайх</option>
            </select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Гэрийн хаяг </Form.Label>
              <Form.Control
                type="text"
                placeholder="Жич: Их монгол хороолол, 5-р байр, 2-р орц"
              />
              <Form.Text className="text-muted">
                Таны хаяг нууцлагдах болно.
              </Form.Text>
            </Form.Group>
            <div className="grid gap-x-2 mb-3 grid-cols-2">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Хүлээн авагчийн нэр: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Хүлээн авагчийн нэр"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Утасны дугаар: </Form.Label>
                <Form.Control type="tel" placeholder="Утасны дугаар" required />
              </Form.Group>
            </div>

            <Button variant="primary" type="submit" className="w-60">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
