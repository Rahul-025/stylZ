import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";

// styles
import {
  CheckoutPageContainer,
  CheckoutItems,
  CheckoutItem,
  Headers,
  Image,
  QuantityContainer,
  CheckoutContainer,
  NoItemsImageContainer,
  CartTotalContainer,
  HrLine,
  FlexDivColumn,
} from "./Checkout.style";

import { IconContainer } from "../../components/cart-item/CartItem.style";

// Images and Icons
import EmptyCartImage from "../../assets/images/empty-cart-img.png";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

// contexts
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isPortrait = useMediaQuery({ query: "(max-width: 570px)" });

  const { cartItems, addItemToCart, removeItemFromCart, cartTotal } =
    useContext(CartContext);

  return (
    <CheckoutPageContainer>
      {cartItems.length > 0 ? (
        <>
          <CheckoutContainer>
            <Headers>
              <h2>Product</h2>
              {!isPortrait && <h2>Price</h2>}
            </Headers>

            <CheckoutItems>
              {cartItems.map((item) => {
                return (
                  <>
                    <CheckoutItem key={item.subtitle}>
                      <Image>
                        <img src={item.imageSrc} alt={item.subtitle} />
                        <FlexDivColumn>
                          <h3>{item.subtitle}</h3>
                          {isTabletOrMobile && (
                            <QuantityContainer>
                              <IconContainer>
                                <AiFillMinusCircle
                                  size={20}
                                  onClick={() => removeItemFromCart(item)}
                                />
                              </IconContainer>
                              <span>{item.quantity}</span>
                              <IconContainer>
                                <AiFillPlusCircle
                                  size={20}
                                  onClick={() => addItemToCart(item)}
                                />
                              </IconContainer>
                            </QuantityContainer>
                          )}
                          {isPortrait && (
                            <span style={{ fontWeight: "600" }}>
                              &#8377;{item.price}
                            </span>
                          )}
                        </FlexDivColumn>
                      </Image>
                      {!isTabletOrMobile && (
                        <QuantityContainer>
                          <IconContainer>
                            <AiFillMinusCircle
                              size={20}
                              onClick={() => removeItemFromCart(item)}
                            />
                          </IconContainer>
                          <span>{item.quantity}</span>
                          <IconContainer>
                            <AiFillPlusCircle
                              size={20}
                              onClick={() => addItemToCart(item)}
                            />
                          </IconContainer>
                        </QuantityContainer>
                      )}
                      {!isPortrait && <span>&#8377;{item.price}</span>}
                    </CheckoutItem>
                    <HrLine />
                  </>
                );
              })}
              <CartTotalContainer>
                <h3>Grand Total </h3>
                <h3>&#8377; {cartTotal}</h3>
              </CartTotalContainer>
            </CheckoutItems>
          </CheckoutContainer>
          {/* <Text>Go To Checkout &rarr;</Text> */}
        </>
      ) : (
        <NoItemsImageContainer>
          <img src={EmptyCartImage} alt="Empty List" />
          <h2>No Item in Cart</h2>
        </NoItemsImageContainer>
      )}
    </CheckoutPageContainer>
  );
};

export default Checkout;
