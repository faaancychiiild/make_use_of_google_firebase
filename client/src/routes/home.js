import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Context } from '../context';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';

let socket;

const Home = () => {
    let currentUser = useContext(Context);
    
    let [userName, setUserName] = useState(currentUser.displayName.split(" ")[0]);
    let [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        socket = io('localhost:3001');
        socket.emit('message', {name: "name"});

        return () => {
            socket.off();
        }
    }, [socket]);
    
    const handleOut = () => {
        const auth = getAuth();
        signOut(auth).catch((err) => {
            console.error(err);
        });
    }
    return (
        <>
            <section className='account-menu'>
                <div className='menu-wrapper'>
                    <img alt='profile' src='https://previews.123rf.com/images/fokaspokas/fokaspokas1808/fokaspokas180802579/111794995-profile-person-in-circle-orange-neon-style-on-black-background-light-icon.jpg' className='thumbnail'/>
                    <span className='menu-item'>{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
                </div>
                <Button type="submit" onClick={handleOut}>Log out</Button>
            </section>
        </>
    )
}
export default Home;
