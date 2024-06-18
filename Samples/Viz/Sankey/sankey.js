/* global d3 */
/* global tinycolor */

const backgroundColor = tinycolor('white');

async function Sankey (encodedData, encodingMap, width, height, selectedTupleIds, styles) {
  const palette = ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'];

  const xPadding = 2;
  const yPadding = 1;
  const levelWidth = 100;
  const top = 20;

  const layout = computeSankeyLayout(
    d3.sankey,
    encodedData,
    top,
    width,
    height,
    levelWidth + xPadding * 2,
    yPadding,
    palette
  );

  // Create an SVG container.
  const svg = d3
    .create('svg')
    .attr('class', tableau.ClassNameKey.Worksheet)
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
    .attr('font-family', styles?.fontWeight)
    .attr('font-weight', styles?.fontFamily)
    .attr('font-size', styles?.fontSize)
    .attr('font-style', styles?.fontStyle)
    .attr('text-decoration', styles?.textDecoration);

  const selectedNodeIndexes = getSelectedNodes(layout.links, selectedTupleIds);

  // Create the rects that represent the nodes.
  svg.append('g')
    .selectAll()
    .data(layout.nodes)
    .join('rect')
    .attr('x', d => d.x0 + xPadding)
    .attr('y', d => d.y0)
    .attr('height', d => d.y1 - d.y0)
    .attr('width', d => d.x1 - d.x0 - xPadding * 2)
    .attr('fill', (d, index) => getColor(d.color, selectedTupleIds, selectedNodeIndexes.has(index)));

  // Creates the paths that represent the links.
  const links = svg.append('g')
    .attr('fill-opacity', 0.5)
    .style('cursor', 'pointer')
    .selectAll()
    .data(layout.links)
    .join('path')
    .attr('d', getLinkPath)
    .attr('fill', d => getLinkColor(d, selectedTupleIds));

  // Add labels on the nodes.
  svg.append('g')
    .selectAll()
    .data(layout.nodes)
    .join('text')
    .attr('x', d => (d.x1 + d.x0) / 2)
    .attr('y', d => (d.y1 + d.y0) / 2)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'middle')
    .text(d => d.name)
    .attr('fill', (d, index) => getColor('black', selectedTupleIds, selectedNodeIndexes.has(index)));

  // Add top labels
  if (encodingMap.level) {
    // Pick one representetive node for each level
    const levels = [];
    for (const node of layout.nodes) { levels[node.layer] = node; }

    svg.append('g')
      .selectAll()
      .data(levels)
      .join('text')
      .attr('font-weight', 'bold')
      .attr('x', d => (d.x1 + d.x0) / 2)
      .attr('y', top / 2)
      .attr('text-anchor', 'middle')
      .text(d => encodingMap.level[d.layer].name)
      .attr('fill', styles?.color);
  }

  // Container for rendering selected elements (rendered last)
  const selectionLayer = svg.append('g');
  const hoveringLayer = svg.append('g');

  const linksPerTupleId = getLinksPerTupleId(links);

  renderSelection(selectedTupleIds, linksPerTupleId, selectionLayer, hoveringLayer);

  return {
    hoveringLayer,
    linksPerTupleId,
    viz: svg.node()
  };
}

function getLinksPerTupleId (links) {
  const linksPerTupleId = new Map();
  links.each(function (d) {
    let list = linksPerTupleId.get(d.tupleId);
    if (!list) {
      list = [];
      linksPerTupleId.set(d.tupleId, list);
    }
    list.push(d3.select(this));
  });

  return linksPerTupleId;
}

function getSelectedNodes (links, selectedTupleIds) {
  const selectedNodeIndexes = new Map();

  for (const link of links) {
    if (selectedTupleIds.has(link.tupleId)) {
      selectedNodeIndexes.set(link.source.index);
      selectedNodeIndexes.set(link.target.index);
    }
  }

  return selectedNodeIndexes;
}

