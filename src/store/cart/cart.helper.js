export const addItem = (cartItems, itemToAdd) => {
  const isItemPresent = cartItems.find(
    (cartItem) => cartItem.subtitle === itemToAdd.subtitle
  );

  // if item is already present
  if (isItemPresent) {
    // console.log(itemToAdd.subtitle + " is Present");
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

export const removeItem = (cartItems, itemToRemove) => {
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

export const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.subtitle !== itemToClear.subtitle);
};
