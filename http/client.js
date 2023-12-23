const http = require("http");

let options = {
  hostname: "localhost",
  port: 3000,
  path: "/?a=1",
  method: "POST",
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

let req = http.request(options, (res) => {
  let arr = [];
  res.on("data", (chunk) => {
    arr.push(chunk);
  });
  res.on("end", () => {
    let data = Buffer.concat(arr).toString();
    console.log(data);
  });
});

// req.end('{"name":"liu"}');
req.end("a=16&b=2");
