import { createSelector } from "@reduxjs/toolkit";

const selectCartSlice = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => {
    return cartSlice.cartItems;
  }
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((count, item) => {
      count += item.quantity;
      return count;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, item) => {
      total += item.quantity * item.price;
      return total;
    }, 0);
  }
);

export const selectIsCartOpen = (state) => state.cart.isCartOpen;
