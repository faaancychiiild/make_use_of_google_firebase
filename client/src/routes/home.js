import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';
const Home = () => {
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
            <button onClick={handleOut}>Sign out</button>
        </React.Fragment>
    )
}
export default Home;