// exports.done = false;
// var b = require("./b.js");
// console.log("在 a.js 之中，b.done = %j", b.done);
// exports.done = true;
// console.log("a.js 执行完毕");

// a.js
import { bar } from "./b.js";
export function foo() {
  bar();
  console.log("执行完毕");
}
foo();
