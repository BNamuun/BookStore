import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { ShoppingCard } from "../../Components/ShoppingCart";

const CART_TOKEN = "my_cart_token";
const NewState = ({ children }) => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem(CART_TOKEN);
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => setshowModal(false);
  const handleOpen = () => setshowModal(true);

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

  function handledeleteItem(id) {
    if (window.confirm("Та устгахдаа илгэлтэй байна уу?")) {
      const deletedItem = items.filter((item) => item.id !== id);
      setItems(deletedItem);
    }
  }
  function handleUpdateQuantity(id, selectedQuantity) {
    const matchedItem = items.find((item) => item.id === id);

    if (matchedItem) {
      const changedQuantity = {
        ...matchedItem,
        quantity: selectedQuantity,
      };
      const updatedQuantityItem = items.map((item) =>
        item.id === matchedItem.id ? changedQuantity : item
      );
      setItems(updatedQuantityItem);
    }
  }

  function handleEmptyCart() {
    localStorage.removeItem(CART_TOKEN);
    setItems([]);
    handleClose();
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
    <CartContext.Provider
      value={{
        items,
        addToCart,
        handleClose,
        showModal,
        setshowModal,
        handleOpen,
        handleUpdateQuantity,
        handledeleteItem,
        handleEmptyCart,
      }}
    >
      {children}
      {/* <ShoppingCard showModal={showModal} handleClose={handleClose} /> */}
    </CartContext.Provider>
  );
};
export default NewState;
