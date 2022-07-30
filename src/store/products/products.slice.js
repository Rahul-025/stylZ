import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsArray: [],
    isProductsLoading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.productsArray = action.payload;
    },
    setIsProductsLoading: (state, action) => {
      state.isProductsLoading = action.payload;
    },
  },
});

export const { setProducts, setIsProductsLoading } = productsSlice.actions;
export default productsSlice.reducer;
