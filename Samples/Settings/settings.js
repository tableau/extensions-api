$(document).ready(function () {
  tableau.extensions.initializeAsync().then(function () {

    // First, check for any saved settings and populate our UI based on them.
    buildSettingsTable(tableau.extensions.settings.getAll());

  }, function (err) {
    // Something went wrong in initialization
    console.log("Error while Initializing: " + err.toString());
  });

  $("#save").click(saveSetting);
});

function buildSettingsTable(settings) {
  // Clear the table first.
  $("#settingsTable > tbody tr").remove();
  let settingsTable = document.getElementById("settingsTable").getElementsByTagName('tbody')[0];

  // Add an entry to the settings table for each settings.
  for (const setting in settings) {
    let newRow = settingsTable.insertRow(settingsTable.rows.length);
    let nameCell = newRow.insertCell(0);
    let valueCell = newRow.insertCell(1);

    nameCell.innerHTML = setting;
    valueCell.innerHTML = settings[setting].value;
  }
}

function saveSetting() {
  let settingKey = $('#keyInput').val();
  let settingValue = $('#valueInput').val();

  tableau.extensions.settings.set(settingKey, settingValue);

  // Save the newest settings via the settings API.
  tableau.extensions.settings.saveAsync().then((currentSettings) => {     
    // This promise resolves to a list of the current settings.
    // Rebuild the UI with that new list of settings.
    buildSettingsTable(currentSettings);

    // Clears the settings of content.
    $('#settingForm').get(0).reset();
  });
}
