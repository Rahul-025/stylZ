import styled from "styled-components";
import {} from "../../";
import { CategoryCardContainer } from "../../components/home-category-card/HomeCategory-card.style";

export const CategoriesContainer = styled.div`
  margin: 12rem 3rem 5rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40rem 40rem 40rem;
  column-gap: 3rem;
  row-gap: 3rem;
  user-select: none;

  ${CategoryCardContainer}:nth-child(1) {
    grid-row: span 2;
  }

  ${CategoryCardContainer}:nth-child(3) {
    grid-row: span 2;
  }

  ${CategoryCardContainer}:nth-child(5) {
    grid-column: span 2;
  }

  @media (max-width: 1000px) {
    grid-template-rows: 30rem 20rem 30rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 30rem 20rem 30rem 30rem;

    ${CategoryCardContainer}:nth-child(1) {
      grid-row: span 2;
    }
    ${CategoryCardContainer}:nth-child(5) {
      grid-column: span 1;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 20rem 20rem 30rem 20rem 20rem 30rem 20rem 20rem 30rem;

    ${CategoryCardContainer}:nth-child(1) {
      grid-row: span 2;
    }

    ${CategoryCardContainer}:nth-child(3) {
      grid-row: span 2;
    }

    ${CategoryCardContainer}:nth-child(5) {
      grid-row: span 2;
    }
  }
`;
