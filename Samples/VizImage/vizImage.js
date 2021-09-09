'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      addVizImage(tableau.MarkType.Bar, "tableau20_10_0");

      let markSelector = $('#mark-select');
      markSelector.prop('disabled', false);

      let colorSelector = $('#color-select');
      colorSelector.prop('disabled', false);

      // updating viz images with new values upon a selector change
      markSelector.change(function () {
        addVizImage(markSelector.val(),colorSelector.val());
      });
      colorSelector.change(function () {
        addVizImage(markSelector.val(),colorSelector.val());
      });
    });
  });

  // This function uses the input specifications to create a viz image, the returned
  // SVG image is then displayed on the extension.
  function addVizImage (markType, colorPalette) {
    // Building the input specification object that is used to create the viz image.
    // Data values used in the viz image are prefilled.
    const vizInputSpec = {
      description: "A sample viz", // optional parameter
      size: {width: 400, height: 300},
      data: {
        values: [
          {"Product": "Paper", "Sales": 28, "Region": "Central"},
          {"Product": "Pens", "Sales": 45, "Region": "East"},
          {"Product": "Rulers", "Sales": 35, "Region": "East"},
          {"Product": "Rulers", "Sales": 43, "Region": "South"},
          {"Product": "Paper", "Sales": 50, "Region": "West"},
          {"Product": "Pens", "Sales": 56, "Region": "West"}
        ]
      },
      mark: markType,
      markcolor: "#FFED5F", // may not get used in viz if color is encoded in viz
      encoding: {
        columns: {field: "Region", type: tableau.VizImageEncodingType.Discrete},
        rows: {field: "Sales", type: tableau.VizImageEncodingType.Continuous},
        color: {field: "Product", type: tableau.VizImageEncodingType.Discrete, palette: colorPalette},
      }
    };

    // defaulting values if undefined
    if (markType == undefined) {
      vizInputSpec.mark = "bar";
    }
    if (colorPalette == undefined) {
      vizInputSpec.encoding.color.palette = "tableau20_10_0";
    }

    tableau.extensions.createVizImageAsync(vizInputSpec).then(function (svg) {
      var blob = new Blob([svg], { type: 'image/svg+xml' });
      var url = URL.createObjectURL(blob);
      var image = document.createElement('img');
      image.src = url;
      image.style.maxWidth = '100%';
      image.style.maxHeight = '100%';
      image.className = 'center-block';
      var vizApiElement = document.getElementById('viz-container');
      vizApiElement.innerHTML = '';
      vizApiElement.appendChild(image);
      image.addEventListener('load', function () { return URL.revokeObjectURL(url); }, { once: true });
      }, function (err) {
      console.log(err);
    });
  }
})();