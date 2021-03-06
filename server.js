const WebSocket = require('ws');

const PORT = process.env.PORT || 3000

const wss = new WebSocket.Server({ port: PORT });

// listen fro connection from the clients 
wss.on('connection', (ws) => {
    console.log('Client was connected.');

    ws.on('message', (data) => {
        console.log(`New message from client: ${data}.`);
        // console.log(typeof data);
        
        ws.send(data.toString().toUpperCase());
    })


    ws.on('close', () => {
        console.log('Client has diconnected.');
    })
})