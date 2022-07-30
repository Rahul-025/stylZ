import { createSelector } from "@reduxjs/toolkit";

const selectProductsSlice = (state) => {
  return state.products;
};

const selectProductsArray = createSelector(
  [selectProductsSlice],
  (productsSlice) => {
    return productsSlice.productsArray;
  }
);

export const selectProductsMap = createSelector(
  [selectProductsArray],
  (productsArray) =>
    productsArray.reduce((acc, productData) => {
      const { category, items } = productData;
      acc[category.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsProductsLoading = (state) =>
  state.products.isProductsLoading;
