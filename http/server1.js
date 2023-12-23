const http = require("http");
const url = require("url");
const querystring = require("querystring");

console.log(process.memoryUsage());

const server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  // console.log(pathname, "-------", query);

  let arr = [];
  req.on("data", (data) => {
    arr.push(data);
  });
  req.on("end", () => {
    let str = Buffer.concat(arr).toString();
    if (req.headers["content-type"] === "application/json") {
      let a = JSON.parse(str);
      a.add = "hpu";
      res.end(JSON.stringify(a));
    } else if (
      req.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      console.log("---------->");
      let a = querystring.parse(str);
      console.log(a);
      res.end(JSON.stringify(a));
    }
  });
});

server.listen(3000, () => {
  console.log("服务器启动成功");
});
