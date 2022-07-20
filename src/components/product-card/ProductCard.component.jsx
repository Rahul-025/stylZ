import React, { useContext } from "react";

// Styles;
import {
  AddToCart,
  ProductCardContainer,
  ProductDescription,
  ProductImage,
  Text,
} from "./ProductCard.style";

// Contexts
import { CartContext } from "../../contexts/cart.context";
import { SuccessToastEmmitter } from "../../utilities/toaster/toast.util";

export const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(product);
    SuccessToastEmmitter("addItemToCart", product.subtitle);
  };

  return (
    <ProductCardContainer>
      <ProductImage src={product.imageSrc} />
      <ProductDescription>
        <Text>{product.title}</Text>
        <Text> &#8377; {product.price}</Text>
      </ProductDescription>
      <AddToCart onClick={handleAddToCart}>Add To Cart</AddToCart>
    </ProductCardContainer>
  );
};

export default ProductCard;
