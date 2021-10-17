import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) =>
{
    const contextValue = useFirebase();
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;