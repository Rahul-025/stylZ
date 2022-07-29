import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const handleCartDropDownClick = () => {
    setIsCartOpen((s) => !s);
    navigate("/checkout");
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
