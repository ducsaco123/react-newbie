import { createContext, useState } from "react";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};
