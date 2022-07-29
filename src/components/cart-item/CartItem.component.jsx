import { useContext } from "react";

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemText,
  Div,
  IconContainer,
} from "./CartItem.style";

// Contexts
import { CartContext } from "../../contexts/cart.context";

// Icons
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CartItemImage src={cartItem.imageSrc} />
      <Div>
        <CartItemText>{cartItem.subtitle}</CartItemText>
        <div>
          <IconContainer>
            <AiFillMinusCircle
              onClick={() => removeItemFromCart(cartItem)}
              style={{ cursor: "pointer" }}
            />
          </IconContainer>
          <IconContainer>
            <AiFillPlusCircle
              onClick={() => addItemToCart(cartItem)}
              style={{ cursor: "pointer" }}
            />
          </IconContainer>
        </div>
      </Div>
      <Div>
        <CartItemText>&#8377;{cartItem.price}</CartItemText>
        <CartItemText>x {cartItem.quantity}</CartItemText>
      </Div>
    </CartItemContainer>
  );
};

export default CartItem;
