import React from "react";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatCurrency } from "./formatCurrency";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Account } from "./account";
import axios from "axios";
const numeral = require("numeral");
export function MakeOrder() {
  const { items } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isRequiredFilled, setIsRequiredFilled] = useState(false);

  const { handleUpdateQuantity, handledeleteItem } = useContext(CartContext);
  const initialValues = {
    phoneNumber: "",
    district: "",
    name: "",
    address: "",
    date: "",
    order: items.map((item) => ({
      bookName: item.title,
      quantity: item.quantity,
    })),
    fee: numeral(
      items.reduce((total, cartItem) => {
        const item = items.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      }, 0)
    ).format("0,0 "),
  };

  const [orderDetail, setOrderDetail] = useState(initialValues);
  function handleOrderDetails(e) {
    const value = e.target.value;
    setOrderDetail({
      ...orderDetail,
      [e.target.name]: value,
    });
  }
  if (!items) return null;
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
  const handleSubmitOrder = async () => {
    handleShow();
    orderDetail.date = new Date().toLocaleString();
    axios
      .post(`http://localhost:8000/orderDetails`, orderDetail)
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Захиалга амжилттай хийгдлээ");
        }
      });
    console.log(orderDetail);
    // Handle form submission logic here
  };
  return items.length > 0 ? (
    <div className="max-w-screen-xl px-5 m-auto py-8">
      {/* <h2> Таны сагс</h2> */}
      <div className="grid lg:grid-cols-2 md:grid-col-2 grid-cols-1 gap-x-10 min-h-screen">
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
          </div>
        </div>

        <div className="">
          <h4 className="text-lg font-semibold text-gray-900">
            Хүлээн авах хаяг
          </h4>
          <Form>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Дүүрэг
            </label>
            <select
              name="district"
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-3  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleOrderDetails}
              value={orderDetail.district}
            >
              <option selected>Дүүрэг сонгох</option>
              <option value="Баянгол">Баянгол</option>
              <option value="Баянзүрх">Баянзүрх</option>
              <option value="Сонгинохайрхан">Сонгинохайрхан</option>
              <option value="Cүхбаатар">Сүхбаатар</option>
              <option value="Хан-уул">Хан-Уул</option>
              <option value="Чингэлтэй">Чингэлтэй</option>
              <option value="Налайх">Налайх</option>
            </select>
            <Form.Group className="mb-3">
              <Form.Label>Хүргэлтийн хаяг </Form.Label>
              <Form.Control
                name="address"
                value={orderDetail.address}
                onChange={handleOrderDetails}
                type="text"
                placeholder="Жич: Их монгол хороолол, 5-р байр, 2-р орц"
              />
            </Form.Group>
            <div className="grid gap-x-2 mb-3 md:grid-cols-2 grid-col-1">
              <Form.Group className="mb-3">
                <Form.Label>Хүлээн авагчийн нэр: </Form.Label>
                <Form.Control
                  name="name"
                  value={orderDetail.name}
                  onChange={handleOrderDetails}
                  type="text"
                  placeholder="Хүлээн авагчийн нэр"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Утасны дугаар: </Form.Label>
                <Form.Control
                  name="phoneNumber"
                  value={orderDetail.phoneNumber}
                  onChange={handleOrderDetails}
                  type="tel"
                  placeholder="Утасны дугаар"
                  required
                />
              </Form.Group>
            </div>

            <Button
              variant="primary"
              className="w-60"
              onClick={handleSubmitOrder}
            >
              Continue
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title> Захиалга </Modal.Title>
              </Modal.Header>
              <Modal.Body className="w-full">
                <Account />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    </div>
  ) : (
    <h5> Таны сагс хоосон байна</h5>
  );
}
