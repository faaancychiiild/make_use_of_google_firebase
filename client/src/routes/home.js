import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Context } from '../context';
import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    
    let currentUser = useContext(Context);
    const handleOut = () => {
        const auth = getAuth();
        signOut(auth).catch((err) => {
            console.error(err);
        });
    }
    return (
            <React.Fragment>
                <section className='account-menu'>
                    <span className='menu-item'>{currentUser.email}</span>
                    <Button variant='outlined' type="submit" onClick={handleOut}><FontAwesomeIcon icon={faSignOutAlt} size='lg'/></Button>
                </section>
            </React.Fragment>
    )
}
export default Home;