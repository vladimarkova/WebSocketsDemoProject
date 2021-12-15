const PORT = process.env.PORT || 3000;
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.Server(app);

// const io = socketio(server, {
//     allowRequest: (req, callback) => {
//       callback(null, false);
//     }
// });

const io = socketio(server);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

io.on('connection', socket => {
    console.log('Connection ' + socket.id);

    socket.emit('hello', {
        text: 'Greet you!'
    })

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
})

server.listen(PORT, () => console.log(`Server is listeninig on PORT ${PORT}...`));
