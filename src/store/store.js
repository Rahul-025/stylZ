import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import productsReducer from "../store/products/products.slice";
import userReducer from "../store/user/user.slice";
import cartReducer from "../store/cart/cart.slice";

const persistCongfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistCongfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
