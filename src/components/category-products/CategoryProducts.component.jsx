import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";
// Components
import { Container, HeadingH2 } from "../../commonStyles";
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
  console.log(category);
  return (
    <div>
      {products && (
        <Container>
          <HeadingH2>{category}</HeadingH2>
          <ProductsCollection products={products} showAllProducts={true} />
        </Container>
      )}
    </div>
  );
};

export default CategoryProducts;
