import { createContext, useState } from "react";

const ShoppingCardContext = createContext({});

export function ShoppingCardContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function getItemQuantity(id) {
    return cartItems.find((item) => (item._id === id)?.quantity);
  }
  function increaseQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => (item._id === id) == null)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
        });
      }
    });
  }
  function decreaseQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => (item._id === id)?.quantity === 1)) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
        });
      }
    });
  }
  function removeCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item._id !== id);
    });
  }
  return (
    <>
      <ShoppingCardContext.Provider
        value={{
          getItemQuantity,
          increaseQuantity,
          decreaseQuantity,
          removeCart,
        }}
      >
        {children}
      </ShoppingCardContext.Provider>
    </>
  );
}
