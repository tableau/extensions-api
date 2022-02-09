'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      addVizImage(tableau.MarkType.Bar, 'tableau20_10_0');

      const markSelector = $('#mark-select');
      const colorSelector = $('#color-select');

      markSelector.prop('disabled', false);
      colorSelector.prop('disabled', false);

      // updating viz images with new values upon a selector change.
      markSelector.change(function () {
        addVizImage(markSelector.val(), colorSelector.val());
      });
      colorSelector.change(function () {
        addVizImage(markSelector.val(), colorSelector.val());
      });
    });
  });

  // This function creates and displays a viz image.
  function addVizImage (markType, palette) {
    // Building the input specification object that is used to create the viz image.
    // Data values used in the viz image are prefilled.
    const vizInputSpec = {
      description: 'A sample viz', // optional parameter.
      size: { width: 400, height: 300 },
      data: {
        values: [
          { Product: 'Paper', Sales: 28, Region: 'Central' },
          { Product: 'Pens', Sales: 45, Region: 'East' },
          { Product: 'Rulers', Sales: 35, Region: 'East' },
          { Product: 'Rulers', Sales: 43, Region: 'South' },
          { Product: 'Paper', Sales: 50, Region: 'West' },
          { Product: 'Pens', Sales: 56, Region: 'West' }
        ]
      },
      mark: markType,
      markcolor: '#FFED5F', // may not get used in viz if color is encoded in viz.
      encoding: {
        columns: { field: 'Region', type: tableau.VizImageEncodingType.Discrete },
        rows: { field: 'Sales', type: tableau.VizImageEncodingType.Continuous },
        color: { field: 'Product', type: tableau.VizImageEncodingType.Discrete, palette }
      }
    };

    // defaulting values if null.
    if (markType === null) {
      vizInputSpec.mark = tableau.MarkType.Bar;
    }
    if (palette === null) {
      vizInputSpec.encoding.color.palette = 'tableau20_10_0';
    }

    // making call to create viz image from the input specifications.
    tableau.extensions.createVizImageAsync(vizInputSpec).then(
      function (svg) {
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const image = document.createElement('img');
        image.src = url;
        image.style.maxWidth = '100%';
        image.style.maxHeight = '100%';
        image.className = 'center-block';
        const vizApiElement = document.getElementById('viz-container');
        // clearing UI and adding in new viz.
        vizApiElement.innerHTML = '';
        vizApiElement.appendChild(image);
        image.addEventListener(
          'load',
          function () {
            return URL.revokeObjectURL(url);
          },
          { once: true }
        );
      },
      function (err) {
        console.log(err);
      }
    );
  }
})();
