(function () {
  'use strict';

  var servicesObject = {
    'wait_for_update': 500 //milliseconds
  };
  var cookieValues = decodeURIComponent(
  document.cookie.replace(
  new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent('cookiesjsr').replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
  ) || null;
  if (cookieValues === null) {
    for (const element of cookies_services) {
      servicesObject[element] = 'denied';
    }
  }
  else {
  servicesObject = JSON.parse(
    cookieValues
      .replaceAll('"true"', '"granted"')
      .replaceAll('\'true\'', '"granted"')
      .replaceAll('true', '"granted"')
      .replaceAll('"false"', '"denied"')
      .replaceAll('\'false\'', '"denied"')
      .replaceAll('false', '"denied"')
  );
  servicesObject.wait_for_update = 500; //milliseconds
}

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'default', servicesObject);

})();
