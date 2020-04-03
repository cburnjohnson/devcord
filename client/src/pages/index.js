import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <div id='chat-container'>
            <div id='chat-list'>
                <h2>Users in Room</h2>
                <ul>
                    <li>cole</li>
                    <li>bob</li>
                    <li>kam</li>
                    <li>kurt</li>
                    <li>ricky</li>
                </ul>
            </div>
            <div id='chat-section'></div>
            <div id='chat-form'>
                <form>
                    <input
                        type='text'
                        name='message'
                        id='message'
                        placeholder='Enter message...'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
