// 发布订阅模式

class PubSub {
  constructor() {
    this._events = {};
  }

  // 注册
  subscribe(event, callback) {
    if (this._events[event]) {
      this._events[event].push(callback);
    } else {
      this._events[event] = [callback];
    }
  }
  emit(event, ...args) {
    if (this._events[event]) {
      this._events[event].forEach((callback) => {
        callback.call(this, ...args);
      });
    }
  }
}

const ev = new PubSub();

function test() {
  console.log("test----->", arguments);
}

ev.subscribe("test", test);
ev.subscribe("test1", test);
ev.emit("test1", 12);
