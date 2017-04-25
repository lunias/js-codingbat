(function(Test, test) {

  // Warmup-1 > sleepIn

  var sleepInTests = [
    new Test([false, false], true),
    new Test([true, false], false),
    new Test([false, true], true)
  ];

  function sleepIn(weekday, vacation) {
    return !weekday || vacation;
  }

  test(sleepIn, sleepInTests);

  // Warmup-1 > monkeyTrouble

  var monkeyTroubleTests = [
    new Test([true, true], true),
    new Test([false, false], true),
    new Test([true, false], false)
  ];

  function monkeyTrouble(aSmile, bSmile) {
    return aSmile && bSmile || !aSmile && !bSmile;
  }

  test(monkeyTrouble, monkeyTroubleTests);

  // Warmup-1 > sumDouble

  var sumDoubleTests = [
    new Test([1, 2], 3),
    new Test([3, 2], 5),
    new Test([2, 2], 8)
  ];

  function sumDouble(a, b) {
    return a === b ? (a + b) * 2 : a + b;
  }

  test(sumDouble, sumDoubleTests);

})(TEST.Test, TEST.test);
