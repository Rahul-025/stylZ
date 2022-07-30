import { useDispatch } from "react-redux";

// Styles;
import {
  AddToCart,
  ProductCardContainer,
  ProductDescription,
  ProductImage,
  Text,
} from "./ProductCard.style";

import { SuccessToastEmmitter } from "../../utilities/toaster/toast.util";

// redux
import { addItemToCart } from "../../store/cart/cart.slice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    SuccessToastEmmitter("addItemToCart", product.subtitle);
  };

  return (
    <>
      <ProductCardContainer>
        <ProductImage src={product.imageSrc} />
        <ProductDescription>
          <Text>{product.title}</Text>
          <Text> &#8377; {product.price}</Text>
        </ProductDescription>
        <AddToCart onClick={handleAddToCart}>+CART</AddToCart>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
