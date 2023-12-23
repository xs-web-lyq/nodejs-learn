// var a = require("./a.js");
// var b = require("./b.js");
// console.log("在 main.js 之中, a.done=%j, b.done=%j", a.done, b.done);

// setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(function () {
//     console.log("promise1");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
//   Promise.resolve().then(function () {
//     console.log("promise2");
//   });
// }, 0);

const fs = require("fs");
const ITERATIONS_MAX = 3;
let iteration = 0;
const timeout = setInterval(() => {
  console.log("START: setInterval", "TIMERS PHASE");
  if (iteration < ITERATIONS_MAX) {
    setTimeout(() => {
      console.log("setInterval.setTimeout", "TIMERS PHASE");
    });
    fs.readdir("./image", (err, files) => {
      if (err) throw err;
      console.log(
        "fs.readdir() callback: Directory contains: " + files.length + " files",
        "POLL PHASE"
      );
    });
    setImmediate(() => {
      console.log("setInterval.setImmediate", "CHECK PHASE");
    });
  } else {
    console.log("Max interval count exceeded. Goodbye.", "TIMERS PHASE");
    clearInterval(timeout);
  }
  iteration++;
  console.log("END: setInterval", "TIMERS PHASE");
}, 0);
