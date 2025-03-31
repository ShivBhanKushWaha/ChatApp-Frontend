import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

// Create AuthContext with default values to avoid undefined errors in consumers
export const AuthContext = createContext();

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const initialUserState =
    localStorage.getItem("messanger") // &&  Cookies.get("token")
console.log(Cookies.get("token")); // Verify the token value here

  let parsedUserData;
  try {
    parsedUserData = initialUserState ? JSON.parse(initialUserState) : undefined;
  } catch (error) {
    console.error("Failed to parse user data:", error);
    parsedUserData = undefined;
  }

  const [authUserData, setAuthUserData] = useState(parsedUserData);


  return (
    <AuthContext.Provider value={{ authUserData, setAuthUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)