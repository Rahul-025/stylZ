import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
export const CartItemImage = styled.img`
  width: 8rem;
  height: 10rem;
  outline: 1px solid var(--text-primary-blue);
`;
export const CartItemText = styled.span`
  font-size: 1.4rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const IconContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s;
  margin-right: 0.5rem;

  &:hover {
    transform: scale(1.2);
  }
`;
