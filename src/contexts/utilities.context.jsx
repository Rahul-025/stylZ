import { createContext, useState } from "react";

export const UtilityContext = createContext({
  loading: false,
  setLoading: () => {},
  error: "",
  setError: () => {},
});

export const UtiltyProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const value = { loading, setLoading, error, setError };
  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};
