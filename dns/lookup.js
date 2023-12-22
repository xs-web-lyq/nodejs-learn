const dns = require("dns");

dns.lookup("baidu.com", (err, address, family) => {
  console.log(address, family);
});
