import { useContext } from "react";

// Styles
import {
  CartDropdownContainer,
  CartItemsContainer,
  CheckOutButton,
} from "./CartDropdown.style";

// Contexts
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.subtitle} cartItem={cartItem} />
            ))
          : "Cart is Empty"}
      </CartItemsContainer>
      {cartItems.length > 0 && <CheckOutButton>GO TO CHECKOUT</CheckOutButton>}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
