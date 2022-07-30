import { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Images and Logos
import { RiShoppingCartFill } from "react-icons/ri";
import MyLogo from "../../assets/images/stylz-logo.png";

// Styles
import {
  NavbarContainer,
  NavbarLinksContainer,
  LinkText,
  Logo,
  CartIconContainer,
  CartCount,
} from "./Navbar.styles";

import { Span } from "../../commonStyles";

// Utils
import { signOutUser } from "../../utilities/firebase/firebase.util";
import { useClickOutside } from "../../utilities/useClickOutside";

// Contexts
import CartDropdown from "../cart-dropdown/CartDropdown.component";

// redux
import { selectCurrentUser } from "../../store/user/user.selectors";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selectors";
import { setIsCartOpen } from "../../store/cart/cart.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartDropdownRef = useRef(null);

  // selectors
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  useClickOutside(cartDropdownRef, () => dispatch(setIsCartOpen(false)));

  const handleSignOut = () => {
    signOutUser();
    navigate("/auth");
  };

  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div>
      <NavbarContainer>
        <NavbarLinksContainer>
          <LinkText to="/">
            <Logo src={MyLogo} />
          </LinkText>
        </NavbarLinksContainer>

        <NavbarLinksContainer>
          <LinkText to="/shop">SHOP</LinkText>
          {currentUser ? (
            <LinkText as={"span"} onClick={handleSignOut}>
              SIGN OUT
            </LinkText>
          ) : (
            <LinkText to="/auth">SIGN IN</LinkText>
          )}
          <div ref={cartDropdownRef}>
            {currentUser && (
              <CartIconContainer onClick={toggleCartOpen}>
                <RiShoppingCartFill
                  size={30}
                  color={"#005A64"}
                  style={{ cursor: "pointer" }}
                />
                <CartCount>{cartCount}</CartCount>
              </CartIconContainer>
            )}
            {isCartOpen && <CartDropdown />}
          </div>
        </NavbarLinksContainer>
      </NavbarContainer>
      <Outlet />
    </div>
  );
};

export default Navbar;
