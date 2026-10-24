(function () {
  var toggle = document.querySelector(".menu-toggle");
  var navigation = document.querySelector("#site-nav");
  var header = document.querySelector(".site-header");

  if (toggle && navigation) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
  }

  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  var year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}());
