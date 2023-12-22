Buffer.prototype.split = function (sep) {
  let len = Buffer.from(sep).length;
  let ret = [];
  let start = 0;
  let offset = 0;
  while ((offset = this.indexOf(sep, start) !== -1)) {
    ret.push(this.slice(start, offset));
    start = offset + len;
  }
  ret.push(this.slice(start));
  return ret;
};

// const b = new ArrayBuffer(10);
const c = Buffer.alloc(10);
// console.log(c.__proto__.split);
// console.log(b);
c.write("zh中文吃馒头吗,还是吃米饭尼");

console.log(c.split("吃"));

// const mackd = require("mackd");
// console.log(mackd);
