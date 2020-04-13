const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer();
const io = require('socket.io')(http);
const formatMessage = require('./utils/messages');
const { userJoin, userLeave, getCurrentUser } = require('./utils/users');

// set static folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    );
}
const botName = 'DevCord Bot';

io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to DevCord!'));

        io.to(user.room).emit(
            'message',
            formatMessage(botName, `${user.username} has joined the chat`)
        );
    });

    socket.on('message', (msg) => {
        const user = getCurrentUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', formatMessage(user.username, msg));
        }
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );
        }
    });
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
