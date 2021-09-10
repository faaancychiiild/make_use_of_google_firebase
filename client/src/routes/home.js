import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { Context } from '../context';
import { useContext } from 'react';
const Home = () => {
    let currentUser = useContext(Context);
    let history = useHistory();
    const handleOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            history.push('/');
        }).catch((err) => {
            console.error(err);
        });
    }
    return (
            <React.Fragment>
                {currentUser.email + ', logged in'}
                <button onClick={handleOut}>Sign out</button>
            </React.Fragment>
    )
}
export default Home;