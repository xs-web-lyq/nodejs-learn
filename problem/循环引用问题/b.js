// exports.done = false;
// var a = require("./a.js");
// console.log("在 b.js 之中，a.done = %j", a.done);
// exports.done = true;
// console.log("b.js 执行完毕");

// b.js
import { foo } from "./a.js";
export function bar() {
  if (Math.random() > 0.5) {
    foo();
  }
}
