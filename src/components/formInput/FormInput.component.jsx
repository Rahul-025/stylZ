import React from "react";
import { FormInputContainer, Label, Input } from "./FormInput.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <FormInputContainer>
      <Label>{label}</Label>
      <Input {...inputOptions} />
    </FormInputContainer>
  );
};

export default FormInput;
