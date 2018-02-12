'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      // First, check for any saved settings and populate our UI based on them.
      buildSettingsTable(tableau.extensions.settings.getAll());
    }, function (err) {
      // Something went wrong in initialization
      console.log('Error while Initializing: ' + err.toString());
    });

    $('#save').click(saveSetting);
  });

  function eraseSetting (key, row) {
    // This change won't be persisted until settings.saveAsync has been called.
    tableau.extensions.settings.erase(key);

    // Remove the setting from the UI immediately.
    row.remove();

    // Save in the background, saveAsync results don't need to be handled immediately.
    tableau.extensions.settings.saveAsync();

    updateUIState(Object.keys(tableau.extensions.settings.getAll()).length > 0);
  }

  function buildSettingsTable (settings) {
    // Clear the table first.
    $('#settingsTable > tbody tr').remove();
    const settingsTable = $('#settingsTable > tbody')[0];

    // Add an entry to the settings table for each setting.
    for (const settingKey in settings) {
      let newRow = settingsTable.insertRow(settingsTable.rows.length);
      let keyCell = newRow.insertCell(0);
      let valueCell = newRow.insertCell(1);
      let eraseCell = newRow.insertCell(2);

      let eraseSpan = document.createElement('span');
      eraseSpan.className = 'glyphicon glyphicon-trash';
      eraseSpan.addEventListener('click', function () { eraseSetting(settingKey, newRow); });

      keyCell.innerHTML = settingKey;
      valueCell.innerHTML = settings[settingKey];
      eraseCell.appendChild(eraseSpan);
    }

    updateUIState(Object.keys(settings).length > 0);
  }

  function saveSetting () {
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

  // This helper updates the UI depending on whether or not there are settings
  // that exist in the dashboard.  Accepts a boolean.
  function updateUIState (settingsExist) {
    if (settingsExist) {
      $('#settingsTable').removeClass('hidden').addClass('show');
      $('#noSettingsWarning').removeClass('show').addClass('hidden');
    } else {
      $('#noSettingsWarning').removeClass('hidden').addClass('show');
      $('#settingsTable').removeClass('show').addClass('hidden');
    }
  }
})();
