/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    // filteredArray.push(fn(arr[i],i));
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

/*
Please note that when we write if(expression === true) { we are checking if the value is exactly the boolean value true }.

However, when we check if(expression)[without any comparison operator] we are essentially evaluating truthy and falsy values of the expression.

*/
