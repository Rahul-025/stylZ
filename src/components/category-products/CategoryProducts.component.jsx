import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Category } from "./CategoryProducts.style";

// Components
import { Container } from "../../commonStyles";
import ProductsCollection from "../../components/products-collection/ProductsCollection.component";

// Contexts
import { ProductsContext } from "../../contexts/products.context";

const CategoryProducts = () => {
  const { category } = useParams();
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <div>
      {products && (
        <Container>
          <Category>- {category} -</Category>
          <ProductsCollection products={products} showAllProducts={true} />
        </Container>
      )}
    </div>
  );
};

export default CategoryProducts;
