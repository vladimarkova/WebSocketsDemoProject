const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('Client was connected.');

    wss.on('close', () => {
        console.log('Client has diconnected.');
    })
})