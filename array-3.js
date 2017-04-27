(function(Test, test) {

  // Array-3 > maxSpan

  function maxSpan(nums) {
    let spanMap = nums.reduce((spans, num, i) => {
      num in spans ? spans[num].end = i
        : spans[num] = {start: i, end: i};
      return spans;
    }, {});

    return Object.values(spanMap).reduce((maxSpan, span) => {
      return Math.max(maxSpan, span.end - span.start + 1);
    }, 0);
  }

  test(maxSpan, [
    new Test([[1, 2, 1, 1, 3]], 4),
    new Test([[1, 4, 2, 1, 4, 1, 4]], 6),
    new Test([[3, 9]], 1),
    new Test([[]], 0),
    new Test([[1]], 1),
    new Test([[3, 3, 3]], 3)
  ]);

  // fixNums Helper

  function fixNums(nums, num1, num2) {
    let nonNums = nums.reduce((nonNums, num) => {
      if (num != num1 && num != num2) {
        nonNums.push(num);
      }
      return nonNums;
    }, []);

    let idx = 0;
    return nums.reduce((fixed, num, i, nums) => {
      fixed.push(num == num1 ? num1
                 : nums[i-1] == num1 ? num2
                 : nonNums[idx++]);
      return fixed;
    }, []);
  }

  // Array-3 > fix34

  function fix34(nums) {
    return fixNums(nums, 3, 4);
  }

  test(fix34, [
    new Test([[1, 3, 1, 4]], [1, 3, 4, 1]),
    new Test([[1, 3, 1, 4, 4, 3, 1]], [1, 3, 4, 1, 1, 3, 4]),
    new Test([[3, 2, 2, 4]], [3, 4, 2, 2])
  ]);

  // Array-3 > fix45

  function fix45(nums) {
    return fixNums(nums, 4, 5);
  }

  test(fix45, [
    new Test([[5, 4, 9, 4, 9, 5]], [9, 4, 5, 4, 5, 9]),
    new Test([[1, 4, 1, 5]], [1, 4, 5, 1]),
    new Test([[1, 4, 1, 5, 5, 4, 1]], [1, 4, 5, 1, 1, 4, 5])
  ]);

})(TEST.Test, TEST.test);
