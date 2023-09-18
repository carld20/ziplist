function zipList(arr1, arr2) {
  const returnArr = [];
  for (let i = 0; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
    returnArr.push(arr2[i]);
  }
  return returnArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];

console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
