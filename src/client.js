const WebSocket = require("ws");

const c2s = require("./record").c2s;
const extractServerMessage = require("./record").extractServerMessage;

let count = 0;

const onOpen = () => {
  console.log("open, test start");
};
const genOnMessage = ws => data => {
  const now = process.hrtime.bigint();
  const serverTime = extractServerMessage(data);
  const uniLatency = now - serverTime;
  const uniLatencyMsecStg = (parseFloat(uniLatency) / 1000 / 1000).toFixed(3);
  // console.log(`${data}, uniLatency: ${uniLatencyMsecStg} [msec]`);
  ws.send(c2s(data, now));
};
// const ws = new WebSocket("ws://server:8080");
const ws = new WebSocket("ws://server.local:8080");
ws.on("open", onOpen);
ws.on("message", genOnMessage(ws));
ws.on("error", () => {
  console.log("local mode");
  const ws = new WebSocket("ws://localhost:8080");
  ws.on("open", onOpen);
  ws.on("message", genOnMessage(ws));
});