// Render selected elements on a separate top-level layer
function renderSelection (selectedTupleIds, linksPerTupleId, selectionLayer, highlightingLayer) {
  selectionLayer.selectAll('*').remove();
  highlightingLayer.selectAll('*').remove();

  const selectedLinks = [];

  for (const id of selectedTupleIds.keys()) { selectedLinks.push(...linksPerTupleId.get(id)); }

  let outline = selectionLayer.selectAll('g.selectionOutline');

  // Render the outline first (to dissolve selected elemens borders)
  if (outline.empty()) {
    outline = selectionLayer
      .append('g')
      .attr('class', 'selectionOutline');
  }

  outline.selectAll()
    .data(selectedLinks)
    .join('path')
    .attr('d', link => link.attr('d')) // Copy path geometry from the 'normal' element
    .datum(link => link.datum()); // Bind data from the 'normal' elememt

  // Render filled elements without borders
  let fill = selectionLayer.selectAll('g.selection');

  if (fill.empty()) {
    fill = selectionLayer
      .append('g')
      .attr('class', 'selection');
  }

  fill.selectAll()
    .data(selectedLinks)
    .join('path')
    .attr('d', link => link.attr('d')) // Copy path geometry from the 'normal' element
    .datum(link => link.datum()); // Bind data from the 'normal' elememt
}

// Render hovered elements on a separate top-level layer
function renderHoveredElements (hoveredTupleIds, linksPerTupleId, hoveringLayer) {
  if (!hoveringLayer) return;

  hoveringLayer.selectAll('*').remove();

  const hoveredLinks = [];
  for (const id of hoveredTupleIds.keys()) { hoveredLinks.push(...linksPerTupleId.get(id)); }

  hoveringLayer.selectAll()
    .data(hoveredLinks)
    .join('path')
    .attr('d', (link) => link.attr('d'))
    .attr('class', 'highlighting');
}

async function renderViz (rawData, encodingMap, selectedMarksIds, styles) {
  const encodedData = getEncodedData(rawData, encodingMap);

  const content = document.getElementById('content');
  content.innerHTML = '';

  const sankey = await Sankey(
    encodedData,
    encodingMap,
    content.offsetWidth,
    content.offsetHeight,
    selectedMarksIds,
    styles
  );

  content.appendChild(sankey.viz);

  return sankey;
}

// Uses getVisualSpecificationAsync to build a map of encoding identifiers (specified in the .trex file)
// to fields that the user has placed on the encoding's shelf.
// Only encodings that have fields dropped on them will be part of the encodingMap.
async function getEncodingMap () {
  const worksheet = tableau.extensions.worksheetContent.worksheet;
  const visualSpec = await worksheet.getVisualSpecificationAsync();

  const encodingMap = {};

  if (visualSpec.activeMarksSpecificationIndex < 0) { return encodingMap; }

  const marksCard = visualSpec.marksSpecifications[visualSpec.activeMarksSpecificationIndex];
  for (const encoding of marksCard.encodings) {
    if (!encodingMap[encoding.id]) { encodingMap[encoding.id] = []; }

    encodingMap[encoding.id].push(encoding.field);
  }

  return encodingMap;
}

window.onload = tableau.extensions.initializeAsync().then(async () => {
  // Get the worksheet that the Viz Extension is running in
  const worksheet = tableau.extensions.worksheetContent.worksheet;

  // Save these outside the scope below for handling resizing without refetching the data
  let summaryData = {};
  let encodingMap = {};
  let selectedMarks = new Map();
  const hoveredMarks = new Map();
  let linksPerTupleId = new Map();
  let hoveringLayer;

  const styles = tableau.extensions.environment.workbookFormatting?.formattingSheets
    ?.find(x => x.classNameKey === 'tableau-worksheet')?.cssProperties;

  // Use the extensions API to get the summary data and map of encodings to fields,
  // and render the connected scatterplot.
  const updateDataAndRender = async () => {
    // Use extensions API to update the table of data and the map from encodings to fields
    [summaryData, encodingMap] = await Promise.all([
      getSummaryDataTable(worksheet),
      getEncodingMap(worksheet)
    ]);

    // Selection can change on any data changes
    selectedMarks = await getSelection(worksheet, summaryData);
    ({ hoveringLayer, linksPerTupleId } = await renderViz(summaryData, encodingMap, selectedMarks, styles));
  };

  // Handle re-rendering when the page is resized
  onresize = async () => {
    ({ hoveringLayer, linksPerTupleId } = await renderViz(summaryData, encodingMap, selectedMarks, styles));
  };

  // Listen to event for when the summary data backing the worksheet has changed.
  // This tells us that we should refresh the data and encoding map.
  worksheet.addEventListener(
    tableau.TableauEventType.SummaryDataChanged, updateDataAndRender);

  // Setup interactivity events
  document.body.addEventListener('click', async (e) => {
    onClick(e, selectedMarks, hoveredMarks);
    ({ hoveringLayer, linksPerTupleId } = await renderViz(summaryData, encodingMap, selectedMarks, styles));
  });

  document.body.addEventListener('mousemove', e => onMouseMove(e, hoveredMarks, linksPerTupleId, hoveringLayer));
  document.body.addEventListener('mouseout', e => onMouseMove(e, hoveredMarks, linksPerTupleId, hoveringLayer));

  // Do the initial update and render
  updateDataAndRender();
});

