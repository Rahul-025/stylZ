import styled from "styled-components";
import {FormContainer} from '../../commonStyles'

export const SignInContainer = styled.div`
  margin-top: 9rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  place-items: center;
`;

export const SignInFormContainer = styled(FormContainer)`
width: 50rem;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

export const GoogleLogo = styled.img`
  position: absolute;
  top: -3rem;
  left: 1rem;
  width: 50px;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: 1rem 1rem;
  background: var(--google-btn-background);
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  color: var(--text-primary-blue);
  font-size: 1.4rem;
  font-weight: 600;
  transition: 0.4s all;

  &:hover {
    background: var(--text-primary-blue);
    color: var(--google-btn-background);
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  color: var(--text-primary-blue);
`;

export const IllustrationContainer = styled.div``;

export const Illustration = styled.img`
  width: 500px;
`;
