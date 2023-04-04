/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
function init_close_on_click() {
  var header_links = document.querySelectorAll(".navbar-nav .nav-item a");
  header_links.forEach(function (element, index) {
    element.addEventListener("click", function (event) {
      if (window.innerWidth < 1200) {
        document.querySelector(".navbar-toggler").click();
      }
    });
  });
}
var initialized = false;
(function ($, Drupal) {
  Drupal.behaviors.close_after_click_Behaviour = {
    attach: function attach(context, settings) {
      if (!initialized) {
        initialized = true;
        init_close_on_click();
      }
    }
  };
})(jQuery, Drupal);
/******/ })()
;
//# sourceMappingURL=navbar.js.map