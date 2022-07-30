import { useSelector } from "react-redux";

// Components
import { TiArrowRightThick } from "react-icons/ti";
import ProductsCollection from "../products-collection/ProductsCollection.component";
import ClipLoader from "react-spinners/ClipLoader";

// Context
import {
  selectProductsMap,
  selectIsProductsLoading,
} from "../../store/products/products.selectors";

// Styles
import {
  CategoriesPreviewContainer,
  CategoryAndItemsRow,
  CategoryTitle,
} from "./CategoriesPreview.style";

import { LoaderContainer } from "../../commonStyles";

const CategoriesPreview = () => {
  const productsMap = useSelector(selectProductsMap);
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const categoriesArray = Object.keys(productsMap);

  return (
    <CategoriesPreviewContainer>
      {isProductsLoading ? (
        <LoaderContainer>
          <ClipLoader size={50} color={"var(--text-primary-blue)"} />
        </LoaderContainer>
      ) : (
        <>
          {categoriesArray.map((category) => {
            const products = productsMap[category];
            return (
              <CategoryAndItemsRow key={category}>
                <div>
                  <CategoryTitle to={`/shop/${category}`}>
                    {category} <TiArrowRightThick size={20} />
                  </CategoryTitle>
                </div>
                <ProductsCollection
                  products={products}
                  showAllProducts={false}
                />
              </CategoryAndItemsRow>
            );
          })}
        </>
      )}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
