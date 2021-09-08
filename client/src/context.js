import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router';

export const Context = React.createContext();
export const Auth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, () => {
        setCurrentUser(auth.currentUser);
        setPending(false);
        history && currentUser && history.push('/home');
      });
    }, [currentUser, history]);
  
    if(pending){
      return <>Loading...</>
    }
    return (
        <Context.Provider value={currentUser}>
            {children}
        </Context.Provider>
    )
}