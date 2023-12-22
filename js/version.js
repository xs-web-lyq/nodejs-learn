function s(list) {
  const m1 = new Map([
    ["rc", 3],
    ["beta", 2],
    ["alpha", 1],
  ]);

  if (list.length > 1) {
    for (let [key, value] of m1.entries()) {
      list[1] = list[1].replace(key, value);
    }
    return [...list[0].split("."), ...list[1].split(".")];
  } else {
    return list[0].split(".");
  }
}

function equal(v1, v2) {
  if (v1 === v2) return "isEqual";

  list1 = v1.split("-");
  list2 = v2.split("-");

  last1 = s(list1);
  last2 = s(list2);
  l1 = last1.length;
  l2 = last2.length;
  len = Math.min(l1, l2);
  for (let index = 0; index < len; index++) {
    if (last1[index] > last2[index]) return v1;
    else if (last2[index] > last1[index]) return v2;
  }

  if (l1 > l2) {
    return v1;
  } else {
    return v2;
  }
}

console.log(equal("2.2.2", "2.2.1-beta.1"));
