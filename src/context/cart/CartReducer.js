import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  LOAD_CART_ITEM,
} from "../Types";
const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      // console.log("some", action.payload.item._id);
      // const one =state.cartItems.find((one) => one.item._id === action.payload.item._id)
      //  if(one){
      //    return{
      //     ...state
      //     carti
      //    }
      //  }
      // alert("some");
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, action.payload],
      // };

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case LOAD_CART_ITEM: {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
