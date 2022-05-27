import React from 'react';
import {loginRequest} from './authentication.service'

export const AuthenticationContext = React.createContext();

export const AuthenticationContextProvider = ({children}) => {

    const onLogin = () => {
        setIsLoading(true)
        
        loginRequest;
    
    }
     
    const [isLoading, setIsLoading] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    return (
       <AuthenticationContext.Provider
       value={{
           user,
           isLoading,
           error,
           onLogin
       }}>
        {children}
       </AuthenticationContext.Provider>
    )
}