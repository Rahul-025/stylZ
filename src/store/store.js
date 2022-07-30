import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productsReducer from "../store/products/products.slice";
import userReducer from "../store/user/user.slice";
import cartReducer from "../store/cart/cart.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
