import { useDispatch } from "react-redux";

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemText,
  Div,
  IconContainer,
} from "./CartItem.style";

// redux
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart.slice";

// Icons
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <CartItemContainer>
      <CartItemImage src={cartItem.imageSrc} />
      <Div>
        <CartItemText>{cartItem.subtitle}</CartItemText>
        <div>
          <IconContainer>
            <AiFillMinusCircle
              onClick={removeItemHandler}
              style={{ cursor: "pointer" }}
            />
          </IconContainer>
          <IconContainer>
            <AiFillPlusCircle
              onClick={addItemHandler}
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
