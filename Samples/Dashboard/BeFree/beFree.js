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
      $("#execute-example-btn").prop("disabled", false);
      $("#execute-theme-btn").prop("disabled", false);
      $("#execute-command-btn").on("click", handleEventButtonClick);
      $("#execute-example-btn").on("click", handleExampleButtonClick);
      $("#execute-theme-btn").on("click", handleThemeButtonClick);
      $("#themes").on("change", (el) => (el.target.value === "custom" ? $("#custom-theme").show() : $("#custom-theme").hide()));

      setupVideoListener();

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
      case "grid":
        return createGridlayout();
        case "remove-chart-lines":
          return removeChartLines();
    }
  }

  function handleThemeButtonClick() {
    const theme = $("#themes").val();
    if (theme === "custom") {
      applyThemeJson($("#custom-theme").val());
    } else {
      applyTheme(theme);
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

  async function removeChartLines() {
    const sheetListItems = await getSheetList();
    for (const { name } of sheetListItems) {
      await api.workbook.executeCommandAsync("tabdoc", "set-sheet-formatting", {
        sheet: name,
        "pane-formattings": {"*****":"*****"},
        "sheet-formatting": "<style><style-rule element=\"axis\"><format attr=\"stroke-size\" value=\"0\" /><format attr=\"line-visibility\" value=\"off\" /><format attr=\"tick-color\" value=\"#00000000\" /></style-rule><style-rule element=\"header\"><format attr=\"border-width\" data-class=\"total\" scope=\"rows\" value=\"0\" /><format attr=\"border-style\" data-class=\"total\" scope=\"rows\" value=\"none\" /><format attr=\"band-color\" scope=\"rows\" value=\"#00000000\" /><format attr=\"band-color\" scope=\"cols\" value=\"#00000000\" /><format attr=\"border-width\" data-class=\"subtotal\" value=\"0\" /><format attr=\"border-style\" data-class=\"subtotal\" value=\"none\" /></style-rule><style-rule element=\"pane\"><format attr=\"border-width\" data-class=\"total\" scope=\"rows\" value=\"0\" /><format attr=\"border-style\" data-class=\"total\" scope=\"rows\" value=\"none\" /><format attr=\"border-width\" data-class=\"total\" scope=\"cols\" value=\"0\" /><format attr=\"border-style\" data-class=\"total\" scope=\"cols\" value=\"none\" /><format attr=\"band-color\" scope=\"rows\" value=\"#00000000\" /><format attr=\"band-color\" scope=\"cols\" value=\"#00000000\" /><format attr=\"border-width\" data-class=\"subtotal\" value=\"0\" /><format attr=\"border-style\" data-class=\"subtotal\" value=\"none\" /></style-rule><style-rule element=\"table\"><format attr=\"band-size\" scope=\"rows\" value=\"1\" /><format attr=\"band-size\" scope=\"cols\" value=\"1\" /></style-rule><style-rule element=\"dropline\"><format attr=\"stroke-size\" value=\"0\" /><format attr=\"line-visibility\" value=\"off\" /></style-rule><style-rule element=\"refline\"><format attr=\"stroke-size\" value=\"0\" /><format attr=\"line-visibility\" value=\"off\" /></style-rule><style-rule element=\"gridline\"><format attr=\"line-pattern-only\" scope=\"cols\" value=\"dashed\" /><format attr=\"line-visibility\" scope=\"cols\" value=\"off\" /><format attr=\"stroke-size\" value=\"0\" /></style-rule><style-rule element=\"zeroline\"><format attr=\"line-pattern-only\" scope=\"rows\" value=\"solid\" /><format attr=\"line-pattern-only\" scope=\"cols\" value=\"solid\" /><format attr=\"stroke-size\" scope=\"cols\" value=\"0\" /><format attr=\"line-visibility\" scope=\"cols\" value=\"off\" /><format attr=\"stroke-size\" scope=\"rows\" value=\"0\" /><format attr=\"line-visibility\" scope=\"rows\" value=\"off\" /></style-rule><style-rule element=\"table-div\"><format attr=\"div-level\" scope=\"rows\" value=\"0\" /><format attr=\"stroke-size\" scope=\"rows\" value=\"0\" /><format attr=\"line-visibility\" scope=\"rows\" value=\"off\" /><format attr=\"stroke-size\" scope=\"cols\" value=\"0\" /><format attr=\"line-visibility\" scope=\"cols\" value=\"off\" /></style-rule></style>"
      });
    }
  }

  async function applyTheme(theme) {
    await api.workbook.executeCommandAsync("tabdoc", "theme", {
      "style-theme": theme,
    });
  }

  async function applyThemeJson(json) {
    await api.workbook.executeCommandAsync("tabdoc", "apply-theme", {
      "file-contents": json,
      "file-name": "Custom theme from Be Free extension",
      "should-clear": true,
    });
  }

  async function setupVideoListener() {
    const video = document.querySelector("video");

    const parameters = await dashboard.getParametersAsync();
    const videoProgressParam = parameters.find((p) => p.name === "Video Progress");

    video.ontimeupdate = async () => {
      const totalLength = video.duration % 60;
      const percentageCompleted = video.currentTime / totalLength;
      await videoProgressParam.changeValueAsync(percentageCompleted);
    };
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
