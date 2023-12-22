const fs = require("fs");

// 设置缓冲区
const buff = Buffer.alloc(10);

// 缓冲区大小
const BUFFER_SIZE = buff.length;

// 偏移量
let offset = 0;

fs.open("a.txt", "r", (err, rfd) => {
  fs.open("b.txt", "w", (err, wrd) => {
    function next() {
      fs.read(rfd, buff, 0, BUFFER_SIZE, offset, (err, readBytes) => {
        if (!readBytes) {
          fs.close(rfd, () => {});
          fs.close(wrd, () => {});
          console.log("文件读取完毕");
          return;
        }
        offset += readBytes;
        fs.write(wrd, buff, 0, readBytes, (err, written) => {
          next();
        });
      });
    }
    next();
  });
});
