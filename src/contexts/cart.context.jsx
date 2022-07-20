import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartrTotal: 0,
  cartCount: 0,
  addItemToCart: () => {},
});

const addItem = (cartItems, itemToAdd) => {
  const isItemPresent = cartItems.find(
    (cartItem) => cartItem.subtitle === itemToAdd.subtitle
  );

  // if item is already present
  if (isItemPresent) {
    return cartItems.map((cartItem) => {
      if (cartItem.subtitle === itemToAdd.subtitle) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  // if item is not present
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addItem(cartItems, itemToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((count, item) => {
      count += item.quantity;
      return count;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
