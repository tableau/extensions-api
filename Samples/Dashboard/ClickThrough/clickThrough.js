'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      $('#enable-click-through').click(() => {
        tableau.extensions.setClickThroughAsync(true).then(() => {
          console.log('click through enabled! (reload to disable)');
        }, (err) => {
          console.log(err);
        });
      });
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });
})();
