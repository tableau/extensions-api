$(document).ready(function() {
  
  // Hook up an event handler for the load button clicking
  $("#initializeButton").click(function() {

    // Disable the button after it's been clicked
    $("#initializeButton").prop('disabled', true);

    tableau.addIn.initializeAsync().then(function() {

      // Initialization succeeded! Get the dashboard's name
      var dashboard = tableau.addIn.dashboardContent.getDashboard(); 

      // Display the results in the UI
      $("#resultBox").html("I'm running in a dashboard named <strong>" + dashboard.getName() + "</strong>");
    }, function(err) {

      // something went wrong in initialization
      $("#resultBox").html("Error while Initializing: " + err.toString());
    });
  });
});