var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
var valueOfPath = [];
const findPath = (object, path) => {
  var pathArr = path.split('.');
  if (valueOfPath.indexOf(pathArr[0]) < 0) {
    if (object[pathArr[0]]) {
      valueOfPath.splice(0, valueOfPath.length, object[pathArr[0]]);
      for (var i = 1; i < pathArr.length; i++) {
        if (valueOfPath[0][pathArr[i]] != undefined) {
          valueOfPath.splice(0, valueOfPath.length, valueOfPath[0][pathArr[i]]);
        } else {
          if (valueOfPath[0][pathArr[i]] === null) {
            valueOfPath.splice(0, valueOfPath.length, null);
          } else {
            valueOfPath.splice(0, valueOfPath.length, undefined);
          }
          break;
        }
      }
    }
  } else {
    valueOfPath.splice(0, valueOfPath.length, undefined);
  }
  for (var i = 0; i < pathArr.length; i++) {}

  return valueOfPath[0];
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
