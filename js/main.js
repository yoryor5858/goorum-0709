(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var dailyImg = document.getElementById("dailyImg");
  var dailyName = document.getElementById("dailyName");
  var dailyQuote = document.getElementById("dailyQuote");
  var shuffleBtn = document.getElementById("shuffleBtn");
  var idx = 0;

  function t(key) {
    if (window.PixelGrugI18n) return window.PixelGrugI18n.t(key);
    return key;
  }

  function getFriends() {
    if (window.PixelGrugI18n) return window.PixelGrugI18n.getDailyFriends();
    return [];
  }

  function updateMenuAria(open) {
    if (!toggle) return;
    toggle.setAttribute("aria-label", open ? t("a11y.menuClose") : t("a11y.menuOpen"));
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      updateMenuAria(open);
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        updateMenuAria(false);
      });
    });
  }

  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function updateDailyCard(animate) {
    if (!dailyImg || !dailyName || !dailyQuote) return;
    var friends = getFriends();
    if (!friends.length) return;
    var f = friends[idx % friends.length];
    var prefix = t("daily.altPrefix");

    function apply() {
      dailyImg.src = f.img;
      dailyImg.alt = prefix + f.altName;
      dailyName.textContent = f.name;
      dailyQuote.textContent = f.quote;
      if (animate) {
        dailyImg.style.opacity = "1";
        dailyImg.style.transform = "scale(1)";
      }
    }

    if (animate) {
      dailyImg.style.opacity = "0";
      dailyImg.style.transform = "scale(0.92)";
      window.setTimeout(apply, 220);
    } else {
      apply();
    }
  }

  function preloadFriends() {
    getFriends().forEach(function (f) {
      var im = new Image();
      im.src = f.img;
    });
  }

  preloadFriends();

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", function () {
      var friends = getFriends();
      if (!friends.length) return;
      idx = (idx + 1) % friends.length;
      updateDailyCard(true);
    });
  }

  window.addEventListener("languagechange", function () {
    updateDailyCard(false);
    updateMenuAria(toggle && links && links.classList.contains("is-open"));
    preloadFriends();
  });

  updateDailyCard(false);

  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
