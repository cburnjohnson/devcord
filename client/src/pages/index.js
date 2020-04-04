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
                <h2>Chatroom</h2>
                <h3>JavaScript</h3>
                <h2>Users in Room</h2>
                <ul>
                    <li>cole</li>
                    <li>bob</li>
                    <li>kam</li>
                    <li>kurt</li>
                    <li>ricky</li>
                </ul>
            </div>
            <div id='chat-section'>
                <div className='message'>
                    <p className='message-details'>Sent by User at 10:35 PM</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
                <div className='message'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
                <div className='message'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
                <div className='message'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
                <div className='message'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
                <div className='message'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita dicta soluta vero atque sint et itaque tempore?
                        Laboriosam asperiores iure, explicabo perspiciatis quasi
                        quaerat aspernatur. Aliquid numquam neque consequuntur
                        nihil exercitationem sed dicta esse quaerat odio
                        possimus blanditiis cupiditate rerum voluptates harum,
                        sequi culpa. Assumenda voluptatibus perspiciatis labore
                        possimus soluta?
                    </p>
                </div>
            </div>
            <form id='chat-form'>
                <input
                    type='text'
                    name='messageText'
                    id='messageText'
                    placeholder='Enter message...'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </Layout>
);

export default IndexPage;
