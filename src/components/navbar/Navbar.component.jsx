import { useContext, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useClickOutside } from "../../utilities/useClickOutside";

// Images and Logos
import { BsBag } from "react-icons/bs";
import MyLogo from "../../assets/images/logo.png";

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

// Contexts
import { UserContext } from "../../contexts/user.context";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const cartDropdownRef = useRef(null);

  useClickOutside(cartDropdownRef, () => setIsCartOpen(false));

  const handleSignOut = () => {
    signOutUser();
    navigate("/auth");
  };

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <NavbarContainer>
        <NavbarLinksContainer>
          <Logo src={MyLogo} />
          <LinkText to="/">STYLZ</LinkText>
        </NavbarLinksContainer>

        <NavbarLinksContainer>
          <LinkText to="/shop">SHOP</LinkText>
          {user ? (
            <Span onClick={handleSignOut}>SIGN OUT</Span>
          ) : (
            <LinkText to="/auth">SIGN IN</LinkText>
          )}
          <div ref={cartDropdownRef}>
            <CartIconContainer onClick={toggleCartOpen} ref={cartDropdownRef}>
              <BsBag
                size={35}
                color={"#005A64"}
                style={{ cursor: "pointer" }}
              />
              <CartCount>{cartCount}</CartCount>
            </CartIconContainer>
            {isCartOpen && <CartDropdown />}
          </div>
        </NavbarLinksContainer>
      </NavbarContainer>
      <Outlet />
    </div>
  );
};

export default Navbar;
