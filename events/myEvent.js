const { log } = require("console");

function MyEvent() {
  this._events = Object.create(null);
}

MyEvent.prototype.on = function (type, callback) {
  if (!this._events[type]) {
    this._events[type] = [callback];
  } else {
    this._events[type].push(callback);
  }
};

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events && this._events[type].length) {
    this._events[type].forEach((cb) => {
      cb.call(this, ...args);
    });
  }
};

MyEvent.prototype.off = function (type, callback) {
  if (this._events && this._events[type]) {
    this._events[type] = this._events[type].filter(
      (cb) => cb !== callback && cb.link !== callback
    );
  }
};

MyEvent.prototype.once = function (type, callback) {
  let foo = function (...args) {
    callback.call(this, ...args);
    this.off(type, foo);
  };
  foo.link = callback;
  this.on(type, foo);
};

let ev = new MyEvent();
let fn = function (...args) {
  console.log("事件1执行了", args);
};

ev.once("事件1", fn);
// ev.once("事件1", () => {
//   console.log("事件执行了--->1");
// });
ev.off("事件1", fn);
ev.emit("事件1", 1, 2, 3);

ev.emit("事件1", 1, 2, 3);
