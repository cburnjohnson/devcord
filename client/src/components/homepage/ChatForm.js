import React from 'react';

const ChatForm = ({ sendMessage }) => {
    return (
        <form
            id='chat-form'
            onSubmit={e => {
                const body = document.getElementById('messageText').value;
                sendMessage(e, body);
                document.getElementById('messageText').value = '';
                document.getElementById('messageText').focus();
            }}
        >
            <input
                type='text'
                name='messageText'
                id='messageText'
                placeholder='Enter message...'
            />
            <button type='submit'>Send</button>
        </form>
    );
};

export default ChatForm;
