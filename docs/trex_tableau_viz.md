---
title: Add Tableau Viz to your Dashboard Extensions
layout: docs
---

Tableau Viz provides a lightweight method for creating visualizations in Tableau. You provide a declarative description of graph or chart, and then call a method to render the description as an SVG image that you can embed in your dashboard extension. The description includes the data (or programmatically adds the data) and specifies the type of chart you wish to create and how it should be encoded. This feature is available through the Dashboard Extensions API and employs the same visualization pipeline that Tableau uses.



**In this section**

* TOC
{:toc}

---

## What you need to get started

Tableau Viz is integrated with the Tableau Dashboard Extensions API. To add visualizations to your extension requires the following versions of Tableau and the Dashboard Extensions JavaScript library.

* Tableau 2021.3 and later

* Dashboard Extensions API library (version 1.6 and later)


---


## The components of a Tableau Viz

There are three main steps in creating a Tableau Viz image.

* Provide the description (or specification) of the image

* Call the Dashboard Extensions method to create the image

* Display the SVG image in the dashboard extension


<div class="mermaid">
graph LR
   A:[Create input specification] --> B:[Call createVizImageAsync] --> C:[Display SVG in dashboard extension]
</div>

## Input specification

A Tableau Viz is defined by a specification. This is the `inputSpec` that you pass as an argument to the `createVizImageAsync` method. The `inputSpec` is a JavaScript object that contains the embedded data and visual specification details. There are two main parts to the `inputSpec`:

* the `data:` (an array of objects, for example, the selected measures and dimensions in the dashboard)

* information about how to format that data (size of viz, mark type, mark color, encoding)

The `inputSpec` is a structured JavaScript object. The following example shows a specification that creates a simple bar chart. In this example, the data values are statically assigned as part of the specification. In many cases, you would probably programmatically assign the values based upon mark selection in the dashboard or based on some other selection criteria.


```javascript

            var yourEmbeddedDataSpec = {
                description: 'A simple chart with embedded data.',
                data: {
                    values: [
                        { Category: 'A', Sales: 28 },
                        { Category: 'B', Sales: 55 },
                        { Category: 'C', Sales: 43 },
                        { Category: 'D', Sales: 91 },
                        { Category: 'E', Sales: 81 },
                        { Category: 'F', Sales: 53 },
                        { Category: 'G', Sales: 19 },
                        { Category: 'H', Sales: 87 },
                        { Category: 'I', Sales: 52 }
                    ]
                },
                mark: tableau.MarkType.Bar,
                encoding: {
                    columns: { field: 'Category', type: tableau.VizImageEncodingType.Discrete },
                    rows: { field: 'Sales', type: tableau.VizImageEncodingType.Continuous, hidden: true},
                    color: { field: 'Sales', type: tableau.VizImageEncodingType.Continuous, palette: 'tableau-map-temperatur'},
                    text: { field: 'Category', type: tableau.VizImageEncodingType.Discrete },
                    size: { field: 'Category', type: tableau.VizImageEncodingType.Discrete}
                }
            };

```

For more information about the `inputSpec`, see [Tableau Viz Reference]({{site.baseurl}}/docs/trex_tableau_viz_ref.html).

---

## Call createVizImageAsync

After you create the `inputSpec` you pass it as an argument to the `createVizImageAsync` method. The method returns an SVG image that can be used by the extension. This example takes the `yourEmbeddedDataSpec` that was defined in the previous step, and uses that to describe the chart to create.
  
 ```javascript
 tableau.extensions.createVizImageAsync(yourEmbeddedDataSpec).then((svg) => {
     ...         
            });
  
  ```
  

## Display the SVG image in the dashboard extension

The asynchronous method returns an SVG image as the promise. Here is one way of taking that SVG and embedding it as a an element in your extension web page. In this example, the `svg` is converted to a JavaScript `Blob`, and the `Blob` is used as the image data source in the hosting dashboard extensions page.

```javascript
            tableau.extensions.createVizImageAsync(yourEmbeddedDataSpec).then((svg) => {
                console.log(svg);
                var blob = new Blob([svg], { type: 'image/svg+xml' });
                var url = URL.createObjectURL(blob);
                var image = document.createElement('img');
                image.src = url;
                image.style.maxWidth = '100%';
                var vizApiElement = document.getElementById('viz-container');
                vizApiElement.appendChild(image);
                image.addEventListener('load', function () { return URL.revokeObjectURL(url); }, { once: true });
            }, (err) => {
                console.log(err);
            });

```
 
Tableau renders an image that looks something like this:


![Tableau Viz SVG image]({{site.baseurl }}/assets/vizapi_demo3.svg)



----
  
## What's next?

Now that you have seen the basic steps for adding a Tableau Viz to a dashboard extension, you can try adding Tableau Viz to your own dashboard extensions, or to one of the samples.

* For information about the Tableau Viz `inputSpec` and all the options for specifying the visualization, see [Tableau Viz Reference]({{site.baseurl}}/docs/trex_tableau_viz_ref.html).

* Review the [`tableau.extensions.createVizImageAsync`]({{site.baseurl}}/docs/interfaces/extensions.html#createvizimageasync){:target="_blank"} method for information about the API.

* Check out the [Tableau Viz Sample - VizImage](https://github.com/tableau/extensions-api/tree/main/Samples/VizImage){:target="_blank"} and see how it works. Examine the source code to find out ways you can incorporate Tableau Viz into your own dashboard extensions.

---

## Troubleshoot Tableau Viz images in dashboard extensions

You can use the same tools that you use to debug dashboard extensions to debug problems that occur when you use Tableau Viz to create images. For information about debugging your extension, see [Debug Extensions in Tableau Desktop](https://tableau.github.io/extensions-api/docs/trex_debugging.html){:target="_blank"} and [Debug Extensions in Tableau Server and Tableau Online](https://tableau.github.io/extensions-api/docs/trex_debug_server.html){:target="_blank"}.



### Tableau Viz Error Messages

The following is a list of common error messages that you might encounter and includes steps for fixing those errors. The error messages appear in the Console window when you use the Chrome or Chromium debugging tools.

For specific issues with the current release, see [Tableau Viz - Known Issues]({{site.baseurl}}/docs/trex_known_issues.html#tableau-viz---known-issues).

#### Invalid Palette Name

`Error: internal-error: {"vizapiErrorMsg":"Invalid Palette Name"}`

Be sure that you use one of the palette names listed for the `color` key under encoding in the `inputSpec`. See [Encoding]({{site.baseurl}}/docs/viz_reference.html#encoding). Note that the palette must be supported by the version of Tableau that you are using, and that the palette colors are subject to change. In addition, there are some palette colors can only be used for continuous or discrete fields, but not for both.


#### Encoding column (or row) has invalid type

`Error: internal-error: {"vizapiErrorMsg":"Encoding columns has invalid type. Accepted values are Continuous and Discrete"}`

When you encode the fields in the `inputSpec`, you need to make sure that the discrete fields (blue pills) and continuous fields (green pills) are mapped to the correct types: `tableau.VizImageEncodingType.Discrete` and `tableau.VizImageEncodingType.Continuous`.


#### Invalid JSON

The `inputSpec` is a JavaScript object that Tableau converts to JSON for processing. The `inputSpec` needs to be in the correct format and must include all required elements. You must encode columns and fields. For the list of required elements, see [Tableau Viz Reference]({{site.baseurl}}/docs/trex_tableau_viz_ref.html).

