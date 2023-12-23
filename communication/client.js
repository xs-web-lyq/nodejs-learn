const net = require("net");

const client = net.createConnection({
  port: 1234,
  host: "127.0.0.1",
});

client.on("connect", () => {
  client.write("一路生花");
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("error", (err) => {
  console.log(err);
});

client.on("colse", () => {
  console.log("连接断开");
});
