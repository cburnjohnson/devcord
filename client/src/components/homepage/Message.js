import React from 'react';

const Message = ({ message }) => {
    return (
        <div className='message'>
            <p className='message-details'>
                Sent by {message.username} at {message.time}
            </p>
            <p>{message.body}</p>
        </div>
    );
};

export default Message;
