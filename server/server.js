const path = require('path');
const http = require('http');
const express =  require('express');
const socketIO =  require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: "moses@example.com",
        text: "Hello Socket IO",
        createdAt: Date.now()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

//Static express middleware
app.use(express.static(publicPath));

// Start server on Port
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});