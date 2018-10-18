(function(Test, test) {

  // Functional-1 > doubling

  function doubling(nums) {
    return nums.map((num) => num * 2);
  }

  test(doubling, [
    new Test([[1, 2, 3]], [2, 4, 6]),
    new Test([[6, 8, 6, 8, -1]], [12, 16, 12, 16, -2]),
    new Test([[]], [])
  ]);

  // Functional-1 > square

  function square(nums) {
    return nums.map((num) => num * num);
  }

  test(square, [
    new Test([[1, 2, 3]], [1, 4, 9]),
    new Test([[6, 8, -6, -8, 1]], [36, 64, 36, 64, 1]),
    new Test([[]], [])
  ]);

  // Functional-1 > addStar

  function addStar(strings) {
    return strings.map((s) => s + '*');
  }

  test(addStar, [
    new Test([["a", "bb", "ccc"]], ["a*", "bb*", "ccc*"]),
    new Test([["hello", "there"]], ["hello*", "there*"]),
    new Test([["*"]], ["**"])
  ]);

})(TEST.Test, TEST.test);
