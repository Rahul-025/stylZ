import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import PulseLoader from "react-spinners/PulseLoader";

// Utils
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  SignInAuthUserFromEmailAndPassword,
} from "../../utilities/firebase/firebase.util";

import { ErrorToastEmitter } from "../../utilities/toaster/toast.util";

// Images
import MyGoogleLogo from "../../assets/images/GoogleLogo.png";
import Shopping from "../../assets/images/shopping-illustration.png";

//Components
import FormInput from "../formInput/FormInput.component";

// Contexts
import { UtilityContext } from "../../contexts/utilities.context";

//Styles
import { HeadingH2, ButtonDarkBlue, Div } from "../../commonStyles";
import {
  SignInFormContainer,
  IllustrationContainer,
  Illustration,
  Form,
  Span,
  ButtonContainer,
  GoogleLogo,
  GoogleButton,
  SignInContainer,
} from "./SignIn.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = ({ setModel }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { loading, setLoading } = useContext(UtilityContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
      navigate("/shop");
    } catch (error) {
      ErrorToastEmitter(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email) {
      setLoading(false);
      return ErrorToastEmitter("email-req");
    }

    if (!password) {
      setLoading(false);
      return ErrorToastEmitter("password-req");
    }

    try {
      await SignInAuthUserFromEmailAndPassword(email, password);
      setLoading(false);;
      navigate("/shop");
    } catch (error) {
      setLoading(false);
      console.log(error.code);
      ErrorToastEmitter(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const fields = { ...formFields, [name]: value };
    setFormFields(fields);
  };

  return (
    <SignInContainer>
      <SignInFormContainer>
        <Form onSubmit={handleSubmit}>
          <HeadingH2>Welcome back!</HeadingH2>
          <FormInput
            label="Email"
            inputOptions={{
              type: "email",
              name: "email",
              onChange: handleChange,
              value: email,
              required: true,
            }}
          />
          <FormInput
            label="Password"
            inputOptions={{
              type: "password",
              name: "password",
              onChange: handleChange,
              value: password,
              equired: true,
            }}
          />
        </Form>
        <ButtonContainer style={{ marginTop: "2rem" }}>
          <ButtonDarkBlue type="submit" onClick={handleSubmit}>
            {loading ? (
              <PulseLoader size={10} color={"var(--body-yellow)"} />
            ) : (
              "Sign In"
            )}
          </ButtonDarkBlue>
        </ButtonContainer>
        <Span>OR</Span>
        <ButtonContainer>
          <GoogleLogo src={MyGoogleLogo} />
          <GoogleButton onClick={handleGoogleSignIn}>
            Google Sign In
          </GoogleButton>
        </ButtonContainer>
        <Div>
          New Here? <Span onClick={() => setModel((p) => !p)}>Sign Up</Span>
        </Div>
      </SignInFormContainer>
      <IllustrationContainer>
        <Illustration src={Shopping} />
      </IllustrationContainer>
    </SignInContainer>
  );
};

export default SignIn;
