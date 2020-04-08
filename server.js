const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

// set static folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    );
}

io.on('connection', (socket) => {
    console.log('New connection');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
