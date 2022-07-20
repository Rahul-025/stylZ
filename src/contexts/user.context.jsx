import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
} from "../utilities/firebase/firebase.util";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const [user, setUser] = useState(UserContext);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
