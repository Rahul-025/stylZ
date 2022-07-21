import { ProductsContainer } from "./ProductsCollection.style";
import ProductCard from "../product-card/ProductCard.component";

const ProductsCollection = ({ products, showAllProducts }) => {
  const end = showAllProducts ? products.length : 4;
  return (
    <ProductsContainer>
      {products.slice(0, end).map((product) => {
        return <ProductCard key={product.subtitle} product={product} />;
      })}
    </ProductsContainer>
  );
};

export default ProductsCollection;
