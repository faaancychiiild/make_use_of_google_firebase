import React from 'react';
import  app from '../firebase';

const Home = () => {
    return (
        <React.Fragment>
            <h1>Hello there</h1>
            <button onClick={() => {app.auth.signOut()}}>Sign out</button>
        </React.Fragment>
    )
}
export default Home;