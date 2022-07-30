import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../cart-item/CartItem.component";

// Styles
import {
  CartDropdownContainer,
  CartItemsContainer,
  CheckOutButton,
} from "./CartDropdown.style";

// reducers and selectors
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selectors";

import { setIsCartOpen } from "../../store/cart/cart.slice";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleCartDropDownClick = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.subtitle} cartItem={cartItem} />
            ))
          : "Cart is Empty"}
      </CartItemsContainer>
      {cartItems.length > 0 && (
        <CheckOutButton onClick={handleCartDropDownClick}>
          GO TO CHECKOUT
        </CheckOutButton>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
