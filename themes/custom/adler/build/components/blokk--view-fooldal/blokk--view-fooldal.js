/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ./src/components/blokk--view-fooldal/blokk--view-fooldal.js ***!
  \*******************************************************************/
function turn_off(images, links) {
  images.forEach(function (element) {
    element.className = "eagle-image inactive";
  });
  links.forEach(function (element) {
    element.className = "nav-link inactive";
  });
}
function init_images() {
  var elements_to_observe = document.querySelectorAll(".fooldal-row");
  var eagle_container = document.getElementById("eagle-div");
  var images = [];
  var header_links = document.querySelectorAll(".block--system-menu ul.nav .nav-item a");
  var options = {
    root: null,
    rootMargin: "-30% 0px",
    threshold: 0.15
  };
  var callback = function callback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        turn_off(images, header_links);
        var parent_index = parseInt(entry.target.getAttribute("index"));
        images[parent_index].className = "eagle-image active";
        if (parent_index > 0) {
          header_links[parent_index - 1].className = "nav-link active";
        }
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  document.querySelectorAll(".fooldal-row").forEach(function (element) {});
  elements_to_observe.forEach(function (element, index) {
    var image = element.querySelector("img").cloneNode(true);
    image.className = "eagle-image inactive";
    images.push(image);
    eagle_container.appendChild(image);
    element.setAttribute("index", index);
    observer.observe(element);
  });
}
var initialized = false;
(function ($, Drupal) {
  Drupal.behaviors.scrollBehaviour = {
    attach: function attach(context, settings) {
      if (!initialized) {
        initialized = true;
        init_images();
      }
    }
  };
})(jQuery, Drupal);
/******/ })()
;
//# sourceMappingURL=blokk--view-fooldal.js.map