import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const NewState = ({ children }) => {
  const [items, setItems] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const CART_TOKEN = "my_cart_token";
  function addToCart(productDetail) {
    const existingItem = items.find((item) => item.id === productDetail.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      const updatedItems = items.map((item) =>
        item.id === existingItem.id ? updatedItem : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, productDetail]);
    }
  }

  useEffect(() => {
    localStorage.setItem(CART_TOKEN, JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(CART_TOKEN));
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <CartContext.Provider value={{ items, addToCart, setshowModal, showModal }}>
      {children}
    </CartContext.Provider>
  );
};
export default NewState;
