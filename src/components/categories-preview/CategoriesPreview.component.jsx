import React, { useContext } from "react";
import { TiArrowRightThick } from "react-icons/ti";

// Components
import ProductsCollection from "../products-collection/ProductsCollection.component";

// Context
import { ProductsContext } from "../../contexts/products.context";

// Styles
import {
  CategoriesPreviewContainer,
  CategoryAndItemsRow,
  CategoryTitle,
} from "./CategoriesPreview.style";

const CategoriesPreview = () => {
  const { productsMap } = useContext(ProductsContext);
  const categoriesArray = Object.keys(productsMap);

  return (
    <CategoriesPreviewContainer>
      {categoriesArray.map((category) => {
        const products = productsMap[category];
        return (
          <CategoryAndItemsRow key={category}>
            <div>
              <CategoryTitle to={`/shop/${category}`}>
                {category} <TiArrowRightThick size={20} />
              </CategoryTitle>
            </div>
            <ProductsCollection products={products} showAllProducts={false} />
          </CategoryAndItemsRow>
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
