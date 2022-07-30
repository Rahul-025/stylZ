import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Styles
import { Category } from "./CategoryProducts.style";
import ClipLoader from "react-spinners/ClipLoader";
import { Container, LoaderContainer } from "../../commonStyles";

// Components
import ProductsCollection from "../../components/products-collection/ProductsCollection.component";

// Selectors
import { selectProductsMap } from "../../store/products/products.selectors";

const CategoryProducts = () => {
  const { category } = useParams();
  const productsMap = useSelector(selectProductsMap);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <div>
      {products ? (
        <Container>
          <Category>- {category} -</Category>
          <ProductsCollection products={products} showAllProducts={true} />
        </Container>
      ) : (
        <LoaderContainer>
          <ClipLoader size={50} color={"var(--text-primary-blue)"} />
        </LoaderContainer>
      )}
    </div>
  );
};

export default CategoryProducts;
