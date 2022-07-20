import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  width: 35rem;
  height: 45rem;
  background-color: var(--google-btn-background);
  outline: 1px solid var(--text-primary-blue);
  overflow: scroll;
  border-radius: 2px;

  position: absolute;
  right: 2rem;
  bottom: -46rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  gap: 2rem;

  color: var(--text-primary-blue);
  font-size: 2rem;
`;

export const CheckOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: 1rem 2rem;

  width: 90%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 600;
  transition: 0.4s all;

  background: var(--text-primary-blue);
  color: #fff;

  &:hover {
    background: var(--body-yellow);
    color: var(--text-primary-blue);
  }

  &:active {
    transform: translateY(2px);
  }
`;
