console.log("start"); // 1

setTimeout(() => {
  console.log("timeout");
  process.nextTick(() => {
    console.log("nextTick");
  });
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0); //  1000ms之后加入timer队列

setImmediate(() => {
  console.log("immediate"); // check队列  --- 为什么是check队列 在 io Poll 之前执行了
});

const fs = require("fs");
fs.readFile(__filename, () => {
  // IO Poll队列
  console.log("readFile");
  setImmediate(() => {
    console.log("immediate in readFile callback");
  });
  setTimeout(() => {
    console.log("timeout in readFile callback");
  }, 0);
});

process.nextTick(() => {
  console.log("nextTick"); // 3 微任务队列
});

console.log("end"); // 2
