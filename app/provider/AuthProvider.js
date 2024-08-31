
"use client";

import { useState } from "react";
import { AuthContext } from "../contexts";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const authInfo = {
    auth, 
    setAuth
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
