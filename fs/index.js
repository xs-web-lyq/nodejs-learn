const fs = require("fs");

// 异步删除文件
// fs.unlink("./temp/a.html", (err) => {
//   if (err) return console.log(err);
//   console.log("File deleted");
// });

// 异步修改文件名并获取文件信息可能会报错，因为无法控制其执行顺序，所以应该链式调用他们
// 重命名文件
// fs.rename("./temp/abc.html", "./temp/b.html", (err) => {
//   if (err) return console.log(err);
//   console.log("File renamed");
// });

// 获取文件信息
// fs.stat("./temp/b.html", (err, stats) => {
//   if (err) return console.log(err);
//   console.log(stats);
// });

// 创建文件夹
// fs.mkdir("./temp/new", (err) => {
//   if (err) return console.log(err);
//   console.log("Folder created");
// });

// // 创建文件
// fs.writeFile("./temp/new/a.html", "Hello World", (err) => {
//   if (err) return console.log(err);
//   console.log("File created");
// });
// 删除文件
// fs.unlink("./temp/new/a.html", (err) => {
//   if (err) return console.log(err);
//   console.log("File deleted");
// });
// 删除目录
// fs.rmdir("./temp/new", (err) => {
//   if (err) return console.log(err);
//   console.log("Folder deleted");
// });

// 追加内容
fs.appendFileSync("./temp/new/a.html", "Hello World", (err) => {
  if (err) return console.log(err);
  console.log("File appended");
});

// 读取文件
fs.readFileSync("./temp/new/a.html", (err, data) => {
  if (err) return console.log(err);
  console.log(data.toString());
});

// 读取目录
fs.readdir("./temp/new", (err, files) => {
  if (err) return console.log(err);
  console.log(files);
});
