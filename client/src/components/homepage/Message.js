import React from 'react';

const Message = ({ message }) => {
    console.log(message);
    return (
        <div className='message'>
            <p className='message-details'>Sent by {message.from}</p>
            <p>{message.body}</p>
        </div>
    );
};

export default Message;
