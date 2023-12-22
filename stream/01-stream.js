const fs = require("fs");

const rs = fs.createReadStream("./stream.txt");
const ws = fs.createWriteStream("./stream-copy.txt");

rs.pipe(ws);
