import { createContext, useContext, useState } from "react";

const ShoppingCardContext = createContext({});

export function useShoppingCard() {
  return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function getItemQtity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  );
}
