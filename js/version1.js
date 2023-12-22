function compareVersion(v1, v2) {
  let res1 = v1;
  let res2 = v2;
  ["alpha", "beta", "rc"].forEach((item, index) => {
    res1 = res1.replace(item, index);
    res2 = res2.replace(item, index);
  });

  let v1Left = res1.split("-")[0].split(".");
  let v2Left = res2.split("-")[0].split(".");
  let v1Right = res1.split("-")[1]?.split(".");
  let v2Right = res2.split("-")[1]?.split(".");

  console.log(v1Left, v2Left, v1Right, v2Right);

  for (let i = 0; i < v1Left.length; i++) {
    const char1 = v1Left[i];
    const char2 = v2Left[i];
    if (Number(char1) === Number(char2)) continue;

    if (Number(char1) > Number(char2)) return v1;
    else return v2;
  }

  if (v1Left && v1Right) {
    for (let i = 0; i < v1Right.length; i++) {
      const char1 = v1Right[i];
      const char2 = v2Right[i];
      if (Number(char1) === Number(char2)) continue;

      if (Number(char1) > Number(char2)) return v1;
      else return v2;
    }
  } else {
    if (v1Right && !v2Right) return v2;
    if (!v1Right && v2Right) return v1;

    return "isEqual";
  }
}
