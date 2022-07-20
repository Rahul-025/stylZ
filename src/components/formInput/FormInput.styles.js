import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  color: var(--text-primary-blue);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 30rem;
  color: var(--text-primary-blue);
  // background: rgba(248, 204, 54, 0.6);
  background: var(--body-yellow);

  border: none;
  outline: none;
  padding: 1rem 1rem;
  border-radius: 5px;
`;
