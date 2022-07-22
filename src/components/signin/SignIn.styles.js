import styled from "styled-components";
import { FormContainer } from "../../commonStyles";

export const SignInContainer = styled.div`
  margin: 9rem 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  @media (max-width: 1100px) {
    column-gap: 5rem;
    transform: scale(0.9);
  }

  @media (max-width: 1000px) {
    column-gap: 2rem;
    transform: scale(0.8);
  }

  @media (max-width: 850px) {
    transform: scale(0.9);
  }

`;

export const SignInFormContainer = styled(FormContainer)`
  width: 50rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem 0;

  @media(max-width: 850px) {
    width: 90vw;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  input{
    @media (max-width: 850px) {
      width: 50vw;
    }

    @media (max-width: 500px) {
      width: 70vw;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 30rem;

  @media (max-width: 850px) {
    width: 50vw;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
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

export const IllustrationContainer = styled.div`

@media(max-width: 950px){
  transform: scale(0.7);
  }

@media(max-width: 850px){
  display: none;
  }
}`;

export const Illustration = styled.img`
  width: 500px;
`;
