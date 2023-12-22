// setTimeout(() => {
//   console.log("s1"); // 4
// });

// Promise.resolve().then(() => {
//   console.log("p1"); // 3
// });

// console.log("start"); // 1

// process.nextTick(() => { // 微任务队列中 nextTick比promise 优先级最高
//   console.log("tick"); // 2
// });

// setImmediate(() => {
//   console.log("immediate"); // 5
// });

setTimeout(() => {
  console.log("s1"); // 4
  Promise.resolve().then(() => {
    console.log("p1"); // 8
  });
  process.nextTick(() => {
    console.log("nt1"); // 6
  });
});

Promise.resolve().then(() => console.log("p2")); //3

console.log("start"); // 1

setTimeout(() => {
  console.log("s2"); // 5
  Promise.resolve().then(() => {
    console.log("p3"); //8
  });
  process.nextTick(() => {
    console.log("nt2"); //7
  });
});

console.log("end"); // 2
