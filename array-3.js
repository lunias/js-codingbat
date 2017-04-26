(function(Test, test) {

  // Array-3 > maxSpan

  let maxSpanTests = [
    new Test([[1, 2, 1, 1, 3]], 4),
    new Test([[1, 4, 2, 1, 4, 1, 4]], 6),
    new Test([[3, 9]], 1),
    new Test([[]], 0),
    new Test([[1]], 1),
    new Test([[3, 3, 3]], 3)
  ];

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

  test(maxSpan, maxSpanTests);

  // fixNums Helper (works, but doesn't keep in place)

  function fixNums(nums, num1, num2) {
    let locs = nums.reduce((locs, num, i) => {
      if (num === num1) {
        let one = locs.find(loc => !loc[num1]);
        one ? one[num1] = i : locs.push({[num1]: i});
      } else if (num === num2) {
        let two = locs.find(loc => !loc[num2]);
        two ? two[num2] = i : locs.push({[num2]: i});
      }
      return locs;
    }, []);

    let indexMap = locs.reduce((map, loc) => {
      let vals = Object.values(loc);
      map[vals[0]] = vals[1];
      return map;
    }, {});

    let fixed = nums.reduce((fixed, num, i, nums) => {
      if (!Object.values(indexMap).includes(i)) {
        fixed.push(num);
        let oldLoc = indexMap[i];
        oldLoc && fixed.push(nums[oldLoc]);
      }
      return fixed;
    }, []);

    return fixed;
  }

  // Array-3 > fix34

  let fix34Tests = [
    new Test([[1, 3, 1, 4]], [1, 3, 4, 1]),
    new Test([[1, 3, 1, 4, 4, 3, 1]], [1, 3, 4, 1, 1, 3, 4]),
    new Test([[3, 2, 2, 4]], [3, 4, 2, 2])
  ];

  function fix34(nums) {
    return fixNums(nums, 3, 4);
  }

  test(fix34, fix34Tests);

})(TEST.Test, TEST.test);
