import { createContext, useContext, useState,useEffect } from 'react';
import AuthService from './Auth';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      AuthService.getCurrentUser()
        .then(responseData => {
          setUser(responseData);
        })
    }, []);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => {
    return useContext(UserContext);
  };