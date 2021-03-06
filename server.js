const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer();
const io = require('socket.io')(http);
const formatMessage = require('./utils/messages');
const { userJoin, userLeave, getCurrentUser } = require('./utils/users');

const botName = 'DevCord Bot';

io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username }) => {
        socket.emit(
            'message',
            formatMessage({ username: botName, body: 'Welcome to DevCord!' })
        );

        io.sockets.emit(
            'message',
            formatMessage({
                username: botName,
                body: `${username} has joined the chat`,
            })
        );
    });

    socket.on('message', (msg) => {
        io.sockets.emit('message', formatMessage(msg));
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.sockets.emit(
                'message',
                formatMessage({
                    username: botName,
                    body: `${user.username} has left the chat`,
                })
            );
        }
    });
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
