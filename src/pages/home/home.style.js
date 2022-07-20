import styled from "styled-components";
import {} from "../../";
import { CategoryCardContainer } from "../../components/home-category-card/HomeCategory-card.style";

export const CategoriesContainer = styled.div`
  margin: 10rem 3rem 5rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40rem 40rem 40rem;
  column-gap: 3rem;
  row-gap: 3rem;

  ${CategoryCardContainer}:nth-child(1) {
    grid-row: span 2;
  }

  ${CategoryCardContainer}:nth-child(3) {
    grid-row: span 2;
  }

  ${CategoryCardContainer}:nth-child(5) {
    grid-column: span 2;
  }
`;