function onClick (e, selectedTupleIds, hoveredTupleIds) {
  const elem = d3.select(document.elementFromPoint(e.pageX, e.pageY));
  const data = elem?.datum();
  const tupleId = data === undefined ? null : data.tupleId;

  if (elem && tupleId !== null && tupleId !== undefined) {
    if (selectedTupleIds.has(tupleId)) {
      // User clicked on an already selected item
      // Only one item is selected - deselect it
      if (selectedTupleIds.size === 1) selectedTupleIds.clear();
      // Remove an item from selection
      else if (e.ctrlKey) selectedTupleIds.delete(tupleId);
      else {
        selectedTupleIds.clear();
        selectedTupleIds.set(tupleId);
      }
    } else {
      if (!e.ctrlKey) selectedTupleIds.clear();
      selectedTupleIds.set(tupleId);
    }
  } else if (!e.ctrlKey) {
    // Clicking outside of any element will clear all element, unless CTRL is pressed
    selectedTupleIds.clear();
  }

  selectTuples(e.pageX, e.pageY, selectedTupleIds, hoveredTupleIds);
}

async function selectTuples (x, y, selectedTupleIds, hoveredTupleIds) {
  clearHoveredMarks(hoveredTupleIds);
  getWorksheet().selectTuplesAsync([...selectedTupleIds.keys()], tableau.SelectOptions.Simple, { tooltipAnchorPoint: { x, y } });
}

async function onMouseMove (e, hoveredTupleIds, linksPerTupleId, hoveringLayer) {
  const elem = d3.select(document.elementFromPoint(e.pageX, e.pageY));
  const data = elem?.node() ? elem.datum() : undefined;
  const tupleId = data === undefined ? null : data.tupleId;

  const hadHoveredTupleBefore = hoveredTupleIds.size !== 0;

  clearHoveredMarks(hoveredTupleIds);

  if (elem && tupleId !== null && tupleId !== undefined) {
    hoveredTupleIds.set(tupleId);
    getWorksheet().hoverTupleAsync(parseInt(tupleId), { tooltipAnchorPoint: { x: e.pageX, y: e.pageY } });
  } else if (hadHoveredTupleBefore) { getWorksheet().hoverTupleAsync(parseInt(tupleId), { tooltipAnchorPoint: { x: e.pageX, y: e.pageY } }); }

  renderHoveredElements(hoveredTupleIds, linksPerTupleId, hoveringLayer);
}

function clearHoveredMarks (hoveredTupleIds) {
  hoveredTupleIds.clear();
}

async function getSelection (worksheet, allMarks) {
  const selectedMarks = await worksheet.getSelectedMarksAsync();

  return findIdsOfSelectedMarks(allMarks, selectedMarks);
}

// Go through all selected marks and find their exact match in the data table
// Use the index of the mark in the data table to compute tupleId
function findIdsOfSelectedMarks (allMarks, selectedMarks) {
  const columns = selectedMarks.data[0].columns;
  const selectedMarkMap = new Map();
  const selectedMarksIds = new Map();

  for (const selectedMark of convertToListOfNamedRows(selectedMarks.data[0])) {
    let key = '';
    for (const col of columns) { key += selectedMark[col.fieldName].value + '\x00'; }

    selectedMarkMap.set(key, selectedMark);
  }

  let tupleId = 1;
  for (const mark of allMarks) {
    let key = '';
    for (const col of columns) { key += mark[col.fieldName].value + '\x00'; }

    if (selectedMarkMap.has(key)) { selectedMarksIds.set(tupleId); }

    tupleId++;
  }

  return selectedMarksIds;
}

