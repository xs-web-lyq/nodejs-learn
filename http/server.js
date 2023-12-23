const http = require("http");
const url = require("url");

let server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  console.log(pathname, query);

  // console.log(req.headers);

  // console.log(req.method);
  // console.log(req.httpVersion);
  // 获取数据
  // let arr = [];
  // req.on("data", (data) => {
  //   arr.push(data);
  // });
  // req.on("end", () => {
  //   let data = Buffer.concat(arr).toString();
  //   console.log(data);
  //   res.end("ok");
  // });
  res.statusCode = 302;
  res.setHeader("Content-type", "text/html;charset=utf-8");
  res.end("中国");
});

server.listen(1234, () => {
  console.log("服务器启动");
});
