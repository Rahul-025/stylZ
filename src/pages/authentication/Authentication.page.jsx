import { useState } from "react";
import SignIn from "../../components/signin/SignIn.component";
import SignUp from "../../components/signup/SignUp.component";

const Authentication = () => {
  const [model, setModel] = useState(false);
  return (
    <div>
      <SignIn setModel={setModel}/>
      {model && <SignUp setModel={setModel}/>}
    </div>
  );
};

export default Authentication;
