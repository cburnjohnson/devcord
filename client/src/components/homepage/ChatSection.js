import React from 'react';
import Message from './Message';

const ChatSection = ({ messages }) => {
    return (
        <div id='chat-section'>
            {messages && messages.map(message => <Message message={message} />)}
        </div>
    );
};

export default ChatSection;
