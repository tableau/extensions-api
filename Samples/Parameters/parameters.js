$(document).ready(function() {
  const table = $('#parameterTable');
  const tableBody = table.children('tbody');
  let onParameterChange = function(evt) {
    evt.getParameterAsync().then(function (param) {
      console.dir(param);
      const newRow = parameterRow(param);
      console.dir(newRow);
    });
  };

  let column = function (value) {
    const row = $('<td>');
    row.append(value);
    return row;
  };

  let textColumn = function (value) {
    const row = $('<td>');
    row.text(value);
    return row;
  }

  let allowableValues = function (value) {
    let termKey = function (key) {
      return $('<dt>').attr('id', key).text(key);
    },  termValue = function (value, default_) {
      return $('<dd>').text(value || default_);
    };

    const allowable = $('<dl class="dl-horizontal">');
    allowable.append(termKey('Min Value'));
    allowable.append(termValue(value.minValue._value, 'No Min'));
    allowable.append(termKey('Max Value'));
    allowable.append(termValue(value.maxValue._value, 'No Max'));
    allowable.append(termKey('Step Size'));
    allowable.append(termValue(value.maxValue.stepSize, 'default'));

    return allowable;
  };

  let parameterRow = function (p) {
    console.dir(p);
    let root = $('<tr>').data('fieldname', p.fieldName);
    root.append(textColumn(p.name));
    root.append(textColumn(p.dataType));
    root.append(textColumn(p.currentValue.formattedValue));
    root.append(column(allowableValues(p.allowableValues)));

    return root;
  };

  let processParameter = function(p) {
    p.addEventListener('parameter-changed', onParameterChange);
    parameterRow(p).appendTo(tableBody);
  };

  tableau.extensions.initializeAsync().then(function() {
    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(function (parameters) {
      parameters.forEach(processParameter);
    });
  });
});