/**
 * Buffer
 * 无须require的一个全局变量
 * 实现Node.js平台下的二进制数据读写
 * 不占据v8堆内存大小的内存空间
 * 内存的使用由node来控制，由v8的GC回收
 * 一般配合Stream流使用，充当数据缓冲区
 */

// const b1 = Buffer.alloc(10);
// // b1.write("hello");
// b1[0] = 19;
// console.log(b1);

// const b2 = Buffer.allocUnsafe(10);
// console.log(b2);

// const b3 = Buffer.from("中");
// const b4 = Buffer.from(b3);
// b3.write("国");
// console.log(b3);
// console.log(b4);

const b5 = Buffer.alloc(6);
// b5.fill("a", 3);
// console.log(b5);
// console.log(b5.toString());

b5.write("中国", 0);
console.log(b5);
console.log(b5.toString());

const b6 = Buffer.from("中国");
const b7 = Buffer.from("中国");

// b6.reverse();
// console.log(b6.toString());

// b6.copy(b5, 0, 0, 3);

const b8 = Buffer.concat([b6, b7], 9);
console.log(b8.toString());

console.log(Buffer.isBuffer(b6));
