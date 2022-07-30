import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  margin: 12rem auto 8rem auto;
  width: 80vw;

  @media (max-width: 750px) {
    width: 90vw;
  }
`;

export const CheckoutContainer = styled.div`
  margin: 10rem auto;
  min-height: 50px;
  background: var(--google-btn-background);
`;

export const Headers = styled.div`
  width: 100%;
  background: var(--text-primary-blue);
  padding: 1rem 5rem;

  display: flex;
  justify-content: space-between;

  text-transform: uppercase;
  color: #fff;
`;

export const CheckoutItems = styled.div`
  padding: 5rem 5rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 570px) {
    padding: 5rem 2rem;
  }
`;

export const HrLine = styled.div`
  margin-top: 4rem;
  width: 100%;
  border-bottom: 4px solid var(--text-primary-blue);
  border-radius: 80%;
`;

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary-blue);

  @media (max-width: 1050px) {
    svg {
      size: 20px;
    }
  }
`;

export const Image = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-right: 2rem;

  img {
    width: 10rem;
    outline: 1px solid var(--text-primary-blue);
  }

  @media (max-width: 1300px) {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1050px) {
    width: 60%;
  }

  @media (max-width: 750px) {
    width: 80%;

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 570px) {
    width: 100%;
    gap: 3rem;

    img {
      width: 12rem;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-right: 2rem;
  user-select: none;

  @media (max-width: 1050px) {
    svg {
      size: 20px;
    }
  }
`;

export const Text = styled.h2`
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--text-primary-blue);
  text-transform: uppercase;
  text-align: center;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NoItemsImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 20rem;
  user-select: none;
  color: var(--text-primary-blue);
  text-transform: uppercase;

  img {
    width: 30rem;
  }
`;

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary-blue);
  user-select: none;
`;

export const FlexDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 570px) {
    align-items: center;

    div {
      align-self: flex-start;
    }

    span {
      align-self: flex-start;
    }
  }
`;
