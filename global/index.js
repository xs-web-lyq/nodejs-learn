console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(this); // 默认情况下this 是空对象，和global并不一样
console.log(this === global);

(function () {
  console.log(this === global);
})();
