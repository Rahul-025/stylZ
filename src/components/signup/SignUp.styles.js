import styled from "styled-components";
import { FormContainer } from "../../commonStyles";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
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
  width: 80rem;
  height: 55rem;
`;

export const XIconContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 32rem;

  background: var(--navbar-color);
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
  gap: 5rem;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 30rem;
`;

export const Span = styled.span`
  font-size: 1.6rem;
  color: var(--text-primary-blue);
`;