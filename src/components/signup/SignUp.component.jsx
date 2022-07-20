import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";

// Utility Imports
import {
  createUserDocFromAuth,
  createAuthUserFromEmailAndPassword,
} from "../../utilities/firebase/firebase.util";

import { ErrorToastEmitter } from "../../utilities/toaster/toast.util";

// Images and Icons
import { GiCrossedBones } from "react-icons/gi";

// Contexts
import { UtilityContext } from "../../contexts/utilities.context";

//Components
import FormInput from "../formInput/FormInput.component";

//Styles
import { HeadingH2, ButtonDarkBlue, Div, FlexDiv } from "../../commonStyles";
import {
  Form,
  Span,
  ButtonContainer,
  SignUpFormContainer,
  SignUpContainer,
  XIconContainer,
} from "./SignUp.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  passsword: "",
  confirmPassword: "",
};

const SignUp = ({ setModel }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, displayName, password, confirmPassword } = formFields;
  const { loading, setLoading } = useContext(UtilityContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (password !== confirmPassword) {
      alert("Passwords do not matcch");
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      ErrorToastEmitter(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleExit = () => {
    setModel((p) => !p);
  };

  return (
    <SignUpContainer>
      <SignUpFormContainer>
        <XIconContainer onClick={handleExit}>
          <GiCrossedBones size={20} color="var(--text-primary-blue)" />
        </XIconContainer>
        <Form onSubmit={handleSubmit}>
          <HeadingH2>Sign Up</HeadingH2>
          <FlexDiv>
            <FormInput
              label="Display Name"
              inputOptions={{
                name: "displayName",
                value: displayName,
                onChange: handleChange,
              }}
            />
            <FormInput
              label="Email"
              inputOptions={{
                name: "email",
                value: email,
                onChange: handleChange,
              }}
            />
          </FlexDiv>
          <FlexDiv>
            <FormInput
              label="Password"
              inputOptions={{
                name: "password",
                value: password,
                onChange: handleChange,
              }}
            />
            <FormInput
              label="Confirm Password"
              inputOptions={{
                name: "confirmPassword",
                value: confirmPassword,
                onChange: handleChange,
              }}
            />
          </FlexDiv>
        </Form>
        <ButtonContainer style={{ marginTop: "2rem" }}>
          <ButtonDarkBlue type="submit" onClick={handleSubmit}>
            {loading ? (
              <PulseLoader size={10} color={"var(--body-yellow)"} />
            ) : (
              "Sign Up"
            )}
          </ButtonDarkBlue>
        </ButtonContainer>
        <Div>
          Already registered?
          <Span onClick={handleExit}> Sign In</Span>
        </Div>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
