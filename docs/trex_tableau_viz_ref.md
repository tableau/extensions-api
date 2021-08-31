---
title: Tableau Viz Reference
layout: docs
--- 
The programming interface for Tableau Viz consists of a method call in the Dashboard Extensions API called `createVizImageAsync`. The `createVizImageAsync` method returns an SVG image. The method takes a single argument, a JavaScript object (the `inputSpec`). The `inputSpec` describes the viz that you want to create and includes the data, or a reference to the data, and the information about how you want that data displayed.

The following section describes the components and syntax of the `inputSpec`. For information about how to add a Tableau Viz, see [Add Tableau Viz to your Dashboard Extensions]({{site.baseurl}}/docs/trex_tableau_viz.html).

**In this section**

* TOC
{:toc}



## The createVizImageAsync method

The `createVizImageAsync` method is one of the methods in the Tableau Dashboard Extensions API `extensions` namespace. The method has the following syntax:

```javascript

createVizImageAsync( inputSpec:  *object* ): Promise<string> 

```

This method takes a single argument, the `inputSpec`, a JavaScript object, and returns the SVG description of that image. To call this method, you first initialize the Dashboard Extensions API (`tableau.extensions.initialize()`). You then create the `inputSpec` object that defines your graphic.


## JSON specification for `inputSpec` object

The `inputSpec` is a JavaScript object that uses JSON format and specifies the attribute-value pairs to use to create the SVG image. The object consists of the `data` and the attributes that specify how to format the data, for example, `mark`, `markcolor`, `size`, and `encoding`. The `data` is an array of objects. The `data` is listed in row-level order, where each object represents one item. The `mark` attribute specifies the type of mark to use in the image,for example, you can change the marks from bars to lines. 

The following shows an example `inputSpec` that creates a bar chart image.

```json


{
  "description": "A bar chart with multiple encodings",
  "size": {"width": 800, "height": 600},
  "data": {
    "values": [
      {"Category": "A", "Sales": 28, "Weather": "Sun", "Quantity": 3},
      {"Category": "B", "Sales": 55, "Weather": "Sun", "Quantity": 6},
      {"Category": "C", "Sales": 43, "Weather": "Sun", "Quantity": 9}
    ]
  },
  "mark": "bar",
  "markcolor": "#FFA500",
  "encoding": {
    "columns": {"field": "Sales", "type": "continuous"},
    "rows": {"field": "Category", "type": "discrete", "hidden": "true"},
    "color": {"field": "Weather", "type": "discrete", "palette": "seattle_grays_10_0"},
    "size": {"field": "Quantity", "type": "continuous"},
    "text": {"field": "Category", "type": "discrete"}
  }
}


```

---
## Descripion of `inputSpec` keys

The following table describes the keys of the elements in the `inputSpec`, the JavaScript JSON object.


### `description`

(Optional)    A description about the visualization. Currently, the description is not used anywhere and is not visible when the image is generated. However, it might be helpful to use this description as you comment your code.

### `title`

(Optional)    Creates a title for the image.

```json
title: "My Custom Viz", 

```

### `data`

(Required) The data to use to create the image. The `data` consists of an array of objects, specified with the `"values"` key. Data is listed in row level order, where each object represents one item.

```json
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

```

### `mark`

(Optional) Supported mark types include: `bar`, `line`, `area`, `square`, `circle`, `text`. If no mark type is specified, the generated image will use the Tableau default for that data.


### `markcolor`

Specifies a mark color for all marks, for example, hex values. This is equivalent to selecting an arbitrary color in the Color Shelf of the Marks card in Tableau.

```json
 markcolor: "#FFA500",

```

### `size`

(Optional) Specifies the size of the image in pixels. The size is described with width and height dimensions.

| Key |  Value |
|:--- |:--- |
|`width` | Width of the SVG image. |
|`height`| Height of the SVG image.|
|`showlegend` | Boolean (`true`, `false`). Specifies whether to show or hide the Size legend. |

If you specify the size, you must specify both the width and height. If you don't specify a size, the image uses the default size (600 x 400).

```json
"size": {"width": 800, "height": 600},

```

### `encoding`

Corresponds to the Marks card in Tableau and describes how the marks (measures and dimensions) are encoded. In Tableau, when you drag fields onto the properties on the Marks card it encodes the data in the view. The `encoding` key lets you set the properties of the marks for the image. <br/> The `columns`, `rows` keys allow you to define the layout of your view, just like you do in Tableau today. You can also map fields to the `color`, `size`, and `text` properties. 
Within these properties, you must specify the field to encode and its type (`continuous` or `discrete`). Some keys allow you to set additional values as shown in the following table.

---

#### `columns` and `rows`

