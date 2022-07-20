import { Route, Routes } from "react-router-dom";

// Components
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview.component";
import CategoryProducts from "../../components/category-products/CategoryProducts.component";

// Context

// Styles

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shop;
