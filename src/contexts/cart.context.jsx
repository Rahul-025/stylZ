import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartTotal: 0,
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

// Helpers
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

const removeItem = (cartItems, itemToRemove) => {
  const isItemPresent = cartItems.find(
    (item) => item.subtitle === itemToRemove.subtitle
  );

  if (!isItemPresent) return;
  if (isItemPresent.quantity === 1) return clearItem(cartItems, itemToRemove);

  return cartItems.map((item) => {
    if (item.subtitle === itemToRemove.subtitle) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};

const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.subtitle !== itemToClear.subtitle);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove));
  };

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearItem(cartItems, itemToClear));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((count, item) => {
      count += item.quantity;
      return count;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => {
      total += item.quantity * item.price;
      return total;
    }, 0);
    setCartTotal(newTotal);
  }, [cartItems]);

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
