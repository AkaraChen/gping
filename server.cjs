const ping = require("ping")
const { WebSocketServer } = require('ws');

const args = process.argv.slice(2)[0]
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
    setInterval(async () => {
        let res = await ping.promise.probe(args);
        ws.send(JSON.stringify(res));
    }, 1000)
});