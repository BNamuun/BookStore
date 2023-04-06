import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
export function Characteristic({ savedata }) {
  const [show, setShow] = useState(false);
  const initialValues = {
    ISBN: "",
    formatt: "",
    productLang: "",
    qtity: "",
    sizeProduct: "",
  };
  const [state, setState] = useState(initialValues);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  // function savedata(state) {
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/products`, {
  //       state,
  //     })
  //     .then((res) => {
  //       const { status } = res;
  //       if (status === 201) {
  //         alert("Success");
  //         setState("");
  //       }
  //     });
  //   handleClose();
  // }
  // console.log({ state });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Үзүүлэлт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="ISBN">ISBN:</label>
          <input
            style={{ width: "100%" }}
            id="ISBN"
            name="ISBN"
            type="text"
            value={state.ISBN}
            onChange={handleChange}
          />

          <label htmlFor="formatt">Формат:</label>
          <input
            style={{ width: "100%" }}
            id="formatt"
            name="formatt"
            type="text"
            value={state.formatt}
            onChange={handleChange}
          />

          <label htmlFor="productLang">Бүтээлийн хэл:</label>
          <input
            style={{ width: "100%" }}
            id="productLang"
            name="productLang"
            type="text"
            value={state.productLang}
            onChange={handleChange}
          />

          <label htmlFor="qtity">Агуулахад байгаа тоо/х:</label>
          <input
            style={{ width: "100%" }}
            id="qtity"
            name="qtity"
            type="text"
            value={state.qtity}
            onChange={handleChange}
          />
          <label htmlFor="sizeProduct">Хэмжээс:</label>
          <input
            style={{ width: "100%" }}
            id="sizeProduct"
            name="sizeProduct"
            type="text"
            value={state.sizeProduct}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              savedata(state);
              handleClose();
              setState("");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