// Takes a page of data, which has a list of DataValues (dataTablePage.data)
// and a list of columns and puts the data in a list where each entry is an
// object that maps from field names to DataValues
// (example of a row being: { SUM(Sales): ..., SUM(Profit): ..., Ship Mode: ..., })
function convertToListOfNamedRows (dataTablePage) {
  const rows = [];
  const columns = dataTablePage.columns;
  const data = dataTablePage.data;
  for (let i = 0; i < data.length; ++i) {
    const row = {};
    for (let j = 0; j < columns.length; ++j) {
      row[columns[j].fieldName] = data[i][columns[j].index];
    }
    row.tupleId = i + 1;
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

// Converts each data row from a <field_name, DataValues> object map to a <encoding_name, DataValues[]> object map
// For example,  { SUM(Sales): 10.23, Ship Mode: 'Next Day', Category: 'Office Supplies' } will be converted to
// { edge: [10.23], levels: ['Next Day', 'Office Supplies']  } if SUM(Sales) is on the edge encoding and Ship Mode ad Category are on the level encoding
function getEncodedData (data, encodingMap) {
  const encodedData = [];

  let tupleId = 1;
  for (const row of data) {
    const encodedRow = {};

    for (const encName in encodingMap) {
      const fields = encodingMap[encName];

      encodedRow[encName] = [];

      for (const field of fields) { encodedRow[encName].push(row[field.name]); }
    }

    encodedRow.tupleId = tupleId;
    tupleId++;

    encodedData.push(encodedRow);
  }

  return encodedData;
}

//= =================
// COLOR FUNCTIONS
//= =================
function getLinkColor (link, selectedTupleIds) {
  const color = link.color ?? 'lightgray';

  return getColor(color, selectedTupleIds);
}

function getColor (color, selectedTupleIds, doNotFog) {
  return (selectedTupleIds.size > 0 && doNotFog !== true) ? calculateFogColor(color) : color;
}

/*
function getLabelColor(color, selectedTupleIds) {
  color = getAutoLabelColor(color ?? 'rgb(102, 102, 102)');
  return getColor(color, selectedTupleIds);
}

// Takes two possible options for a color (a light and a dark color option) and returns the one with the ideal
// contrast to the background color.
function getAutoLabelColor (fgColorStr, bgColorStr) {
  const Black = tinycolor('black');
  const White = tinycolor('white');

  const fgColor = tinycolor(fgColorStr);
  const bgColor = tinycolor(bgColorStr);

  const fgColorIsLight = isLuminanceAboveThreshold(fgColor);
  const dark = fgColorIsLight ? Black : fgColor;
  const light = fgColorIsLight ? fgColor : White;

  const autoColor = isLuminanceAboveThreshold(bgColor) ? dark : light;

  return autoColor.toHexString();
}

function isLuminanceAboveThreshold (color) {
  return color.getLuminance() > 0.3149999976158142;
}
*/

const fogBlendFactor = getFogBlendFactor(backgroundColor);
const { foggedBackgroundRed, foggedBackgroundGreen, foggedBackgroundBlue } = computeFoggedBackgroundColor(backgroundColor, fogBlendFactor);

// When one or more elements are selected, everything else is fogged out.
function computeFoggedBackgroundColor (color, fogBlendFactor) {
  const CloseToWhite = 245;

  if (color.r >= CloseToWhite && color.g >= CloseToWhite && color.b >= CloseToWhite) { color = tinycolor({ r: CloseToWhite, g: CloseToWhite, b: CloseToWhite }); }

  color = color.toRgb();
  const foggedBackgroundRed = (1 - fogBlendFactor) * color.r >>> 0;
  const foggedBackgroundGreen = (1 - fogBlendFactor) * color.g >>> 0;
  const foggedBackgroundBlue = (1 - fogBlendFactor) * color.b >>> 0;

  return { foggedBackgroundRed, foggedBackgroundGreen, foggedBackgroundBlue };
}

function calculateFogColor (colorStr) {
  const color = tinycolor(colorStr).toRgb();

  const fogR = foggedBackgroundRed + color.r * fogBlendFactor >>> 0;
  const fogG = foggedBackgroundGreen + color.g * fogBlendFactor >>> 0;
  const fogB = foggedBackgroundBlue + color.b * fogBlendFactor >>> 0;

  return tinycolor({ r: fogR, g: fogG, b: fogB }).toHexString();
}

function getFogBlendFactor (color) {
  color = color.toRgb();

  const DefaultFogBlendFactor = 0.1850000023841858;
  const DarkBgFogBlendFactor = 0.2750000059604645;
  const DarkBgThreshold = 75;
  const isDarkBackground = color.r <= DarkBgThreshold && color.g <= DarkBgThreshold && color.b <= DarkBgThreshold;
  return (isDarkBackground ? DarkBgFogBlendFactor : DefaultFogBlendFactor);
}

function getLinkPath (d) {
  const midX = (d.source.x1 + d.target.x0) / 2;
  let path = `M ${d.source.x1} ${d.y0 - d.width / 2}`;
  path += ` C ${midX} ${d.y0 - d.width / 2} ${midX} ${d.y1 - d.width / 2} ${d.target.x0} ${d.y1 - d.width / 2}`;
  path += ` L ${d.target.x0} ${d.y1 + d.width / 2}`;
  path += ` C ${midX} ${d.y1 + d.width / 2} ${midX} ${d.y0 + d.width / 2} ${d.source.x1} ${d.y0 + d.width / 2}`;
  path += ' Z'; // close the path
  return path;
}

function computeSankeyLayout (
  d3Sankey,
  data,
  top,
  width,
  height,
  nodeWidth,
  padding,
  palette
) {
  // `nodes` are `rectangles` in the UI
  // `links` are what we call `edges` or `noodles` in the UI
  if (data.length === 0) return { links: [], nodes: [] };

  const firstRow = data[0];

  const levelCount = Array.isArray(firstRow.level) ? firstRow.level.length : 0;
  const hasLinks = firstRow.edge !== undefined;

  if (levelCount === 0) {
    // Create a dummy link that follows the object schema returned by d3
    const link = {
      y0: (height - top) / 2,
      y1: (height - top) / 2,
      source: {
        x1: nodeWidth
      },
      target: {
        x0: width - nodeWidth
      },
      width: 2,
      color: null
    };
    return { nodes: [], links: [link] };
  }

  let links = [];
  let nodes = [];

  if (levelCount === 1) {
    // Compute links for each pair of adjacent levels
    for (const row of data) {
      const link = {
        source: { name: row.level[0].value },
        target: { name: row.level[0].value },
        value: getLinkValue(row, hasLinks),
        tupleId: row.tupleId
      };

      links.push(link);
      nodes.push(link.source);
      nodes.push(link.target);
    }
  } else {
    // Compute a map of nodes for each level
    const nodesPerLevel = [];

    for (let i = 0; i < levelCount; i++) nodesPerLevel.push(new Map());

    for (const row of data) {
      for (let i = 0; i < levelCount; i++) nodesPerLevel[i].set(row.level[i].value, { name: row.level[i].value });
    }
    nodes.push(...nodesPerLevel[0].values()); // initialize with the first level nodes

    // Compute links for each pair of adjacent levels
    for (let i = 0; i < levelCount - 1; i++) {
      for (const row of data) {
        links.push({
          source: nodesPerLevel[i].get(row.level[i].value),
          target: nodesPerLevel[i + 1].get(row.level[i + 1].value),
          value: getLinkValue(row, hasLinks),
          tupleId: row.tupleId
        });
      }

      nodes.push(...nodesPerLevel[i + 1].values());
    }

    // We have two goals for our sorting of links.  We want the links associated with a particular
    // tuple to "meet up" at the nodes, so that they form a mostly continuous path end-to-end.  We
    // also don't want the links to be a complete webbed mess.  We try to make sure that the links
    // between the first two levels are pleasing, and then we let d3 do its best with the rest.
    // To create a pleasing set of links between level 0 and 1, we sort the links so that all
    // links between level-0/node-0 and level-1/node-0 are adjacent, followed by all links
    // between level-0/node-0 and level-1/node-1, etc.  This minimizes cross-over in the first
    // set of links.  We try to apply the same idea to the rest of the levels, but the sort on
    // level-0 will almost always win in practice.  The bands will leave level-1 at the same height
    // as they entered, but who knows where they'll go after that!  d3 will do its best by reordering
    // nodes in later levels, which may also improve appearance.

    links.sort((lhs, rhs) => {
      const isLevelNLink = (link, n) => link.source === nodesPerLevel[n].get(link.source.name);
      for (let level = 0; level < nodesPerLevel.length; level++) {
        const lhsLevelNLink = links.find((elem) => elem.tupleId === lhs.tupleId && isLevelNLink(elem, level));
        const rhsLevelNLink = links.find((elem) => elem.tupleId === rhs.tupleId && isLevelNLink(elem, level));

        if (!lhsLevelNLink) {
          return rhsLevelNLink ? -1 : 0;
        }
        if (!rhsLevelNLink) {
          return 1;
        }

        const lhsLevelNSourceNodeIndex = nodes.indexOf(lhsLevelNLink.source);
        const rhsLevelNSourceNodeIndex = nodes.indexOf(rhsLevelNLink.source);
        if (lhsLevelNSourceNodeIndex !== rhsLevelNSourceNodeIndex) {
          return lhsLevelNSourceNodeIndex < rhsLevelNSourceNodeIndex ? -1 : 1;
        }

        const lhsLevelNTargetNodeIndex = nodes.indexOf(lhsLevelNLink.target);
        const rhsLevelNTargetNodeIndex = nodes.indexOf(rhsLevelNLink.target);
        if (lhsLevelNTargetNodeIndex !== rhsLevelNTargetNodeIndex) {
          return lhsLevelNTargetNodeIndex < rhsLevelNTargetNodeIndex ? -1 : 1;
        }
      }

      if (lhs.tupleId !== rhs.tupleId) {
        return lhs.tupleId < rhs.tupleId ? -1 : 1;
      }

      return 0;
    });
  }

  // Set the sankey diagram properties
  const sankey = d3Sankey()
    .nodeWidth(nodeWidth)
    .nodePadding(padding)
    .linkSort(null)
    .nodeSort(null)
    .extent([
      [0, top],
      [width, height]
    ])
    .nodes(nodes)
    .links(links);

  // Compute the layout
  sankey({ nodes, links });

  // If there are any NaN values in nodes or links, render will fail.
  // Set both to [] so that we get an empty display instead. TFS 1481434.
  if (elementOfArrayContainsNaNProperty(nodes) || elementOfArrayContainsNaNProperty(links)) {
    nodes = [];
    links = [];
    return { nodes, links };
  }

  if (levelCount === 1) {
    nodes = nodes.filter((node) => node.depth === 0);
  }

  nodes = nodes.filter((node) => node.value);
  links = links.filter((link) => nodes.includes(link.source) && nodes.includes(link.target));

  // Add colors, this needs to be the very last thing done to ensure palette is applied correctly
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.color = palette[i % palette.length];
    for (const link of node.sourceLinks) {
      link.color = node.color;
    }
  }

  return { nodes, links };
}

function elementOfArrayContainsNaNProperty (dataArray) {
  // If any of these properties of a node or link element contain a NaN value, the viz will not render.
  const propertiesToCheckForNaN = ['x', 'y', 'x0', 'y0', 'x1', 'y1', 'width', 'height'];

  for (const element of dataArray) {
    if (!element) continue;

    for (const propertyName in element) {
      if (!propertiesToCheckForNaN.includes(propertyName)) continue;

      if (Object.prototype.hasOwnProperty.call(element, propertyName)) {
        const thisValue = element[propertyName];
        if (typeof thisValue === 'number' && isNaN(thisValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function getLinkValue (row, hasLinks) {
  if (!hasLinks) return 1; // If there's no field on edge, make all links the same weight

  const value = row.edge[0].value;

  return typeof value === 'number' && !isNaN(value) ? Math.max(0, value) : 0;
}

function getWorksheet () {
  return tableau.extensions.worksheetContent
    ? tableau.extensions.worksheetContent.worksheet
    : tableau.extensions.dashboardContent.dashboard.worksheets[0];
}
