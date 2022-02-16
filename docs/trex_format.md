---
title: Add Tableau Workbook Formatting
layout: docs
---

To help your dashboard extension match the look and feel of the dashboard in which it is placed, you can apply the formatting styles used in the workbook to the HTML elements in your extension. When the formatting changes in the workbook, the corresponding styles are updated in your extension.

**In this section:**
 
* TOC
{:toc}

----


## Apply Tableau classes to HTML elements

Starting with the Dashboard Extensions API v1.7 library, and supported with Tableau 2021.4 or later, you can apply workbook formatting styles by specifying the class on the HTML elements in your extension. The specific Tableau classes to use are defined in the [`ClassNameKey`]({{site.baseurl}}/docs/enums/tableau.classnamekey.html){:target="_blank"} enum.

| HTML style (string literal) | ClassNameKey enum|
| :------------  | :---------- |
| `tableau-dashboard-title` | `tableau.ClassNameKey.DashboardTitle` |
| `tableau-story-title` | `tableau.ClassNameKey.StoryTitle` |
| `tableau-tooltip` | `tableau.ClassNameKey.Tooltip` |
| `tableau-worksheet` | `tableau.ClassNameKey.Worksheet` |
| `tableau-worksheet-title` | `tableau.ClassNameKey.WorksheetTitle` |


### As an HTML class

To apply the formatting in the body of your HTML page to HTML elements, use the string literal `tableau-*` for the `ClassNameKey` enum. For example, to apply the worksheet title formatting you set the `class` for the HTML element in your extension (`h1`, `h2`, etc.) to `"tableau-worksheet-title"`.  

```html
<h2 class="tableau-worksheet-title">Subheader, using tableau-worksheet-title class</h2>
     
```

### In JavaScript code

To reference the workbook formatting in your JavaScript code, use the enum directly. For example, to add the formatting used in the worksheet title, you could use the JQuery method (`.addClass`) to add the `tableau.ClassNameKey.WorksheetTitle` to an element on your page. The following example applies the formatting to a heading with the id `someTitle`.

```javascript

$('#someTitle').addClass(tableau.ClassNameKey.WorksheetTitle);

```

You could also create a JavaScript function that has `ClassNameKey` as an parameter, and use that function to process and apply the formatting in some way.

```javascript

myFormattingFunction(tableau.ClassNameKey.WorksheetTitle); 

// does something with the worksheet title

```

## Access information about the formatting styles in the workbook

You can access the formatting used in a Tableau workbook from the `tableau.extensions.environment.workbookFormatting` property. The `workbookFormatting` property, `formattingSheets` contains an array of CSS properties for the workbook, organized by `ClassNameKey`.  For example, if you wanted to view the formatting styles available using the Chrome DevTools, you could add the following JavaScript code and then view the results in the Console window by navigating the array. 

```javascript

if (tableau.extensions.environment.workbookFormatting) {
  console.log(tableau.extensions.environment.workbookFormatting.formattingSheets);
};

```

Or to just print out the formatting information in the Console window you could do something like the following:

```javascript

let formattingSheets = tableau.extensions.environment.workbookFormatting.formattingSheets;
formattingSheets.forEach(function (formattingSheet) {
    console.log("The formatting sheet is " + formattingSheet.classNameKey + " " + JSON.stringify(formattingSheet.cssProperties));
  });

```

## Set an event listener on workbook format changes

You can set an event listener on changes to the formatting in the workbook. The new event type is `WorkbookFormattingChanged`. The `WorkbookFormattingChanged` event is triggered whenever the workbook formatting is changed in Tableau authoring mode. This includes changes in the font, the font size, whether it is bold, italic, or underlined, and changes in color. 

```javascript

dashboard.addEventListener(tableau.TableauEventType.WorkbookFormattingChanged, (event) => {
  console.log(event.formatting);
  // take some other actions based on the change 
});

```

For more information about using event listeners, see [Events and Event Handling]({{site.baseurl}}/docs/trex_events.html).

## What's Next

* To see a working sample dashboard extension that uses workbook formatting, see the JavaScript [Formatting](https://github.com/tableau/extensions-api/tree/main/Samples/Formatting){:target="_blank"} sample in the Samples folder, or the TypeScript [Formatting](https://github.com/tableau/extensions-api/tree/main/Samples-Typescript/Formatting){:target="_blank"} sample in the Samples-Typescript folder.

* For information about accessing the formatting styles in a workbook, see [workbookFormatting]({{site.baseurl}}/docs/interfaces/environment.html#workbookformatting){:target="_blank"} in the API reference documentation.
