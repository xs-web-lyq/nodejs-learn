const fs = require("fs");

const readerStream = fs.createReadStream("stream.txt", "utf8");
let data = "";
readerStream.on("data", (chunk) => {
  data += chunk;
  console.log("Data: " + data);
});

readerStream.on("end", () => {
  console.log("End");
});

readerStream.on("error", (err) => {
  console.log("Error: " + err.message);
});
