## Part 4 - Responding to Selection Changes

We now have a fully working example which allows us to get the selected marks for a sheet. Unfortunately, when the mark selection changes we don't update to those changes. The next part of our tutorial covers responding to user selection changes. This is actually an extremely simple process.

#### Adding the event listener

Throughout the extensions API, we provide ways to register for notifications about events occurring. The general signature is `object.addEventListener('event_name', callbackFunction)`. For selection changes, we get the worksheet object we want to listen on, and then call [`worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, handler)`](https://tableau.github.io/extensions-api/docs/interfaces/worksheet.html#addeventlistener). Whenever this sheet has a new selection, our `handler` function will be called and we can reload the data table with new data. In this case, our handler just re-fetches the data.

The other important aspect of the `addEventListener` function is that it returns a helper function that makes it easy to remove the event listener. When we re-initialize the data table, we check to see if our `unregisterEventHandlerFunction` function is defined, if it is, we unregister it, so we are only listening to one sheet at a time.

#### Trying it out

![Part 4 Screenshot](../assets/Part_4.gif)

[Next Section (Part 5 - Persisting Settings in the Workbook)](../Part_5/readme.md)