(function () {
  // Use query param as search query
  const searchQuery = decodeURIComponent(window.location.href.split('?q=')[1]);

  // Initialize the search index
  const lunrIndex = lunr(function () {
    this.ref('url');
    this.field('title', { boost: 10 });
    this.field('content');
  });

  // Add content from search blob to index
  function addContentToIndex () {
    for (const page in search_blob) {
      lunrIndex.add({
        url: page,
        title: search_blob[page].title,
        content: search_blob[page].content
      });
    }
  }

  function displaySearchHeading (query) {
    const heading = document.getElementById('searchHeading');
    heading.textContent = 'Search results for: ' + query;
  }

  // Get the raw search results
  function getRawSearchResults (query) {
    return lunrIndex.search(query);
  }

  // Try to find the end of a word on which to end the blurb
  function getResultBlurb (result_content) {
    const rangeForEndOfWord = result_content.substr(250, 275);
    const endOfWordIndex = rangeForEndOfWord.indexOf(' ');

    return result_content.substr(0, 250 + endOfWordIndex);
  }

  function displaySearchResults (results) {
    const container = document.getElementById('searchResultsContainer');
    let ref; let title;

    // Clear the loading text before inserting the results
    container.innerHTML = '';

    if (results.length) {
      for (const result in results) {
        ref = results[result].ref;

        if (ref !== '') {
          // Some pages might not have a title set
          title = search_blob[ref].title || '(No title)';
          container.innerHTML += "<a href='" + ref + "'>" + title + '</a>';
          container.innerHTML += '<p>' + getResultBlurb(search_blob[ref].content) + '...</p><br />';
        }
      }
    } else {
      container.innerHTML += "<div class='search-result'>No results found.</div>";
    }
  }

  addContentToIndex();
  window.addEventListener('load', function () {
    displaySearchHeading(searchQuery);
    displaySearchResults(getRawSearchResults(searchQuery));
  });
})();
