import styled from "styled-components";
import { FormContainer } from "../../commonStyles";

export const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(206, 225, 244, 0.8);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20rem;
`;

export const SignUpFormContainer = styled(FormContainer)`
  position: relative;
  width: 80rem;
  height: 60rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    transform: scale(0.9);
    width: 90vw;
  }

  @media (max-width: 800px) {
    transform: scale(0.8);
  }

  @media (max-width: 720px) {
    width: 100vw;
  }
`;

export const XIconContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  background: var(--text-primary-blue);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 950px) {
    transform: scale(0.9);
  }
  
  @media (max-width: 720px) {
    gap: 2rem;
  }

  input {
    @media (max-width: 720px) {
      width: 90vw;
    }
  }

`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 80%;
  text-transform: uppercase;

  @media (max-width: 720px) {
    width: 60%;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  color: var(--text-primary-blue);
`;

export const FlexDivSignUp = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
