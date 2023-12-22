setTimeout(() => {
  console.log("setTimeout1");
  Promise.resolve().then(() => {
    console.log("promise1");
  });
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");
setTimeout(() => {
  console.log("setTimeout2");
  Promise.resolve().then(() => {
    console.log("promise3");
  });
  Promise.resolve().then(() => {
    console.log("promise4");
  });
}, 0);
