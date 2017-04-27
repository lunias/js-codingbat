(function(Test, test) {

  // Warmup-1 > sleepIn

  function sleepIn(weekday, vacation) {
    return !weekday || vacation;
  }

  test(sleepIn, [
    new Test([false, false], true),
    new Test([true, false], false),
    new Test([false, true], true)
  ]);

  // Warmup-1 > monkeyTrouble

  function monkeyTrouble(aSmile, bSmile) {
    return aSmile && bSmile || !aSmile && !bSmile;
  }

  test(monkeyTrouble, [
    new Test([true, true], true),
    new Test([false, false], true),
    new Test([true, false], false)
  ]);

  // Warmup-1 > sumDouble

  function sumDouble(a, b) {
    return a === b ? (a + b) * 2 : a + b;
  }

  test(sumDouble, [
    new Test([1, 2], 3),
    new Test([3, 2], 5),
    new Test([2, 2], 8)
  ]);

  // Warmup-1 > diff21

  function diff21(n) {
    let av = Math.abs(n - 21);
    return n > 21 ? 2 * av : av;
  }

  test(diff21, [
    new Test([19], 2),
    new Test([10], 11),
    new Test([21], 0),
    new Test([25], 8)
  ]);

  // Warmup-1 > parrotTrouble



})(TEST.Test, TEST.test);
