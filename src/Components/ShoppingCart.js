import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../context/cart/CartContext";
import { CartItem } from "./CartItem";
import Stack from "react-bootstrap/Stack";
import { formatCurrency } from "./formatCurrency";
export function ShoppingCard({ showModal, handleClose }) {
  const { items, handleEmptyCart } = useContext(CartContext);
  console.log("showCanvas", showModal);
  return (
    <>
      <Offcanvas show={showModal} onHide={handleClose} placement="top">
        <Offcanvas.Header
          closeButton
          className="max-w-screen-xl border-b-2 border-gray-30 flex justify-between items-center"
        >
          <Offcanvas.Title>Таны сагс </Offcanvas.Title>
          <Button variant="primary">Caгс руу үсрэх</Button>
          <div className="vr" />
          <button
            className=" border-2 border-grey-600 text-rose-400 p-1"
            onClick={handleEmptyCart}
          >
            {" "}
            Сагс хоослох{" "}
          </button>
        </Offcanvas.Header>
        <div></div>
        <Offcanvas.Body className="backdrop-blur-lg">
          {items.length > 0 ? (
            <Stack gap={3}>
              {items.map((data) => (
                <CartItem data={data} />
              ))}
              <div className="ms-auto fw-bold fs-5">
                {" "}
                Нийт:{" "}
                {formatCurrency(
                  items.reduce((total, cartItem) => {
                    const item = items.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </div>
            </Stack>
          ) : (
            <h6> Таны сагс хоосон байна</h6>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
