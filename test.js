var TEST = (function() {

  var test = {};

  ////////////////////// Support Code //////////////////////

  test.Test = function(args, expected) {
    this.args = args;
    this.expected = expected;
  };

  test.test = function(func, testArgs) {

    var funcName = func.name;

    var panel = document.createElement('div');
    panel.classList.add('panel', 'panel-info');

    var panelHeading = document.createElement('div');
    panelHeading.classList.add('panel-heading');
    panelHeading.textContent = funcName;

    var panelBody = document.createElement('div');
    panelBody.classList.add('panel-body');

    var results = document.createElement('ol');
    results.id = 'results-' + funcName;
    results.classList.add('list-group');

    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelBody.appendChild(results);

    document.getElementById('results').appendChild(panel);

    for (var i = 0; i < testArgs.length; i++) {

      var result = func.apply(this, testArgs[i].args);
      var li = document.createElement('li');
      li.classList.add('list-group-item');

      var resultHtml = funcName + '(' + testArgs[i].args.join(', ') + '): ';
      if (testArgs[i].expected === result) {
        resultHtml += '<span class="badge badge-success">' + result + '&nbsp;&nbsp;\u2714</span>';
      } else {
        resultHtml += '<span class="badge badge-error">' + result +
          '&nbsp;&nbsp;\u2718  ( Expected: ' + testArgs[i].expected + ' )</span>';
      }

      li.innerHTML = resultHtml;
      results.appendChild(li);
    }
  };

  return test;

}());
