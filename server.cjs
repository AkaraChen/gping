const ping = require("ping")
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
    setInterval(async () => {
        let res = await ping.promise.probe("baidu.com");
        ws.send(JSON.stringify(res));
    }, 1000)
});