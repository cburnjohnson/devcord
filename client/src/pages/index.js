import React, { useEffect, useContext } from 'react';
import io from 'socket.io-client';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ChatList from '../components/homepage/ChatList';
import ChatSection from '../components/homepage/ChatSection';
import ChatForm from '../components/homepage/ChatForm';
import { GlobalContext } from '../context/GlobalState';

const IndexPage = ({ location }) => {
    if (location.state === null) {
        window.location = '/joinroom';
    }
    const { user } = location.state;
    const { username, room } = user;

    const { messages, addMessage } = useContext(GlobalContext);

    const socket = io('http://localhost:5000');
    useEffect(() => {
        socket.emit('joinRoom', { username, room });

        socket.on('message', message => {
            addMessage(message);
        });
    }, []);

    const sendMessage = (e, body) => {
        e.preventDefault();
        let message = {
            body,
            username: user.username
        };
        socket.emit('message', message);
    };

    return (
        <Layout>
            <SEO title='Home' />
            <div id='chat-container'>
                <ChatList room={user.room} />
                <ChatSection messages={messages} />
                <ChatForm sendMessage={sendMessage} />
            </div>
        </Layout>
    );
};

export default IndexPage;
