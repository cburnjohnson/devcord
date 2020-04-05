import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ChatList from '../components/homepage/ChatList';
import ChatSection from '../components/homepage/ChatSection';
import ChatForm from '../components/homepage/ChatForm';

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <div id='chat-container'>
            <ChatList />
            <ChatSection />
            <ChatForm />
        </div>
    </Layout>
);

export default IndexPage;
