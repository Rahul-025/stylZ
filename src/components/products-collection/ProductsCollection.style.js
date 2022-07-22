import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 10rem;

  @media(max-width: 730px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 560px){
    grid-template-columns: repeat(2, 1fr);
  }
`;
