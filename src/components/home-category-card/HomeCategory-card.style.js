import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseImage } from "../../commonStyles";

export const CategoryCardContainer = styled.div`
  // width: 32rem;
  // height: 50rem;
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
  opacity: 0.8;
  width: 40%;
  padding: 2rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 1.6rem;
  color: #000;
`;

export const CategorySubtitle = styled.span`
  font-size: 1.2rem;
  color: #0e0e0e;
`;
