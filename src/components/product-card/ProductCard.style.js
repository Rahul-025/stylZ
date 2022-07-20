import styled from "styled-components";
import { BaseImage } from "../../commonStyles";

export const AddToCart = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);

  width: 60%;
  padding: 2rem 2rem;
  background-color: var(--navbar-color);
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  color: var(--text-primary-blue);

  opacity: 0;
  transition: all 0.4s;
  cursor: pointer;
`;

export const ProductCardContainer = styled.div`
  position: relative;
  outline: 1px solid var(--text-primary-blue);
  color: var(--text-primary-blue);

  &:hover {
    ${AddToCart} {
      opacity: 1;
    }
  }
`;

export const ProductImage = styled(BaseImage)`
  &:hover {
    opacity: 0.6;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
`;

export const Text = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;
