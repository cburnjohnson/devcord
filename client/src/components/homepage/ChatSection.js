import React from 'react';
import Message from './Message';
import { uuid } from 'uuidv4';

const ChatSection = ({ messages }) => {
    return (
        <div id='chat-section'>
            {messages &&
                messages.map(message => (
                    <Message key={uuid()} message={message} />
                ))}
        </div>
    );
};

export default ChatSection;
