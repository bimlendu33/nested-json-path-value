var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
var lastEl = [];
const findPath = (object, path) => {
  var pathArr = path.split('.');
  if (lastEl.indexOf(pathArr[0]) < 0) {
    lastEl.splice(0, lastEl.length, object[pathArr[0]]);
    for (var i = 1; i < pathArr.length; i++) {
      if (lastEl[0][pathArr[i]] != undefined) {
        lastEl.splice(0, lastEl.length, lastEl[0][pathArr[i]]);
      } else {
        if (lastEl[0][pathArr[i]] === null) {
          lastEl.splice(0, lastEl.length, null);
        } else {
          lastEl.splice(0, lastEl.length, undefined);
        }
        break;
      }
    }
  } else {
    lastEl.splice(0, lastEl.length, undefined);
  }
  for (var i = 0; i < pathArr.length; i++) {}

  return lastEl[0];
};

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
