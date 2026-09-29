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

  /* Append one part to a node: plain text, { b: true } for <strong>,
     { br: true } for a line break, { href, download } for a link. */
  function appendPart(node, part) {
    if (!part) { return; }
    if (part.br) { node.appendChild(document.createElement("br")); return; }
    var text = typeof part.t === "string" ? part.t : "";
    var target = node;
    if (part.href) {
      var link = el("a");
      link.href = part.href;
      if (part.download) { link.setAttribute("download", ""); }
      node.appendChild(link);
      target = link;
    }
    if (part.b) {
      var strong = document.createElement("strong");
      strong.textContent = text;
      target.appendChild(strong);
    } else {
      target.appendChild(document.createTextNode(text));
    }
  }

  function appendParts(node, value) {
    if (typeof value === "string") { node.appendChild(document.createTextNode(value)); return; }
    if (Array.isArray(value)) { value.forEach(function (part) { appendPart(node, part); }); return; }
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

  /* Body blocks: { p: text | parts }, { img: { src, alt, caption } },
     { video: { src, caption } }. */
  function mediaFigure(kind, spec) {
    var figure = el("figure", "body-figure");
    if (kind === "img") {
      var link = el("a");
      link.href = spec.src;
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
      var img = document.createElement("img");
      img.src = spec.src;
      img.alt = spec.alt || "";
      img.loading = "lazy";
      link.appendChild(img);
      figure.appendChild(link);
    } else {
      var video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.setAttribute("playsinline", "");
      var source = document.createElement("source");
      source.src = spec.src;
      source.type = "video/mp4";
      video.appendChild(source);
      figure.appendChild(video);
    }
    if (spec.caption) {
      var caption = el("figcaption", "body-caption");
      appendParts(caption, spec.caption);
      figure.appendChild(caption);
    }
    return figure;
  }

  function renderBody(containerId, blocks) {
    var container = document.getElementById(containerId);
    if (!container) { return; }
    clear(container);
    var list = Array.isArray(blocks) ? blocks : [];
    list.forEach(function (block) {
      if (!block) { return; }
      if (block.p != null) {
        var p = el("p", "body-p");
        appendParts(p, block.p);
        container.appendChild(p);
      } else if (block.img) {
        container.appendChild(mediaFigure("img", block.img));
      } else if (block.video) {
        container.appendChild(mediaFigure("video", block.video));
      }
    });
  }

  function setHidden(id, hide) {
    var node = document.getElementById(id);
    if (node) { node.hidden = hide; }
  }

  function showProject(dictionary, data) {
    document.title = data.title + " — " + dictionary.pageTitle;
    var hasBody = Array.isArray(data.body) && data.body.length > 0;
    setField("project-title", data.title);
    setField("project-oneliner", hasBody ? data.oneLiner : "");
    renderBody("project-body", data.body);

    /* Pages without any content yet show a single pending note; pages that do
       have content hide whatever placeholder sections are still TODO. */
    var linksEmpty = !Array.isArray(data.links) || data.links.length === 0;
    var hideRole = !hasBody || isTodoValue(data.role);
    var hideStack = !hasBody || isTodoValue(data.stack);
    var hideHighlights = !hasBody || isTodoValue(data.highlights);
    var hideLinks = !hasBody || linksEmpty;

    setHidden("project-oneliner", !hasBody);
    setText("pending-note", dictionary.pendingNote);
    setHidden("pending-note", hasBody);

    setField("project-role", hideRole ? "" : data.role);
    setField("project-stack", hideStack ? "" : data.stack);
    renderFieldList("project-highlights", hideHighlights ? [] : data.highlights, !hideHighlights);
    renderFieldList("project-links", hideLinks ? [] : data.links, !hideLinks);

    setHidden("role-row", hideRole);
    setHidden("project-role", hideRole);
    setHidden("stack-row", hideStack);
    setHidden("project-stack", hideStack);
    setHidden("highlights-row", hideHighlights);
    setHidden("project-highlights", hideHighlights);
    setHidden("links-row", hideLinks);
    setHidden("project-links", hideLinks);

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
