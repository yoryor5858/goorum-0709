(function () {
  "use strict";

  var THEME_KEY = "pixel-grug-theme";
  var DEFAULT_THEME = "light";

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function getTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    return getSystemTheme();
  }

  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = DEFAULT_THEME;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }

    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: theme } }));
  }

  function initThemeToggle() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    applyTheme(getTheme());

    toggle.addEventListener("click", function () {
      var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  window.PixelGrugTheme = {
    THEME_KEY: THEME_KEY,
    getTheme: getTheme,
    applyTheme: applyTheme,
    initThemeToggle: initThemeToggle,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
