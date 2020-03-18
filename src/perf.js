setInterval(() => {
  const now1 = process.hrtime.bigint();
  const now2 = process.hrtime.bigint();
  console.log(`${(parseFloat(now2 - now1) / 1000).toFixed(4)} [usec]`);
}, 500);

// const { performance } = require("perf_hooks");
// setInterval(() => {
//   const startTime = performance.now(); // 開始時間
//   const endTime = performance.now(); // 終了時間
//   console.log(endTime - startTime);
// }, 500);
