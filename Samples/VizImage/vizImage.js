'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Building the input specification object that is used to create the viz image.
  // Data values used in the viz image are prefilled.
  const vizInputSpec = {
    description: "A sample viz", // optional parameter
    title: "Sales By Region", // optional parameter
    size: {width: 400, height: 300},
    data: {
      values: [
        {"Product": "Paper", "Sales": 28, "Region": "Central", "Employees": 100},
        {"Product": "Pens", "Sales": 45, "Region": "East", "Employees": 200},
        {"Product": "Rulers", "Sales": 35, "Region": "East", "Employees": 200},
        {"Product": "Rulers", "Sales": 43, "Region": "South", "Employees": 350},
        {"Product": "Paper", "Sales": 50, "Region": "West", "Employees": 500},
        {"Product": "Pens", "Sales": 56, "Region": "West", "Employees": 500}
      ]
    },
    mark: tableau.MarkType.Bar,
    markcolor: "#FFED5F", // may not get used in viz if color is encoded in viz
    encoding: {
      columns: {field: "Region", type: tableau.VizImageEncodingType.Discrete, hidden: "true"},
      rows: {field: "Sales", type: tableau.VizImageEncodingType.Continuous},
      color: {field: "Product", type: tableau.VizImageEncodingType.Discrete, palette: "tableau20_10_0"},
      size: {field: "Employees", type: tableau.VizImageEncodingType.Continuous},
    }
  };

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      addVizImage();
    });
  });

  // This function uses the input specifications to create a viz image, the returned
  // SVG image is then displayed on the extension.
  function addVizImage () {
    tableau.extensions.createVizImageAsync(vizInputSpec).then(function (svg) {
      console.log(svg);
      var blob = new Blob([svg], { type: 'image/svg+xml' });
      var url = URL.createObjectURL(blob);
      var image = document.createElement('img');
      image.src = url;
      image.style.maxWidth = '100%';
      var vizApiElement = document.getElementById('viz-container');
      vizApiElement.appendChild(image);
      image.addEventListener('load', function () { return URL.revokeObjectURL(url); }, { once: true });
      }, function (err) {
      console.log(err);
    });
  }
})();