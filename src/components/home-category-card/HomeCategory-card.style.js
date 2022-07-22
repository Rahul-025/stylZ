import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseImage } from "../../commonStyles";

export const CategoryCardContainer = styled.div`
  position: relative;
`;

export const CategoryCardimage = styled(BaseImage)`
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const CategoryTextContainer = styled(Link)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: var(--body-yellow);
  opacity: 0.7;
  width: 40%;
  padding: 2rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s;

  &:hover,
  &:active {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    width: 60%;
    gap: 1rem;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 1.6rem;
  color: #000;

  @media (max-width: 1100px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const CategorySubtitle = styled.span`
  font-size: 1.2rem;
  color: #0e0e0e;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;
