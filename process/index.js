// 1. 资源 cpu 内存 硬盘
const fs = require("fs");
console.log(process.memoryUsage());
// {
//   rss: 29270016,
//   heapTotal: 4849664, // 总内存
//   heapUsed: 4103976, // 占用内存
//   external: 331296, // 底层c++占用内存
//   arrayBuffers: 11182 // arrayBuffer缓冲区占用内存
// }

console.log(process.cpuUsage()); //{ user: 0, system: 0 } 用户态和系统态占用cpu时间
