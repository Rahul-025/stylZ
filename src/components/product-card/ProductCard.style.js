import styled from "styled-components";
import { BaseImage } from "../../commonStyles";

export const AddToCart = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 5rem;
  padding: 2rem 2rem;
  background-color: var(--navbar-color);
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  color: var(--text-primary-blue);
  margin-bottom: 1rem;

  opacity: 0;
  transition: all 0.4s;
  cursor: pointer;

  @media (max-width: 1200px) {
    height: 3rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    height: 2rem;
  }

  @media (max-width: 800px) {
    top: 70%;
  }
`;

export const ProductCardContainer = styled.div`
  position: relative;
  outline: 1px solid var(--text-primary-blue);
  color: var(--text-primary-blue);

  &:hover,
  &:active {
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

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;
