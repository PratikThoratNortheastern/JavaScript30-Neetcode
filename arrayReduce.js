/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length !== 0) {
    var val = fn(init, nums[0]); //returns init since array is empty
    for (let i = 1; i < nums.length; i++) {
      val = fn(val, nums[i]); //this is when array is not empty.
    }
    return val;
  }
  return init;
};
