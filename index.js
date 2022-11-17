var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
/* I shall use single array, this will keep on updating on latest path (key) value */
var valueOfPath = [];
const findPath = (object, path) => {
  /* Create an array from path (keys) which are coming with dot separation */
  var pathsList = path.split('.');

  /* check for if first path (key) is existing else break condition and return undefined*/
  if (valueOfPath.indexOf(pathsList[0]) < 0 && object[pathsList[0]]) {
    /*
     update Array with splice now with first path (key) value so that we can check for next path(key) 
    in the same Array
    */
    valueOfPath.splice(0, valueOfPath.length, object[pathsList[0]]);

    /* Now iterate over left paths (keys) and check if their key-value exists in Array*/
    for (var i = 1; i < pathsList.length; i++) {
      if (valueOfPath[0][pathsList[i]] != undefined) {
        /*Validate the next path is not undefined else handle that in else and break the loop */
        valueOfPath.splice(0, valueOfPath.length, valueOfPath[0][pathsList[i]]);
      } else {
        /* null should be returned explicitly */
        if (valueOfPath[0][pathsList[i]] === null) {
          valueOfPath.splice(0, valueOfPath.length, null);
        } else {
          /* if path (key) is not exisiting then simply return undefined and break the loop */
          valueOfPath.splice(0, valueOfPath.length, undefined);
        }
        break;
      }
    }
  } else {
    valueOfPath.splice(0, valueOfPath.length, undefined);
  }
  for (var i = 0; i < pathsList.length; i++) {}

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
