import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/signin/SignIn.component";
import SignUp from "../../components/signup/SignUp.component";
import { selectCurrentUser } from "../../store/user/user.selectors";

const Authentication = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  });

  const [model, setModel] = useState(false);
  return (
    <div>
      <SignIn setModel={setModel} />
      {model && <SignUp setModel={setModel} />}
    </div>
  );
};

export default Authentication;
