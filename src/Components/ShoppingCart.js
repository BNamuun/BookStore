import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../context/cart/CartContext";
import { CartItem } from "./CartItem";
import Stack from "react-bootstrap/Stack";
export function ShoppingCard({ showModal, handleClose }) {
  const { items, handleEmptyCart } = useContext(CartContext);
  console.log("showCanvas", showModal);
  return (
    <>
      <Offcanvas show={showModal} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Сагс </Offcanvas.Title>
          <button className="btn btn-primary" onClick={handleEmptyCart}>
            {" "}
            Хоослох{" "}
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="backdrop-blur-lg">
          {items.length > 0 ? (
            <Stack gap={2}>
              {items.map((data) => (
                <CartItem data={data} />
              ))}
            </Stack>
          ) : (
            <h6> Таны сагс хоосон байна</h6>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
