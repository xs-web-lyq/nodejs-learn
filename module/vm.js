const fs = require("fs");
const vm = require("vm");
// let age = 20;
let content = fs.readFileSync("./test.txt", "utf8");

vm.runInThisContext(content);

console.log(age);
