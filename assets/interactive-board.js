(function () {
  const dataElement = document.getElementById("course-data");
  if (!dataElement) return;

  const data = JSON.parse(dataElement.textContent);
  const board = document.getElementById("board");
  const resourceGrid = document.getElementById("resourceGrid");
  const promptGrid = document.getElementById("promptGrid");
  const search = document.getElementById("searchInput");
  const chips = document.getElementById("filterChips");
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");
  const empty = document.getElementById("emptyState");
  const storageKey = `interactive-board:${data.slug}`;
  const completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  let activeFilter = "all";

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function matchItem(item, query) {
    const haystack = normalize([
      item.title,
      item.summary,
      item.week,
      item.tag,
      item.column,
      item.downloadLabel
    ].join(" "));
    return (!query || haystack.includes(query)) && (activeFilter === "all" || item.category === activeFilter);
  }

  function renderChips() {
    const filters = [{ id: "all", label: "전체" }].concat(data.filters || []);
    chips.innerHTML = filters.map((filter) => (
      `<button class="chip ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">${filter.label}</button>`
    )).join("");
  }

  function taskCard(item) {
    const done = completed.has(item.id);
    const download = item.href
      ? `<a class="button" href="${item.href}" download>${item.downloadLabel || "자료 다운로드"}</a>`
      : "";
    return `<article class="task-card" data-id="${item.id}" data-category="${item.category}">
      <div class="task-meta">
        <span class="pill">${item.week || item.tag || "Module"}</span>
        ${item.tag ? `<span class="pill">${item.tag}</span>` : ""}
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="task-foot">
        ${download}
        <label class="check-label"><input type="checkbox" data-check="${item.id}" ${done ? "checked" : ""}> 완료</label>
      </div>
    </article>`;
  }

  function renderBoard() {
    const query = normalize(search.value.trim());
    let visibleCount = 0;
    board.innerHTML = data.columns.map((column) => {
      const items = data.items.filter((item) => item.column === column.id && matchItem(item, query));
      visibleCount += items.length;
      return `<section class="board-column" aria-label="${column.title}">
        <div class="column-title"><strong>${column.title}</strong><span>${items.length}</span></div>
        <div class="card-list">${items.map(taskCard).join("") || `<p class="empty">표시할 항목이 없습니다.</p>`}</div>
      </section>`;
    }).join("");
    if (empty) empty.hidden = visibleCount !== 0;
    updateProgress();
  }

  function renderResources() {
    if (!resourceGrid || !data.resources) return;
    resourceGrid.innerHTML = data.resources.map((item) => (
      `<article class="resource-card" data-category="${item.category || "all"}">
        <span class="pill">${item.type || "자료"}</span>
        <h3>${item.title}</h3>
        <p>${item.summary || ""}</p>
        <a class="button primary" href="${item.href}" download>${item.downloadLabel || "다운로드"}</a>
      </article>`
    )).join("");
  }

  function renderPrompts() {
    if (!promptGrid || !data.prompts) return;
    promptGrid.innerHTML = data.prompts.map((item, index) => (
      `<article class="prompt-card">
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <ul>${item.lines.map((line) => `<li>${line}</li>`).join("")}</ul>
        <button class="copy-button" type="button" data-copy="${index}">문장 복사</button>
      </article>`
    )).join("");
  }

  function updateProgress() {
    if (!progressText || !progressBar) return;
    const total = data.items.length;
    const count = data.items.filter((item) => completed.has(item.id)).length;
    progressText.textContent = `${count} / ${total} 완료`;
    progressBar.style.width = `${total ? Math.round((count / total) * 100) : 0}%`;
  }

  chips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderChips();
    renderBoard();
  });

  search.addEventListener("input", renderBoard);

  board.addEventListener("change", (event) => {
    const input = event.target.closest("[data-check]");
    if (!input) return;
    if (input.checked) completed.add(input.dataset.check);
    else completed.delete(input.dataset.check);
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
    updateProgress();
  });

  if (promptGrid) {
    promptGrid.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy]");
      if (!button) return;
      const item = data.prompts[Number(button.dataset.copy)];
      await navigator.clipboard.writeText(item.lines.join("\n"));
      const original = button.textContent;
      button.textContent = "복사 완료";
      setTimeout(() => { button.textContent = original; }, 1200);
    });
  }

  renderChips();
  renderBoard();
  renderResources();
  renderPrompts();
})();
