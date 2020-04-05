import React from 'react';

const ChatForm = () => {
    return (
        <form id='chat-form'>
            <input
                type='text'
                name='messageText'
                id='messageText'
                placeholder='Enter message...'
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ChatForm;