| Key |  Value |
|:--- |:--- |
|`field` | The name of the field to encode. |
|`type`| The type of field, either `discrete` (blue "pill") or `continuous` (green "pill"). You can also specify the type using the enumerations: `tableau.VizImageEncodingType.Discrete` or `tableau.VizImageEncodingType.Continuous`.|
|`hidden` | Boolean (`true`, `false`). Specifies whether to show or hide the column or row header. |
|`title` | Specifies a custom field label (x-axis, or header) or custom axis title (y-axis) for the columns and rows. |
| `showtitle` | Boolean (`true`, `false`). Specifies whether to show or hide the custom column or row title. |

The following is an example of how you might specify the encodings for columns and rows:

```json

encoding: {
  columns: {field: "Sales", type: "continuous", title: "My Custom Title", showtitle: false},
  rows: {field: "Category", type: "discrete"  }
} 

```

#### `color`

The `color` key corresponds to the Color button on the Marks card. The color can contain the following keys:

| Key |  Value |
|:--- |:--- |
|`field` | The name of the field to encode. |
|`type`| The way the data is distributed in the view (`discrete` or `continuous`).|
|`palette` | Specifies color encoding for the field from the Tableau palette. Note that there are separate palettes for `discrete` or `continuous` fields. |
|`showlegend` | Boolean (`true`, `false`). Specifies whether to show or hide the color legend. |


**`palette` names for `continuous` fields**

You can specify one of the following Tableau color palettes with the `palette` key for continuous fields. Note that the list of available palettes depends upon the version of Tableau that is being used. Be aware that the palette colors are subject to change.

The following is an example that shows how you might encode a continuous field with a Tableau palette.

```json

encoding: {
   ...
   color: { field: 'Measure', type: 'continuous', palette: 'green_blue_white_diverging_10_0'},
   ...
}

```


| Continuous colors palettes |  Palette name |
|:--- |:--- |
| ![Tableau Continuous Palette]({{site.baseurl}}/assets/continuous_palette.png) | `blue_10_0` <br/>  `orange_10_0` <br/> `green_10_0` <br/> `red_10_0` <br/> `purple_10_0` <br/> `brown_10_0` <br/> `gray_10_0` <br/> `gray_warm_10_0` <br/> `blue_teal_10_0` <br/> `orange_gold_10_0` <br/> `green_gold_10_0` <br/> `red_gold_10_0` <br/> `orange_blue_diverging_10_0` <br/> `red_green_diverging_10_0` <br/> `green_blue_diverging_10_0` <br/> `red_blue_diverging_10_0` <br/> `red_black_10_0` <br/> `gold_purple_diverging_10_0` <br/> `red_green_gold_diverging_10_0` <br/> `sunrise_sunset_diverging_10_0` <br/> `orange_blue_white_diverging_10_0` <br/> `red_green_white_diverging_10_0` <br/> `green_blue_white_diverging_10_0` <br/> `red_blue_white_diverging_10_0` <br/> `red_black_white_diverging_10_0` <br/> `tableau-blue-light` <br/> `tableau-orange-light` <br/> `tableau-orange-blue-light` <br/> `tableau-map-blue-green` <br/> `tableau-map-temperatur`  |



**`palette` names for `discrete` fields**

You can specify one of the following Tableau color palettes with the `palette` key for discrete fields. Note that the list of available palettes depends upon the version of Tableau that is being used. Be aware that the palette colors are subject to change.

The following is an example that shows how you might encode a discrete field with a Tableau palette.

```json
encoding: {
   ...
   color: { field: 'Category', type: 'discrete', palette: 'seattle_grays_10_0'},
   ...
}

```

| Discrete color palettes |  Palette name |
|:--- |:--- |
| ![Tableau Discrete Palette]({{site.baseurl}}/assets/discrete_palette.png) |  `tableau10_10_0` <br/> `tableau20_10_0` <br/> `color_blind_10_0` <br/>`seattle_grays_10_0`<br/>`traffic_light_10_0` <br/>`superfishel_stone_10_0` <br/>`miller_stone_10_0` <br/>`nuriel_stone_10_0`<br/>`jewel_bright_10_0`<br/>`summer_10_0`<br/>`winter_10_0`<br/>`green_orange_cyan_yellow_10_0`<br/>`blue_red_brown_10_0`<br/>`purple_pink_gray_10_0`<br/>`tableau-10`<br/>`tableau-10-medium`<br/>`tableau-20`<br/>`blue_10_0`<br/>`orange_10_0`<br/>`green_10_0`<br/>`red_10_0`<br/>`purple_10_0`<br/>`brown_10_0`<br/>`gray_10_0`<br/>`gray_warm_10_0`<br/>`blue_teal_10_0`<br/>`orange_gold_10_0`<br/>`green_gold_10_0`<br/>`red_gold_10_0`<br/>`cyclic_10_0` |

---
