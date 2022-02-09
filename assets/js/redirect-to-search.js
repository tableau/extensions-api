(function () {
  window.addEventListener('load', function () {
    const search_form = document.getElementById('docs-search');
    const search_input = document.getElementById('search-input');

    if (search_form) {
      search_form.addEventListener('submit', function (e) {
        e.preventDefault();
        window.location.href = search_input.getAttribute('search-url') + '?q=' + encodeURIComponent(search_input.value);
      });
    }
  });
})();
