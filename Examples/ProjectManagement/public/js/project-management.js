$(document).ready(function () {
  let dashboard, worksheet;
  const wsName = "Project Status";    // This is the sheet we'll use for updating task info
  

  function onSelectionChanged(marksEvent) {
    const sheetName = marksEvent.worksheet.name;
    marksEvent.getMarksAsync().then((selectedMarks) => {
      handleSelectedMarks(selectedMarks, sheetName, true);
    });
  }

  function handleSelectedMarks(selectedMarks, sheetName, forceChangeSheet) {
    // If we've got selected marks then process them and show our update button
    if(selectedMarks.data[0].totalRowCount > 0) {
      populateTable(selectedMarks.data[0]);
      $("#updateItem").show();
    } else {
      resetTable();
      $("#updateItem").hide();
    }
    
  }

  tableau.addIn.initializeAsync().then(function () {

    // Initialization succeeded! Get the dashboard's name & log to console
    dashboard = tableau.addIn.dashboardContent.dashboard;

    for (const ws of dashboard.worksheets) {
      if (ws.name == wsName) {
        worksheet = ws;
      }
    }

    // Add mark selection event listener to our sheet
    worksheet.addEventListener('mark-selection-changed', onSelectionChanged);

    console.log("Extension Initialized. Running in dashboard named " + dashboard.name);
    console.log('Sheet info: ' + worksheet.name);
  }, function (err) {
    // something went wrong in initialization
    console.log("Error while Initializing: " + err.toString());
  });

  function resetTable() {
    $("#data_table tr").remove();
    var headerRow = $("<tr/>");
    headerRow.append("<th>Select a project to update</th>");

    $("#data_table").append(headerRow);
  }

  function populateTable(dt) {
    $("#data_table tr").remove();
    var headerRow = $("<tr/>");
    headerRow.append("<th>Assigned</th>");
    headerRow.append("<th>Project</th>");
    headerRow.append("<th>Due Date</th>");
    headerRow.append("<th>Completion Date</th>");
    $("#data_table").append(headerRow);

    let assignedIndex, projectIndex, dueIndex, completionIndex, rowIDIndex;

    // get our column indexes
    for (let c of dt.columns) {
      switch (c.fieldName) {
        case "Assigned":
          assignedIndex = c.index;
          break;
        case "Project":
          projectIndex = c.index;
          break;
        case "Due":
          dueIndex = c.index;
          break;
        case "Completion Date":
          completionIndex = c.index;
        case "SUM(RowID)":
          rowIDIndex = c.index;
          break;
        default:
          break;
      }
    }

    // add our rows for the selected marks
    for (var i = 0; i < dt.data.length; i++) {
      const rowID = dt.data[i][rowIDIndex].formattedValue;
      let dataRow = $("<tr id='row_" + rowID + "'/>");
      dataRow.append("<td>" + dt.data[i][assignedIndex].formattedValue + "</td>");
      dataRow.append("<td>" + dt.data[i][projectIndex].formattedValue + "</td>");
      dataRow.append('<td><input type="text" size="8" id="row_' + rowID + '_dueDate" value="' + dt.data[i][dueIndex].value + '" /></td>');
      dataRow.append('<td><input type="text" size="8" id="row_' + rowID + '_completionDate" value="' + dt.data[i][completionIndex].value + '" /></td>');
      $("#data_table").append(dataRow);
    }
  }

  $("form").submit(function(event){

    let formInputs = $("form#projectTasks :input[type='text']" );
    let postData = [];

    formInputs.each(function() {
      let c = $(this);
      postData.push({id: c[0].id, "value": c[0].value});
    });


    // Post it
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8765',
      data: JSON.stringify(postData),
      contentType: 'application/json'
    }).done(
      worksheet.getDataSourcesAsync().then( (dataSources) => {
        dataSources[0].refreshAsync();
      })
    );

    event.preventDefault();
  });

});