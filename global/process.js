// console.log(process.memoryUsage());

const { log } = require("console");

// console.log(process.cpuUsage());

// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env.NODE_ENV);

// 运行状态： 启动参数，PID , 运行时间

// console.log(process.argv0);
// console.log(process.pid);
// console.log(process.uptime());

// 事件
process.on("exit", (code) => {
  console.log(`退出码：${code}`); // 这里只能执行同步代码
});
process.on("beforeExit", (code) => {
  console.log(`退出前码：${code}`);
});
// process.exit();
// console.log("完成");

// 标准输入，输出，错误

process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write("data " + chunk);
  }
});
