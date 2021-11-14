import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

const AuthProvider = ({ children }) => {
    const AuthContext = createContext();
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
