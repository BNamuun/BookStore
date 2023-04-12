import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../context/cart/CartContext";
import { CartItem } from "./CartItem";
import Stack from "react-bootstrap/Stack";
export function ShoppingCard() {
  const { showHideCart, cartItems, showCart } = useContext(CartContext);
  const [show, setShow] = useState(showCart);

  const [visible, setVisible] = useState(false);
  console.log("showCanvas", showCart);
  console.log({ cartItems });
  return (
    <>
      <Offcanvas show={showCart} onHide={showHideCart} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Сагс </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={2}>
            {cartItems.map((data) => (
              <CartItem data={data} quantity={data.qtity} />
            ))}
          </Stack>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
