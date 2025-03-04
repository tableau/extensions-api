"use strict";

(function () {
  let dashboardObjects = [];
  let zoneId = -1;

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(async function () {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboardObjects = dashboard.objects;
      console.log(dashboardObjects);

      $("#execute-command-btn").prop("disabled", false);
      $("#execute-command-btn").click(handleEventButtonClick);

      zoneId = tableau.extensions.dashboardObjectId;

      const { isPresentationMode } = await tableau.extensions.workbook.executeCommandAsync("tabui", "get-is-presentation-mode", {});
      if (!isPresentationMode) {
        $(".container").css("display", "block");

        await tableau.extensions.workbook.executeCommandAsync("tabdoc", "set-zone-is-hidden", {
          bool: false,
          "zone-ids": [zoneId],
          dashboard: dashboard.name,
        });
      }

    });
  });

  async function handleEventButtonClick() {
    const commandNamespace = $("#namespace").val();
    const commandId = $("#command").val();
    const args = getInput();
    const output = await tableau.extensions.workbook.executeCommandAsync(commandNamespace, commandId, args);
    $("#output").text(JSON.stringify(output, null, 2));
  }

  function getInput() {
    let input = {};
    try {
      input = JSON.parse($("#input").val());
    } catch {
      alert("Input is invalid JSON, ignoring.");
    }

    return input;
  }
})();
