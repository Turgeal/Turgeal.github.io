/* Renders the homepage from window.CONTENT (assets/content.js).
   All dynamic text goes through textContent; no HTML string is ever built. */
(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";

  function readStoredLang() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (err) { return null; }
  }

  function storeLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (err) { /* storage unavailable */ }
  }

  function getLang() {
    var saved = readStoredLang();
    return saved === "zh" || saved === "en" ? saved : "en";
  }

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    return node;
  }

  /* Append text to a node. `value` is a string or an array of
     { t: "text", b: true } parts; only textContent is used. */
  function appendParts(node, value) {
    if (typeof value === "string") {
      node.appendChild(document.createTextNode(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(function (part) {
        var text = part && typeof part.t === "string" ? part.t : "";
        if (part && part.b) {
          var strong = document.createElement("strong");
          strong.textContent = text;
          node.appendChild(strong);
        } else {
          node.appendChild(document.createTextNode(text));
        }
      });
      return;
    }
    if (value == null) { return; }
    node.appendChild(document.createTextNode(String(value)));
  }

  function clear(node) {
    while (node.firstChild) { node.removeChild(node.firstChild); }
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (!node) { return; }
    clear(node);
    appendParts(node, value);
  }

  function buildItems(listId, items, linkify) {
    var list = document.getElementById(listId);
    if (!list) { return; }
    clear(list);
    items.forEach(function (item) {
      var li = el("li");
      if (linkify) {
        var a = el("a");
        a.href = "project.html?id=" + encodeURIComponent(item.slug);
        appendParts(a, item.parts);
        li.appendChild(a);
      } else {
        appendParts(li, item.parts);
      }
      list.appendChild(li);
    });
  }

  function render(dictionary) {
    document.title = dictionary.pageTitle;

    var portrait = document.getElementById("portrait");
    if (portrait) { portrait.alt = dictionary.portraitAlt; }

    setText("brief-heading", dictionary.briefHeading);

    var lines = document.getElementById("brief-lines");
    if (lines) {
      clear(lines);
      dictionary.briefLines.forEach(function (line) {
        var p = el("p", "brief-line");
        appendParts(p, line);
        lines.appendChild(p);
      });
    }

    setText("projects-heading", dictionary.projectsHeading);
    setText("outside-heading", dictionary.outsideHeading);
    buildItems("outside-list", dictionary.outsideItems, true);

    setText("course-heading", dictionary.courseHeading);
    setText("nontrivial-label", dictionary.nontrivialLabel);
    buildItems("nontrivial-list", dictionary.nontrivialItems, true);
    setText("trivial-label", dictionary.trivialLabel);
    buildItems("trivial-list", dictionary.trivialItems, true);

    setText("course-note", dictionary.courseNote);

    setText("others-heading", dictionary.othersHeading);
    buildItems("others-list", dictionary.othersItems, false);
  }

  function updateSwitcher(lang, dictionary) {
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var buttonLang = button.getAttribute("data-lang");
      var isCurrent = buttonLang === lang;
      button.classList.toggle("is-current", isCurrent);
      button.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      button.setAttribute("aria-label", buttonLang === "en" ? dictionary.ariaSwitchToEn : dictionary.ariaSwitchToZh);
    }
  }

  function applyLang(lang) {
    var dictionary = window.CONTENT ? window.CONTENT[lang] : null;
    if (!dictionary) { return; }
    document.documentElement.lang = dictionary.htmlLang;
    storeLang(lang);
    updateSwitcher(lang, dictionary);
    render(dictionary);
  }

  function init() {
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var lang = this.getAttribute("data-lang");
        if (lang === "en" || lang === "zh") { applyLang(lang); }
      });
    }
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
