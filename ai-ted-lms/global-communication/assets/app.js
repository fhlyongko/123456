(function () {
  "use strict";

  const data = window.COURSE_DATA;
  if (!data) return;

  const page = document.body.dataset.page;
  const navMap = { home: "index.html", materials: "materials.html", projects: "projects.html" };
  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === navMap[page]) link.classList.add("is-active");
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.textContent = open ? "×" : "☰";
    });
  }

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const typeLabel = { ted: "TED 탐구", ai: "AI 리터러시", project: "프로젝트" };

  function renderHome() {
    const weekGrid = document.querySelector("#home-week-grid");
    if (weekGrid) {
      const featured = [data.weeks[0], data.weeks[1], data.weeks[8], data.weeks[12]];
      weekGrid.innerHTML = featured.map((week) => `
        <a class="home-week-card" href="materials.html#week-${week.week}">
          <span>WEEK ${week.week} · ${escapeHtml(typeLabel[week.type])}</span>
          <h3>${escapeHtml(week.titleKo)}</h3>
          <p>${escapeHtml(week.question)}</p>
        </a>`).join("");
    }

    const assessment = document.querySelector("#home-assessment");
    if (assessment) {
      assessment.innerHTML = data.course.assessment.map((item) => `
        <div class="assessment-bar">
          <div class="assessment-bar-head"><span>${escapeHtml(item.name)}</span><span>${item.weight}%</span></div>
          <div class="assessment-bar-track"><span style="width:${item.weight}%"></span></div>
        </div>`).join("");
    }
  }

  let completedFallback = [];
  let storageWriteFailed = false;
  function getCompleted() {
    if (storageWriteFailed) return completedFallback.slice();
    try {
      const saved = JSON.parse(localStorage.getItem("aiTedCompleted") || "[]");
      completedFallback = Array.isArray(saved)
        ? [...new Set(saved.filter((value) => data.weeks.some((week) => week.week === value)))]
        : [];
    } catch (_) { /* Keep this page usable when browser storage is unavailable. */ }
    return completedFallback.slice();
  }

  function saveCompleted(values) {
    completedFallback = values;
    try { localStorage.setItem("aiTedCompleted", JSON.stringify(values)); }
    catch (_) { storageWriteFailed = true; /* Progress remains available for this page session only. */ }
  }

  function updateProgress() {
    const completed = getCompleted();
    const count = document.querySelector("#progress-count");
    const bar = document.querySelector("#progress-bar");
    if (count) count.textContent = `${completed.length} / ${data.weeks.length}`;
    if (bar) bar.style.width = `${(completed.length / data.weeks.length) * 100}%`;
  }

  function renderMaterials(filter = "all", query = "") {
    const list = document.querySelector("#week-list");
    if (!list) return;
    const completed = getCompleted();
    const search = query.trim().toLocaleLowerCase("ko-KR");
    const weeks = data.weeks.filter((week) => {
      const matchesType = filter === "all" || week.type === filter;
      const text = [week.title, week.titleKo, week.question, week.summary, week.outputs].join(" ").toLocaleLowerCase("ko-KR");
      return matchesType && (!search || text.includes(search));
    });

    list.innerHTML = weeks.map((week) => {
      const resources = week.resources.length
        ? `<div class="resource-links">${week.resources.map(([label, url]) => `<a class="resource-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>`).join("")}</div>`
        : `<p class="resource-empty">이 주차의 전용 자료는 Drive에서 확인되지 않았습니다. 교수자 안내에 따라 수업 중 제공합니다.</p>`;
      return `<article class="week-card" id="week-${week.week}" data-type="${week.type}">
        <div class="week-index"><span class="week-number">${String(week.week).padStart(2, "0")}</span><span class="type-chip ${week.type}">${escapeHtml(typeLabel[week.type])}</span></div>
        <div class="week-main"><h2>${escapeHtml(week.titleKo)}</h2><p class="week-en">${escapeHtml(week.title)}</p><p class="essential-question">${escapeHtml(week.question)}</p><p class="week-summary">${escapeHtml(week.summary)}</p><p class="week-output"><b>학습 산출물</b> · ${escapeHtml(week.outputs)}</p></div>
        <div class="resource-panel">${resources}<label class="completion"><input type="checkbox" data-complete-week="${week.week}" ${completed.includes(week.week) ? "checked" : ""}> 이 주차 학습 완료</label></div>
      </article>`;
    }).join("");

    const empty = document.querySelector("#empty-state");
    if (empty) empty.hidden = weeks.length > 0;
    document.querySelectorAll("[data-complete-week]").forEach((box) => {
      box.addEventListener("change", () => {
        const week = Number(box.dataset.completeWeek);
        const current = getCompleted().filter((value) => value !== week);
        if (box.checked) current.push(week);
        saveCompleted(current.sort((a, b) => a - b));
        updateProgress();
      });
    });
    updateProgress();
  }

  function initMaterials() {
    if (!document.querySelector("#week-list")) return;
    let activeFilter = "all";
    const search = document.querySelector("#week-search");
    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        activeFilter = button.dataset.filter;
        renderMaterials(activeFilter, search ? search.value : "");
      });
    });
    if (search) search.addEventListener("input", () => renderMaterials(activeFilter, search.value));
    renderMaterials();
    if (/^#week-\d+$/.test(location.hash)) {
      setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 0);
    }
  }

  function renderAssessment() {
    const grid = document.querySelector("#assessment-grid");
    if (!grid) return;
    grid.innerHTML = data.course.assessment.map((item) => `<article class="assessment-card"><strong>${item.weight}%</strong><b>${escapeHtml(item.name)}</b><span>${escapeHtml(item.nameEn)}</span></article>`).join("");
  }

  renderHome();
  initMaterials();
  renderAssessment();
})();

