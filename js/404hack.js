// 404 hack:
// https://www.smashingmagazine.com/2016/08/sghpa-single-page-app-hack-github-pages/
// github: https://github.com/csuwildcat/sghpa
(function () {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute(
    //   "message",
    //   "This page was redirected by 404.html, from the route: " + redirect
    // );
  } else {
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute(
    //   "message",
    //   "This page was loaded directly from the index.html file"
    // );
  }
})();
