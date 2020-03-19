const WebSocket = require("ws");

const s2c = require("./record").s2c;
const extractClientMessage = require("./record").extractClientMessage;

let count = 0;

const wss = new WebSocket.Server({
  port: 8080
});
wss.on("connection", function connection(ws) {
  setInterval(() => {
    const now = process.hrtime.bigint();
    ws.send(s2c(count, now));
    count++;
  }, 1000);
  ws.on("message", data => {
    const now = process.hrtime.bigint();
    const [serverTime, clientTime] = extractClientMessage(data);
    const biLatency = now - serverTime;
    const biLatencyMsecStg = (parseFloat(biLatency) / 1000 / 1000).toFixed(3);
    console.log(`${data}, RTT: ${biLatencyMsecStg} [msec] v2`);
  });
});
