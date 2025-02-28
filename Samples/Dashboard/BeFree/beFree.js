"use strict";

(function () {
  let dashboardObjects = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboardObjects = dashboard.objects;
      console.log(dashboardObjects);

      $("#execute-command-btn").prop("disabled", false);
      $("#execute-command-btn").click(handleEventButtonClick);
    });
  });

  async function handleEventButtonClick() {
    debugger;
    const commandNamespace = $("#namespace").val();
    const commandId = $("#command").val();
    const args = getInput();
    const output = await tableau.extensions.workbook.executeCommandAsync(commandNamespace, commandId, args);
    $("#output").text(JSON.stringify(output, null, 2));
  }

  function getInput() {
    let input = undefined;
    try {
      input = JSON.parse($("#input").val())
    } catch {
      alert('Input is invalid JSON, ignoring.')
    }

    return input;
  }
})();
