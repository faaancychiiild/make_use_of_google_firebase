import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Context } from '../context';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';

let socket;

const Home = () => {
    let currentUser = useContext(Context);
    let [userName, setUserName] = useState('');
    let [message, setMessage] = useState('');
    let [chat, setChat] = useState([]);

    useEffect(() => {
        if(currentUser.displayName){
            setUserName(currentUser.displayName.split(" ")[0]);
        }
        return () => {
            socket.off();
        }
    }, [chat, currentUser]);
    
    socket = io('localhost:3001');
    socket.on('message', async (message) => {
        await setChat(chat.concat(message));
        console.log(message);
    });
    
    const handleOut = () => {
        const auth = getAuth();
        signOut(auth).catch((err) => {
            console.error(err);
        });
        socket.off();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await socket.emit('join', 'room1');
        setMessage(e.target.elements.message.value);
        await socket.emit('messaged', message);
        setMessage('');
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <main className="main">
            <section className='account-menu'>
                <div className='menu-wrapper'>
                    <img alt='profile' src='https://previews.123rf.com/images/fokaspokas/fokaspokas1808/fokaspokas180802579/111794995-profile-person-in-circle-orange-neon-style-on-black-background-light-icon.jpg' className='thumbnail'/>
                    <span className='menu-item'>{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
                </div>
                <Button type="submit" onClick={handleOut}>Log out</Button>
            </section>
            <form className="chat" onSubmit={handleSubmit}>
                <div className="chat-header"></div>
                <section className="chat-body">
                    <div>{chat.map((val, i) => <p className="single-message" key={i}>{val}</p>)}</div>
                    <nav className="send-message">
                        <input className="input-message" value={message} onChange={handleChange} name="message" type="text">
                        </input>
                        <button className="vector-send" type="submit"><img className="vector-send" src="https://www.seekpng.com/png/detail/856-8564833_download-message-send-icon-png.png"/></button>
                    </nav>
                </section>
            </form>
        </main>
    )
}
export default Home;
