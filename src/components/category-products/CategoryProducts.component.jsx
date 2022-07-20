import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import { Container, HeadingH2 } from "../../commonStyles";
import ProductsCollection from "../../components/products-collection/ProductsCollection.component";

// Contexts
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/ProductCard.component";

const CategoryProducts = () => {
  const { category } = useParams();
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  console.log(products);
  return (
    <Container>
      <HeadingH2>{category}</HeadingH2>
      <ProductsCollection products={products} showAllProducts={true} />
    </Container>
  );
};

export default CategoryProducts;
