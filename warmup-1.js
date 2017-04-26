(function(Test, test) {

  // Warmup-1 > sleepIn

  let sleepInTests = [
    new Test([false, false], true),
    new Test([true, false], false),
    new Test([false, true], true)
  ];

  function sleepIn(weekday, vacation) {
    return !weekday || vacation;
  }

  test(sleepIn, sleepInTests);

  // Warmup-1 > monkeyTrouble

  let monkeyTroubleTests = [
    new Test([true, true], true),
    new Test([false, false], true),
    new Test([true, false], false)
  ];

  function monkeyTrouble(aSmile, bSmile) {
    return aSmile && bSmile || !aSmile && !bSmile;
  }

  test(monkeyTrouble, monkeyTroubleTests);

  // Warmup-1 > sumDouble

  let sumDoubleTests = [
    new Test([1, 2], 3),
    new Test([3, 2], 5),
    new Test([2, 2], 8)
  ];

  function sumDouble(a, b) {
    return a === b ? (a + b) * 2 : a + b;
  }

  test(sumDouble, sumDoubleTests);

  // Warmup-1 > diff21

  let diff21Tests = [
    new Test([19], 2),
    new Test([10], 11),
    new Test([21], 0),
    new Test([25], 8)
  ];

  function diff21(n) {
    let av = Math.abs(n - 21);
    return n > 21 ? 2 * av : av;
  }

  test(diff21, diff21Tests);

})(TEST.Test, TEST.test);
