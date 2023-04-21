import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../context/cart/CartContext";
import { CartItem } from "./CartItem";
import Stack from "react-bootstrap/Stack";
export function ShoppingCard() {
  const { handleClose, items, showModal } = useContext(CartContext);
  console.log("showCanvas", showModal);
  return (
    <>
      <Offcanvas show={showModal} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Сагс </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="backdrop-blur-lg">
          <Stack gap={2}>
            {items.map((data) => (
              <CartItem data={data} />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
