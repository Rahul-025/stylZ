import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

// Components
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview.component";
import CategoryProducts from "../../components/category-products/CategoryProducts.component";

// Utils
import { getCategoriesAndDocs } from "../../utilities/firebase/firebase.util";

// Reducers and Selectors
import {
  setProducts,
  setIsProductsLoading,
} from "../../store/products/products.slice";

// Styles
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      dispatch(setIsProductsLoading(true));
      const Products = await getCategoriesAndDocs();
      dispatch(setProducts(Products));
      dispatch(setIsProductsLoading(false));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shop;
