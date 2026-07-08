(function () {
  "use strict";

  /* ===== Mobile menu toggle ===== */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== Nav background on scroll ===== */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ===== Scroll reveal ===== */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
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

  /* ===== Daily Pixel demo ===== */
  const friends = [
    { img: "assets/hero-dragon.png", name: "🐉 작은 용", quote: "today small step become tomorrow mountain" },
    { img: "assets/char-fox.png", name: "🦊 작은 여우", quote: "kind word grow biggest tree" },
    { img: "assets/char-spacecat.png", name: "🚀 우주 고양이", quote: "brave hearts start with small steps" },
    { img: "assets/char-robot.png", name: "🤖 로봇 가드너", quote: "grow slow, bloom sure" },
    { img: "assets/char-slime.png", name: "🟢 모험 슬라임", quote: "small joy make a big smile" },
    { img: "assets/char-cloudwhale.png", name: "☁️ 구름 고래", quote: "float light, dream big" },
  ];

  const dailyImg = document.getElementById("dailyImg");
  const dailyName = document.getElementById("dailyName");
  const dailyQuote = document.getElementById("dailyQuote");
  const shuffleBtn = document.getElementById("shuffleBtn");

  let idx = 0;
  const preload = function () {
    friends.forEach(function (f) {
      const im = new Image();
      im.src = f.img;
    });
  };
  preload();

  if (shuffleBtn && dailyImg && dailyName && dailyQuote) {
    shuffleBtn.addEventListener("click", function () {
      idx = (idx + 1) % friends.length;
      const f = friends[idx];

      dailyImg.style.opacity = "0";
      dailyImg.style.transform = "scale(0.92)";

      window.setTimeout(function () {
        dailyImg.src = f.img;
        dailyImg.alt = "오늘의 픽셀 친구, " + f.name.replace(/^\S+\s/, "");
        dailyName.textContent = f.name;
        dailyQuote.textContent = f.quote;
        dailyImg.style.opacity = "1";
        dailyImg.style.transform = "scale(1)";
      }, 220);
    });
  }

  /* ===== Footer year ===== */
  const yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
