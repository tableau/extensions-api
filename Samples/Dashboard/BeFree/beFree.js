"use strict";

(function () {
  let dashboard;
  let dashboardObjects = [];
  let zoneId = -1;
  let api;

  $(document).ready(function () {
    api = tableau.extensions;

    api.initializeAsync().then(async function () {
      dashboard = api.dashboardContent.dashboard;
      dashboardObjects = dashboard.objects;
      console.log(dashboardObjects);

      $("#execute-command-btn").prop("disabled", false);
      $("#execute-command-btn").click(handleEventButtonClick);
      $("#execute-example-btn").prop("disabled", false);
      $("#execute-example-btn").click(handleExampleButtonClick);

      zoneId = api.dashboardObjectId;

      const { isPresentationMode } = await api.workbook.executeCommandAsync("tabui", "get-is-presentation-mode", {});
      if (!isPresentationMode) {
        $(".container").css("display", "block");

        await api.workbook.executeCommandAsync("tabdoc", "set-zone-is-hidden", {
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
    const output = await api.workbook.executeCommandAsync(commandNamespace, commandId, args);
    $("#output").text(JSON.stringify(output, null, 2));
  }

  function handleExampleButtonClick() {
    const sample = $("#examples").val();
    switch (sample) {
      case "grid": {
        createGridlayout();
      }
    }
  }

async function createGridlayout() {
  await setExtensionZoneVisibility(false);
  const sheetListItems = await getSheetList();
  const gridSize = Math.ceil(Math.sqrt(sheetListItems.length));

  const { width, height } = await getDashboardDimensions();

  let zones = dashboard.objects.map((o) => o.id);
  await addDashboardObject("vertical");

  let newZoneId;
  newZoneId = dashboard.objects.find((o) => o.name === "Vertical Container" && !zones.includes(o.id)).id;
  zones = dashboard.objects.map((o) => o.id);

  await distributeChildZonesEvenly(newZoneId);
  await addDashboardObject("blank");

  const blankZoneId = dashboard.objects.find((o) => o.name === "Blank" && !zones.includes(o.id)).id;

  for (let row = 0; row < gridSize; row++) {
    const dropLocationX = Math.floor(width / 2);
    const dropLocationY = row === 0 ? height - 100 : Math.floor(height * (1 / (row + 1)));
    await addDashboardObject("horizontal", { x: dropLocationX, y: dropLocationY });

    newZoneId = dashboard.objects.find((o) => o.name === "Horizontal Container" && !zones.includes(o.id)).id;
    zones = dashboard.objects.map((o) => o.id);

    await distributeChildZonesEvenly(newZoneId);
  }

  await removeZoneFromDashboard(blankZoneId);

  let index = 0;
  const promises = [];

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const dropLocationX = width - 100;
      const dropLocationY = Math.floor(height / gridSize / 2 + (row * height) / gridSize);
      const dropLocation = { x: dropLocationX, y: dropLocationY };
      const sheetName = sheetListItems[index++]?.name;

      const promise = sheetName
        ? api.workbook.executeCommandAsync("tabdoc", "drop-on-dashboard", {
            "add-as-floating": false,
            dashboard: dashboard.name,
            "zone-type": "viz",
            "drop-location": dropLocation,
            worksheet: sheetName,
          })
        : addDashboardObject("blank", dropLocation);

      promises.push(promise);
    }
  }

  await Promise.all(promises);

  await setExtensionZoneVisibility(true);
}

async function setExtensionZoneVisibility(visible) {
  await api.workbook.executeCommandAsync("tabdoc", "set-zone-is-hidden", {
    bool: !visible,
    "zone-ids": [zoneId],
    dashboard: dashboard.name,
  });
}

async function getSheetList() {
  const {
    sheetList: { sheetListItems },
  } = await api.workbook.executeCommandAsync("tabdoc", "get-sheet-list", {
    "include-all-hidden": false,
    dashboard: dashboard.name,
  });

  return sheetListItems;
}

async function getDashboardDimensions() {
  const {
    dashboardSizePresModel: { w: width, h: height },
  } = await api.workbook.executeCommandAsync("tabdoc", "get-dashboard-sizing", {
    dashboard: dashboard.name,
  });

  return { width, height };
}

async function addDashboardObject(type, dropLocation) {
  await api.workbook.executeCommandAsync("tabdoc", "add-dashboard-object", {
    "add-as-floating": false,
    dashboard: dashboard.name,
    "dashboard-object-identifer": `object.${type}`,
    ...(dropLocation && { "drop-location": dropLocation }),
  });
}

async function distributeChildZonesEvenly(zoneId) {
  await api.workbook.executeCommandAsync("tabdoc", "toggle-distribute-child-zones-evenly", {
    dashboard: dashboard.name,
    "zone-id": zoneId,
  });
}

async function removeZoneFromDashboard(zoneId) {
  await api.workbook.executeCommandAsync("tabdoc", "hide-zone", {
    "zone-id": zoneId,
    dashboard: dashboard.name,
  });
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
