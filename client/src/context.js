import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './routes/home';

export const Context = React.createContext();
export const Auth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, () => {
        setCurrentUser(auth.currentUser);
        setPending(false);
      });
    }, [currentUser]);
  
    if(pending){
      return <div id="loader"><div id="loading"></div></div>
    }
    if(currentUser){
      return <Context.Provider value={currentUser}><Home /></Context.Provider>
    }
    return (
        <Context.Provider value={currentUser}>
            {children}
        </Context.Provider>
    )
}