---
title: Events and Event Handling
layout: docs
---

In Tableau dashboard extensions, event handling operates at the sheet level. In the Extensions API, the `sheet` is an abstract class that both `dashboard` and `worksheet` inherit from. You can add event listeners on individual sheets in a dashboard. However, you can't add an event listener on the entire dashboard itself. If you have an event listener, when the specified event is raised, the callback method you provide is called to handle the event. You can use event listeners to trigger specific actions based upon worksheet interactions.

The Tableau Extension API supports a range of events and provides methods for adding and removing event listeners. To manage the event listener, each sheet has an *event listener manager*. The manager provides a way to add or remove multiple events on sheets independently.

For example, a marks selection event can be raised for a particular sheet in a dashboard. Because a dashboard is also a sheet, a marks selection event could be raised on  any marks selection in the entire dashboard. Each event contains an anonymous object with information pertaining to that event, such as the type or name of event and sheet the event occurred on.
Listening to an event is done by calling the `addEventListener(type, callback)` method and passing in a callback function to handle the event. 

## Add an event listener  

1. Get the sheet object that you want to observe (this could be an individual sheet, or it could be the whole dashboard). 
2. Add the event listener by calling `addEventListener` and specifying the name of the event and the callback method to call. The name of the event must be one of the supported types defined in the `TableauEventName` enumeration. The callback method must handle the event object raised.


> **Note:** For information about the Tableau Extensions API, see <a href="{{ site.baseurl }}/docs/index.html" target="_blank">API Reference</a>. 


### Example 

In most cases, you can create an event listener by chaining the methods to the sheet object. In the following example, the name of the event is `tableau.TableauEventType.FilterChanged` or a `FilterChanged` event. When a user changes filters in the sheet, a `FilterChanged` is raised, and the callback method `filterChangedHandler` is called to handle the event. 

```javascript   
// ...
// Add filter event to each worksheet.  AddEventListener returns a function that will
// remove the event listener when called.
   let unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, filterChangedHandler);
   unregisterHandlerFunctions.push(unregisterHandlerFunction);
// ...
```  

For more information, check out the example extension, Filtering.
