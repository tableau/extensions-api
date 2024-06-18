'use strict';
/* global d3 */

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  window.onload = tableau.extensions.initializeAsync().then(() => {
    // Get the worksheet that the Viz Extension is running in
    const worksheet = tableau.extensions.worksheetContent.worksheet;

    // Save these outside the scope below for handling resizing without refetching the data
    let summaryData = {};
    let encodingMap = {};

    // Use the extensions API to get the summary data and map of encodings to fields,
    // and render the connected scatterplot.
    const updateDataAndRender = async () => {
      // Use extensions API to update the table of data and the map from encodings to fields
      [summaryData, encodingMap] = await Promise.all([
        getSummaryDataTable(worksheet),
        getEncodingMap(worksheet)
      ]);

      renderScatterplot(summaryData, encodingMap);
    };

    // Handle re-rendering when the page is resized
    onresize = () => renderScatterplot(summaryData, encodingMap);

    // Listen to event for when the summary data backing the worksheet has changed.
    // This tells us that we should refresh the data and encoding map.
    worksheet.addEventListener(
      tableau.TableauEventType.SummaryDataChanged,
      updateDataAndRender
    );

    // Do the initial update and render
    updateDataAndRender();
  });

  // Takes a page of data, which has a list of DataValues (dataTablePage.data)
  // and a list of columns and puts the data in a list where each entry is an
  // object that maps from field names to DataValues
  // (example of a row being: { SUM(Sales): ..., SUM(Profit): ..., Ship Mode: ..., })
  function convertToListOfNamedRows (dataTablePage) {
    const rows = [];
    const columns = dataTablePage.columns;
    const data = dataTablePage.data;
    for (let i = data.length - 1; i >= 0; --i) {
      const row = {};
      for (let j = 0; j < columns.length; ++j) {
        row[columns[j].fieldName] = data[i][columns[j].index];
      }
      rows.push(row);
    }
    return rows;
  }

  // Gets each page of data in the summary data and returns a list of rows of data
  // associated with field names.
  async function getSummaryDataTable (worksheet) {
    let rows = [];

    // Fetch the summary data using the DataTableReader
    const dataTableReader = await worksheet.getSummaryDataReaderAsync(
      undefined,
      { ignoreSelection: true }
    );
    for (
      let currentPage = 0;
      currentPage < dataTableReader.pageCount;
      currentPage++
    ) {
      const dataTablePage = await dataTableReader.getPageAsync(currentPage);
      rows = rows.concat(convertToListOfNamedRows(dataTablePage));
    }
    await dataTableReader.releaseAsync();

    return rows;
  }

  // Uses getVisualSpecificationAsync to build a map of encoding identifiers (specified in the .trex file)
  // to fields that the user has placed on the encoding's shelf.
  // Only encodings that have fields dropped on them will be part of the encodingMap.
  async function getEncodingMap (worksheet) {
    const visualSpec = await worksheet.getVisualSpecificationAsync();

    const encodingMap = {};

    if (visualSpec.activeMarksSpecificationIndex < 0) return encodingMap;

    const marksCard =
      visualSpec.marksSpecifications[visualSpec.activeMarksSpecificationIndex];
    for (const encoding of marksCard.encodings) { encodingMap[encoding.id] = encoding.field; }

    return encodingMap;
  }

  // A convenience function for using a possibly undefined encoding to access something dependent on it being defined.
  function useOptionalEncoding (encoding, valFunc) {
    if (encoding) {
      return valFunc(encoding);
    }

    return undefined;
  }

  // Renders the scatterplot to the content area of the Viz Extensions given the data and mapping from encodings to fields.
  function renderScatterplot (data, encodings) {
    // Clear the content region before we render
    const content = document.getElementById('content');
    content.innerHTML = '';

    const axisLabelPadding = 10;
    const animationMarkCountLimit = 1000;

    // Render the ConnectedScatterplot using the data and the mapping of encodings to fields.
    // ConnectedScatterplot can render content when encodings are missing so pass in null
    // for an encoding when the user has not mapped a field to it
    const chart = ConnectedScatterplot(data, {
      x: (d) =>
        useOptionalEncoding(encodings.x, (encoding) => d[encoding.name].value),
      y: (d) =>
        useOptionalEncoding(encodings.y, (encoding) => d[encoding.name].value),
      title: (d) =>
        useOptionalEncoding(
          encodings.text,
          (encoding) => d[encoding.name].formattedValue
        ),
      yFormat: '.2f',
      xLabel: useOptionalEncoding(encodings.x, (encoding) => encoding.name),
      yLabel: useOptionalEncoding(encodings.y, (encoding) => encoding.name),
      width: content.offsetWidth - axisLabelPadding,
      height: content.offsetHeight - axisLabelPadding,
      duration: data.length < animationMarkCountLimit ? 5000 : 0 // for the intro animation; 0 to disable
    });

    content.appendChild(chart);
  }

  // Below is a ConnectedScatterplot implementation that has been showcased in the d3 gallery.
  // Some slight modifications have been made to make it able to be used with WorkbookFormatting.

  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/connected-scatterplot
  function ConnectedScatterplot (
    data,
    {
      x = ([x]) => x, // given d in data, returns the (quantitative) x-value
      y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
      r = 3, // (fixed) radius of dots, in pixels
      title, // given d in data, returns the label
      orient = () => 'top', // given d in data, returns a label orientation (top, right, bottom, left)
      defined, // for gaps in data
      curve = d3.curveCatmullRom, // curve generator for the line
      width = 640, // outer width, in pixels
      height = 400, // outer height, in pixels
      marginTop = 20, // top margin, in pixels
      marginRight = 20, // right margin, in pixels
      marginBottom = 30, // bottom margin, in pixels
      marginLeft = 60, // left margin, in pixels
      inset = r * 2, // inset the default range, in pixels
      insetTop = inset, // inset the default y-range
      insetRight = inset, // inset the default x-range
      insetBottom = inset, // inset the default y-range
      insetLeft = inset, // inset the default x-range
      xType = d3.scaleLinear, // type of x-scale
      xDomain, // [xmin, xmax]
      xRange = [marginLeft + insetLeft, width - marginRight - insetRight], // [left, right]
      xFormat, // a format specifier string for the x-axis
      xLabel, // a label for the x-axis
      yType = d3.scaleLinear, // type of y-scale
      yDomain, // [ymin, ymax]
      yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
      yFormat, // a format specifier string for the y-axis
      yLabel, // a label for the y-axis
      fill = 'white', // fill color of dots
      stroke = 'currentColor', // stroke color of line and dots
      strokeWidth = 2, // stroke width of line and dots
      strokeLinecap = 'round', // stroke line cap of line
      strokeLinejoin = 'round', // stroke line join of line
      halo = '#fff', // halo color for the labels
      haloWidth = 6, // halo width for the labels
      duration = 0 // intro animation in milliseconds (0 to disable)
    } = {}
  ) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const T = title == null ? null : d3.map(data, title);
    const O = d3.map(data, orient);
    const I = d3.range(X.length);
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);

    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.nice(...d3.extent(X), width / 80);
    if (yDomain === undefined) yDomain = d3.nice(...d3.extent(Y), height / 50);

    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

    // Construct the line generator.
    const line = d3
      .line()
      .curve(curve)
      .defined((i) => D[i])
      .x((i) => xScale(X[i]))
      .y((i) => yScale(Y[i]));

    const svg = d3
      .create('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .attr('class', tableau.ClassNameKey.Worksheet); // Use Workbook Formatting settings for Worksheet

    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('y2', marginTop + marginBottom - height)
          .attr('stroke-opacity', 0.1)
      )
      .call((g) =>
        g
          .append('text')
          .attr('x', width)
          .attr('y', marginBottom - 4)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'end')
          .text(xLabel)
      );

    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', width - marginLeft - marginRight)
          .attr('stroke-opacity', 0.1)
      )
      .call((g) =>
        g
          .append('text')
          .attr('x', -marginLeft)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(yLabel)
      );

    const path = svg
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linejoin', strokeLinejoin)
      .attr('stroke-linecap', strokeLinecap)
      .attr('d', line(I));

    svg
      .append('g')
      .attr('fill', fill)
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .selectAll('circle')
      .data(I.filter((i) => D[i]))
      .join('circle')
      .attr('cx', (i) => xScale(X[i]))
      .attr('cy', (i) => yScale(Y[i]))
      .attr('r', r);

    const label = svg
      .append('g')
      .attr('stroke-linejoin', 'round')
      .selectAll('g')
      .data(I.filter((i) => D[i]))
      .join('g')
      .attr('transform', (i) => `translate(${xScale(X[i])},${yScale(Y[i])})`);

    if (T) {
      label
        .append('text')
        .text((i) => T[i])
        .each(function (i) {
          const t = d3.select(this);
          switch (O[i]) {
            case 'bottom':
              t.attr('text-anchor', 'middle').attr('dy', '1.4em');
              break;
            case 'left':
              t.attr('dx', '-0.5em')
                .attr('dy', '0.32em')
                .attr('text-anchor', 'end');
              break;
            case 'right':
              t.attr('dx', '0.5em')
                .attr('dy', '0.32em')
                .attr('text-anchor', 'start');
              break;
            default:
              t.attr('text-anchor', 'middle').attr('dy', '-0.7em');
              break;
          }
        })
        .call((text) => text.clone(true))
        .attr('fill', 'none')
        .attr('stroke', halo)
        .attr('stroke-width', haloWidth);
    }

    // Measure the length of the given SVG path string.
    function length (path) {
      return d3.create('svg:path').attr('d', path).node().getTotalLength();
    }

    function animate () {
      if (duration > 0) {
        const l = length(line(I));

        path
          .interrupt()
          .attr('stroke-dasharray', `0,${l}`)
          .transition()
          .duration(duration)
          .ease(d3.easeLinear)
          .attr('stroke-dasharray', `${l},${l}`);

        label
          .interrupt()
          .attr('opacity', 0)
          .transition()
          .delay(
            (i) =>
              (length(line(I.filter((j) => j <= i))) / l) * (duration - 125)
          )
          .attr('opacity', 1);
      }
    }

    animate();

    return Object.assign(svg.node(), { animate });
  }
})();
