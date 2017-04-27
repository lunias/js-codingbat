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

  function parrotTrouble(talking, hour) {
    return talking && (hour < 7 || hour > 20);
  }

  test(parrotTrouble, [
    new Test([true, 6], true),
    new Test([true, 7], false),
    new Test([false, 6], false)
  ]);

  // Warmup-1 > makes10

  function makes10(a, b) {
    return a == 10 || b == 10 || a + b == 10;
  }

  test(makes10, [
    new Test([9, 10], true),
    new Test([9, 9], false),
    new Test([1, 9], true)
  ]);

  // Warmup-1 > nearHundred

  function nearHundred(n) {
    return Math.abs(100 - n) <= 10
      || Math.abs(200 - n) <= 10;
  }

  test(nearHundred, [
    new Test([93], true),
    new Test([90], true),
    new Test([89], false),
    new Test([200], true),
    new Test([211], false)
  ]);

  // Warmup-1 > posNeg

  function posNeg(a, b, negative) {
    return negative ? a < 0 && b < 0
      : a < 0 != b < 0;
  }

  test(posNeg, [
    new Test([1, -1, false], true),
    new Test([-1, 1, false], true),
    new Test([-4, -5, true], true)
  ]);

  // Warmup-1 > notString

  function notString(str) {
    return str.match(/^not/) ? str
      : 'not ' + str;
  }

  test(notString, [
    new Test(['candy'], 'not candy'),
    new Test(['x'], 'not x'),
    new Test(['not bad'], 'not bad')
  ]);

})(TEST.Test, TEST.test);
