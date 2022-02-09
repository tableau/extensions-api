// In-Page Scroll Animation
// ------------------------
$('a[href^="#"]').on('click', function (e) {
  const hash = this.hash;
    	const $hash = $(hash);
  const addHash = function () {
    window.location.hash = hash;
  };

  if (hash !== '#header') {
    $('html,body').animate({ scrollTop: $hash.offset().top - 80 }, 400, addHash);
  } else {
    $('html,body').animate({ scrollTop: $hash.offset().top }, 400, addHash);
  }
  e.preventDefault();
});
