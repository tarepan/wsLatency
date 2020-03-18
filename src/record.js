module.exports.s2c = (count, now) => `message #${count} ${now}`;
module.exports.c2s = (msg, now) => `${msg} ${now}`;
module.exports.extractServerMessage = msg =>
  BigInt(/message #\d+ (\d+)/.exec(msg)[1]);
module.exports.extractClientMessage = msg => {
  const result = /message #\d+ (\d+) (\d+)/.exec(msg);
  return [BigInt(result[1]), BigInt(result[2])];
};
