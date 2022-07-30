import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem, clearItem } from "./cart.helper";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isCartOpen: false,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cartItems = addItem(state.cartItems, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setCartItems,
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
