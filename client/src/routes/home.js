import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Context } from '../context';
import { useContext } from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
    let currentUser = useContext(Context);
    console.log(currentUser);
    const handleOut = () => {
        const auth = getAuth();
        signOut(auth).catch((err) => {
            console.error(err);
        });
    }
    return (
            <>
                <section className='account-menu'>
                    <span className='menu-item'><img alt='profile' src='https://previews.123rf.com/images/fokaspokas/fokaspokas1808/fokaspokas180802579/111794995-profile-person-in-circle-orange-neon-style-on-black-background-light-icon.jpg' className='tumbnail'/>{currentUser.name}</span>
                    <Button variant='outlined' type="submit" onClick={handleOut}>Log out</Button>
                </section>
            </>
    )
}
export default Home;
