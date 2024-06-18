'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      addVizImage(tableau.MarkType.Bar, tableau.MarkType.Bar, 'tableau20_10_0');

      const markSelector1 = $('#mark-select1');
      const markSelector2 = $('#mark-select2');
      const colorSelector = $('#color-select');

      markSelector1.prop('disabled', false);
      markSelector2.prop('disabled', false);
      colorSelector.prop('disabled', false);

      // updating viz images with new values upon a selector change.
      markSelector1.change(function () {
        addVizImage(markSelector1.val(), markSelector2.val(), colorSelector.val());
      });
      markSelector2.change(function () {
        addVizImage(markSelector1.val(), markSelector2.val(), colorSelector.val());
      });
      colorSelector.change(function () {
        addVizImage(markSelector1.val(), markSelector2.val(), colorSelector.val());
      });
    });
  });

  function addVizImage (markType1, markType2, colorType) {
    const vizInputSpec = {
      version: 2,
      description: 'Example QQConcat viz',
      data: {
        values: [
          { Segment: 'Consumer', ShipMode: 'First Class', Category: 'Technology', Profit: 11560.75, Sales: 61089.43 },
          { Segment: 'Corporate', ShipMode: 'First Class', Category: 'Technology', Profit: 7235.75, Sales: 39201.43 },
          { Segment: 'Home Office', ShipMode: 'First Class', Category: 'Technology', Profit: 8706.75, Sales: 39074.43 },
          { Segment: 'Consumer', ShipMode: 'First Class', Category: 'Office Supplies', Profit: 7734.74, Sales: 48200.43 },
          { Segment: 'Corporate', ShipMode: 'First Class', Category: 'Office Supplies', Profit: 6299.74, Sales: 31579.43 },
          { Segment: 'Home Office', ShipMode: 'First Class', Category: 'Office Supplies', Profit: 4366.74, Sales: 21552.43 },
          { Segment: 'Consumer', ShipMode: 'First Class', Category: 'Furniture', Profit: 2078.74, Sales: 49880.43 },
          { Segment: 'Corporate', ShipMode: 'First Class', Category: 'Furniture', Profit: 929.75, Sales: 35077.43 },
          { Segment: 'Home Office', ShipMode: 'First Class', Category: 'Furniture', Profit: 58.74, Sales: 25773.43 },
          { Segment: 'Consumer', ShipMode: 'Second Class', Category: 'Technology', Profit: 14430.75, Sales: 72942.43 },
          { Segment: 'Corporate', ShipMode: 'Second Class', Category: 'Technology', Profit: 6819.74, Sales: 41912.43 },
          { Segment: 'Home Office', ShipMode: 'Second Class', Category: 'Technology', Profit: 4902.75, Sales: 27366.43 },
          { Segment: 'Consumer', ShipMode: 'Second Class', Category: 'Office Supplies', Profit: 9752.74, Sales: 71757.43 },
          { Segment: 'Corporate', ShipMode: 'Second Class', Category: 'Office Supplies', Profit: 9809.74, Sales: 62810.43 },
          { Segment: 'Home Office', ShipMode: 'Second Class', Category: 'Office Supplies', Profit: 7506.74, Sales: 26115.43 },
          { Segment: 'Consumer', ShipMode: 'Second Class', Category: 'Furniture', Profit: 763.74, Sales: 86799.43 },
          { Segment: 'Corporate', ShipMode: 'Second Class', Category: 'Furniture', Profit: 1596.74, Sales: 41403.43 },
          { Segment: 'Home Office', ShipMode: 'Second Class', Category: 'Furniture', Profit: 1865.74, Sales: 28086.43 }
        ]
      },
      vizlayout: {
        title: 'Example Combination Chart',
        size: { width: 800, height: 600 },
        showcolorlegend: true,
        showsizelegend: false,
        showrowsgridline: false
      },
      columns: [
        { field: 'ShipMode', type: tableau.VizImageEncodingType.Discrete },
        { field: 'Sales', type: tableau.VizImageEncodingType.Continuous },
        { field: 'Profit', type: tableau.VizImageEncodingType.Continuous }
      ],
      rows: [{ field: 'Segment', type: tableau.VizImageEncodingType.Discrete }],
      encodingaxis: 'columns',
      defaultencoding: { mark: tableau.MarkType.Bar },
      encodings: [
        {
          mark: markType1 || tableau.MarkType.Bar
        },
        {
          mark: markType2 || tableau.MarkType.Bar,
          color: { field: 'Category', type: tableau.VizImageEncodingType.Discrete, palette: { name: colorType || 'tableau20_10_0' } }
        }
      ]
    };

    // making call to create viz image from the input specifications.
    tableau.extensions.createVizImageAsync(vizInputSpec).then(function (svg) {
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
      image.addEventListener('load', function () { return URL.revokeObjectURL(url); }, { once: true });
    }, function (err) {
      console.log(err);
    });
  }
})();
