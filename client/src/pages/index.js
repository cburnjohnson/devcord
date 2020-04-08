import React, { useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ChatList from '../components/homepage/ChatList';
import ChatSection from '../components/homepage/ChatSection';
import ChatForm from '../components/homepage/ChatForm';

const IndexPage = () => {
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
