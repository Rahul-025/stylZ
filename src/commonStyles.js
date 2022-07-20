import styled from "styled-components";

export const Container = styled.div`
margin: 9rem 3rem 9rem 3rem;
font-size: 3.2rem;
`

export const HeadingH2 = styled.h2`
  color: var(--text-primary-blue);
  text-align: center;
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  font-size: 1.6rem;
  color: var(--text-primary-blue);

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  color: var(--text-primary-blue);
  font-size: 1.4rem;
  font-weight: 600;
  cursor: Pointer;
`;

export const FlexDiv = styled.div`
  display: flex;
  gap: 5rem;
`;

export const FlexDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: 1rem 1rem;

  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 600;
  transition: 0.4s all;
`;

export const ButtonDarkBlue = styled(Button)`
  background: var(--text-primary-blue);
  color: #fff;

  &:hover {
    background: var(--google-btn-background);
    color: var(--text-primary-blue);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const FormContainer = styled.div`
  background-color: rgba(248, 204, 54, 0.9);
  padding: 2rem 1rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: opacity 0.4s;
`;
