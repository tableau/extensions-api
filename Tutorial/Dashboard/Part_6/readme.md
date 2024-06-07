## Part 6 - Performing Actions

The final step of our tutorial will be about performing actions on our dashboard. For our example, this will mean filtering a viz based on the values in a selected column. When the user has some marks selected, we want to allow them to select a column in the data table and then filter their entire visualization down to just the values in that column.

#### Converting the Headers to Buttons

The DataTables component we are using to display our data makes it a bit tricky to enable header buttons, but we do so by disabling sorting of the column and by adding a headerCallback function which reformats the headers as clickable link buttons.

#### Doing the Filtering

For our filtering code, we first need to get the domain (unique values) of the column which the user has clicked on. Then we get our worksheet object and make a call to [`worksheet.applyFilterAsync(fieldName, columnDomain, tableau.FilterUpdateType.Replace)`](https://tableau.github.io/extensions-api/docs/interfaces/worksheet.html#applyfilterasync).

#### Resetting the Filter

The final thing we want to add is an ability to clear the filter we have just applied. We do this by first keeping track of all the columns which we have filtered by. The next step is to add a button which the user can click to reset the filter. The final step is to add the `resetFilters()` function which calls [`worksheet.clearFilterAsync(columnName)`](https://tableau.github.io/extensions-api/docs/interfaces/worksheet.html#clearfilterasync) for each filtered column.

#### Trying it out

To see this part in action, click the header of a categorical column and see the viz get filtered.

![Part 6 Screenshot](../assets/Part_6.gif)

That's it! We hope this tutorial was helpful. Please open issues for anything which was confusing or incorrect!


[Back to Intro](../readme.md)
