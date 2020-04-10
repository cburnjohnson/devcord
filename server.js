const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer();
const io = require('socket.io')(http);
const formatMessage = require('./utils/messages');
const { userJoin } = require('./utils/users');

// set static folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    );
}
const botName = 'DevCord Bot';

io.on('connection', (socket) => {
    console.log('connected1');

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        console.log(user);

        socket.join(user.room);

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to DevCord!'));
    });

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    });
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
