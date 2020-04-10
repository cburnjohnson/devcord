import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ChatList from '../components/homepage/ChatList';
import ChatSection from '../components/homepage/ChatSection';
import ChatForm from '../components/homepage/ChatForm';

const IndexPage = ({ location }) => {
    if (location.state === null) {
        window.location = '/joinroom';
    }
    const { user } = location.state;
    const [messages, setMessages] = useState([]);

    const socket = io('http://localhost:5000');
    useEffect(() => {
        socket.on('message', message => {
            setMessages([message, ...messages]);
        });
    });

    const sendMessage = (e, body) => {
        e.preventDefault();
        console.log(e);
        let message = {
            body,
            from: user.username
        };
        console.log(message);
        setMessages([message, ...messages]);
        socket.emit('message', message);
    };

    return (
        <Layout>
            <SEO title='Home' />
            <div id='chat-container'>
                <ChatList />
                <ChatSection messages={messages} />
                <ChatForm sendMessage={sendMessage} />
            </div>
        </Layout>
    );
};

export default IndexPage;
