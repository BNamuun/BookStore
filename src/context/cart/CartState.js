import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      dispatch({ type: "LOAD_CART_ITEMS", payload: storedCartItems });
    }
  }, []);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Update local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
