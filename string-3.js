(function(Test, test) {

  // String-3 > countYZ

  function countYZ(str) {
    return str.split(/[^a-z]/i).reduce(
      (count, word) => {
        let matches = word.match(/(?:y|z)$/i);
        return matches ? count + matches.length : count;
      }, 0);
  }

  test(countYZ, [
    new Test(['fez day'], 2),
    new Test(['day fez'], 2),
    new Test(['day fyyyz'], 2),
    new Test(['DAY abc XYZ'], 2),
    new Test(['zxyx'], 0),
    new Test(['day:yak'], 1),
    new Test(['yak'], 0),
    new Test(['zzz yyy:asdf zb yvY'], 3),
    new Test(['y2bz'], 2)
  ]);

})(TEST.Test, TEST.test);
