import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../context/cart/CartContext";
import { CartItem } from "./CartItem";
import Stack from "react-bootstrap/Stack";
export function ShoppingCard() {
  const { showHideCart, cartItems, showCart } = useContext(CartContext);
  console.log("showCanvas", showCart);
  console.log({ cartItems });
  return (
    <>
      <Offcanvas show={showCart} onHide={showHideCart} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Сагс </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="backdrop-blur-lg">
          <Stack gap={2}>
            {cartItems.map((data) => (
              <CartItem data={data} />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
