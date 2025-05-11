import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ isAdmin: false });

  const toggleAdmin = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isAdmin: !prevUser.isAdmin,
    }));
  };

  return (
    <UserContext.Provider value={{ user, toggleAdmin }}>
      {children}
    </UserContext.Provider>
  );
}
