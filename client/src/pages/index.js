import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ChatList from '../components/homepage/ChatList';
import ChatSection from '../components/homepage/ChatSection';
import ChatForm from '../components/homepage/ChatForm';

const IndexPage = () => {
    const [endpoint, setEndpoint] = useState('http://localhost:5000');

    const socket = io(endpoint);

    useEffect(() => {
        socket.on('connection', data => console.log('connected'));
        socket.emit('connection');
    });

    return (
        <Layout>
            <SEO title='Home' />
            <div id='chat-container'>
                <ChatList />
                <ChatSection />
                <ChatForm />
            </div>
        </Layout>
    );
};

export default IndexPage;
