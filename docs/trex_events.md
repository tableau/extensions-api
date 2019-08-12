---
title: Events and Event Handling
layout: docs
---

Using the Extensions API, you can listen for events on objects, such as worksheets, parameters, and settings. The Tableau Extension API supports a range of events and provides methods for adding and removing event listeners. To manage the event listener, each object has an *event listener manager*. The manager provides a way to add or remove multiple events on objects independently.

In the Extensions API, the `sheet` is an abstract class that both `dashboard` and `worksheet` inherit from. Note that `sheet` inherits from the `EventListenerManager` (as do `parameter` and `settings` objects). You can add event listeners on individual sheets in a dashboard. However, you can't add an event listener on the entire dashboard itself. If you have an event listener, when the specified event is raised, the callback method you provide is called to handle the event. You can use event listeners to trigger specific actions based upon worksheet interactions.

For example, a marks selection event can be raised for a particular sheet in a dashboard. Each event contains an anonymous object with information pertaining to that event, such as the type or name of event and object the event occurred on.
Listening to an event is done by calling the `addEventListener(eventType, callback)` method and passing in a callback function to handle the event.

## Supported events

The `addEventListener` method is available for specific objects (worksheet, parameter, settings, and dashboard). If the object does not support the specified `eventType`,
the method throws an exception. The following table shows the event types supported by objects.

| object | eventType |
| ------  | ----- |
| Worksheet | `FilterChanged` , `MarkSelectionChanged` |
| Parameter | `ParameterChanged` |
| Settings |  `SettingsChanged` |
| Dashboard |  None available    |


## Add an event listener  

1. Get the object that you want to observe (this could be an individual sheet, or it could be a parameter change). 
2. Add the event listener by calling `addEventListener` and specifying the type of event (`eventType`) and the callback method to call. The name of the event must be one of the supported types defined in the `TableauEventType` enumeration. The callback method must handle the event object raised.

**Note:** For information about the Tableau Extensions API, see <a href="{{ site.baseurl }}/docs/index.html" target="_blank">API Reference</a>.


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

For more information, check out the sample extension, Filtering.

