const fs = require("fs");

let data =
  "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";

const writerStream = fs.createWriteStream("stream.txt");
writerStream.write(data, "utf-8");

writerStream.end();

writerStream.on("finish", () => {
  console.log("写入完成");
});

writerStream.on("error", (err) => {
  console.log("写入失败");
});

console.log("程序执行完毕");
