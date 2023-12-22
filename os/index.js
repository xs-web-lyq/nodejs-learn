const os = require("os");

console.log(os.endianness()); // 判断操作系统，nodejs二进制编译环境的字节顺序
console.log(os.arch()); // 获取操作系统架构
console.log(os.cpus().length); // 获取cpu个数
console.log(os.freemem()); // 获取内存的剩余空间
console.log(os.homedir()); // 以字符串的形式返回当前用户的home目录
console.log(os.hostname()); // 获取主机名
console.log(os.loadavg()); // 获取系统负载 windows操作系统没有平均负载的概念 [ 0, 0, 0 ]
console.log(os.networkInterfaces()); // 获取网络接口信息
console.log(os.platform()); // 获取操作系统平台
console.log(os.release()); // 获取操作系统的发行版本
console.log(os.tmpdir()); // 返回一个临时目录
console.log(os.totalmem()); // 获取系统总内存
console.log(os.type()); // 获取操作系统的类型
console.log(os.uptime()); // 获取系统启动时间
console.log(os.userInfo()); // 获取当前用户信息
// console.log(os.EOL); // 获取操作系统的换行符
