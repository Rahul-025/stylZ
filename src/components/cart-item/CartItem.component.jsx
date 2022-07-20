import {
  CartItemContainer,
  CartItemImage,
  CartItemText,
} from "./CartItem.style";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={cartItem.imageSrc} />
      <CartItemText>{cartItem.subtitle}</CartItemText>
      <CartItemText>&#8377;{cartItem.price} x {cartItem.quantity}</CartItemText>
    </CartItemContainer>
  );
};

export default CartItem;
