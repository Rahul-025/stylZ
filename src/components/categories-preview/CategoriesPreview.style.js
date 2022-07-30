import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesPreviewContainer = styled.div`
  margin: 12rem 3rem 5rem 3rem;
  font-size: 3.2rem;
`;

export const CategoryAndItemsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 10rem;
`;

export const CategoryTitle = styled(Link)`
  color: var(--text-primary-blue);
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 600;
  padding: 0 0 0 1rem;
  text-decoration: none;
  display: inline-block;
`;
