const path = require("path");
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..", "..")); // path.join将多个路径使用系统特定的分隔符合并成一个路径
console.log(path.parse("/home/user/dir/file.txt")); // path.parse解析出一个目录对象
path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb");
// 返回: '../../impl/bbb'

console.log(path.sep);
console.log(path.isAbsolute("/foo/bar")); // 判断是否为绝对路径
console.log(
  path.format({
    root: "/ignored",
    dir: "/home/user/dir",
    base: "file.txt",
  }) // path.format将一个对象转换成一个路径字符串 与 path.parse相反
);
console.log(path.basename("/a/b/c.txt"));
console.log(path.basename(__filename));
console.log(__dirname);
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname("/a/b."));

// 绝对路径
console.log(path.resolve("a", "b"));
console.log(path.resolve("/a", "b"));
