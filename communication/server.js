const net = require("net");

const server = net.createServer();

const PORT = 1234;
const HOST = "localhost";

server.listen(PORT, HOST);

server.on("listening", () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("data", (chunk) => {
    const msg = chunk.toString();
    console.log(msg);

    // 回数据
    socket.write(Buffer.from("你好" + msg));
  });
});

server.on("close", () => {
  console.log("Server closed");
});
