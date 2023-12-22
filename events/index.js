const eventEmitter = require("events");

const myEmitter = new eventEmitter();

myEmitter.on("event", (data) => {
  console.log(data);
});

myEmitter.on("event", () => {
  console.log("second event");
});

myEmitter.emit("event", "trigger event");
