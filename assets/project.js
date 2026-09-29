/* Renders a project detail page from ?id=<slug> and window.CONTENT (assets/content.js).
   The URL parameter is only used as an object key lookup; it is never inserted
   into HTML, and all dynamic text goes through textContent. */
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

  function requestedSlug() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get("id") || "";
    } catch (err) {
      return "";
    }
  }

  function projectData(dictionary, slug) {
    if (!slug || !dictionary.projects) { return null; }
    if (!Object.prototype.hasOwnProperty.call(dictionary.projects, slug)) { return null; }
    var data = dictionary.projects[slug];
    return data && typeof data === "object" ? data : null;
  }

  function isTodoValue(value) {
    if (typeof value === "string") { return value.trim() === "TODO"; }
    if (Array.isArray(value)) {
      return value.length === 0 ||
        (value.length === 1 && typeof value[0] === "string" && value[0].trim() === "TODO");
    }
    return false;
  }

  function setField(id, value) {
    var node = document.getElementById(id);
    if (!node) { return; }
    clear(node);
    appendParts(node, value);
    node.classList.toggle("is-todo", isTodoValue(value));
  }

  function renderFieldList(listId, entries, fallbackTodo) {
    var list = document.getElementById(listId);
    if (!list) { return; }
    clear(list);
    var values = Array.isArray(entries) ? entries : [];
    if (values.length === 0 && fallbackTodo) { values = ["TODO"]; }
    values.forEach(function (entry) {
      var li = el("li");
      if (entry && typeof entry === "object" && typeof entry.url === "string") {
        var a = el("a");
        a.href = entry.url;
        a.textContent = typeof entry.label === "string" && entry.label ? entry.label : entry.url;
        li.appendChild(a);
      } else {
        appendParts(li, entry);
        li.classList.toggle("is-todo", isTodoValue(entry));
      }
      list.appendChild(li);
    });
  }

  function showProject(dictionary, data) {
    document.title = data.title + " — " + dictionary.pageTitle;
    setField("project-title", data.title);
    setField("project-oneliner", data.oneLiner);
    setField("project-role", data.role);
    setField("project-stack", data.stack);
    renderFieldList("project-highlights", data.highlights, true);
    renderFieldList("project-links", data.links, true);
    document.getElementById("project-view").hidden = false;
    document.getElementById("not-found").hidden = true;
  }

  function showNotFound(dictionary) {
    document.title = dictionary.notFoundTitle + " — " + dictionary.pageTitle;
    setText("nf-title", dictionary.notFoundTitle);
    setText("nf-body", dictionary.notFoundBody);
    setText("nf-back", dictionary.backToHome);
    document.getElementById("project-view").hidden = true;
    document.getElementById("not-found").hidden = false;
  }

  function renderLabels(dictionary) {
    setText("back-link", dictionary.back);
    setText("role-heading", dictionary.fieldRole);
    setText("stack-heading", dictionary.fieldStack);
    setText("highlights-heading", dictionary.fieldHighlights);
    setText("links-heading", dictionary.fieldLinks);
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
    renderLabels(dictionary);
    var data = projectData(dictionary, requestedSlug());
    if (data) {
      showProject(dictionary, data);
    } else {
      showNotFound(dictionary);
    }
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
