/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } =
    useAuth0();
  const [myUser, setMyUser] = useState("");
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated,myUser]);
  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        isAuthenticated,
        myUser,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
