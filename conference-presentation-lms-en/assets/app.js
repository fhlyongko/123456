const qs = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setBoardCounts() {
  qs(".board-column").forEach(column => {
    const badge = column.querySelector(".count");
    if (badge) badge.textContent = qs(".board-card:not(.hidden)", column).length;
  });
}

function filterBoard(value = "all") {
  const query = (document.getElementById("boardSearch")?.value || "").toLowerCase().trim();
  qs(".board-card").forEach(card => {
    const haystack = `${card.textContent} ${card.dataset.theme}`.toLowerCase();
    const filterOk = value === "all" || haystack.includes(value);
    const queryOk = !query || haystack.includes(query);
    card.classList.toggle("hidden", !(filterOk && queryOk));
  });
  setBoardCounts();
}

qs("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    qs("[data-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    filterBoard(button.dataset.filter);
  });
});

document.getElementById("boardSearch")?.addEventListener("input", () => {
  filterBoard(document.querySelector("[data-filter].active")?.dataset.filter || "all");
});

function updateProgress() {
  const checks = qs("[data-task]");
  const done = checks.filter(check => check.checked).length;
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = checks.length ? `${Math.round(done / checks.length * 100)}%` : "0%";
}

qs("[data-task]").forEach(box => {
  box.checked = localStorage.getItem(`conference-board-en-${box.dataset.task}`) === "1";
  box.addEventListener("change", () => {
    localStorage.setItem(`conference-board-en-${box.dataset.task}`, box.checked ? "1" : "0");
    updateProgress();
  });
});

function filterResources(value = "all") {
  const query = (document.getElementById("resourceSearch")?.value || "").toLowerCase().trim();
  qs(".resource-card").forEach(card => {
    const haystack = `${card.textContent} ${card.dataset.type}`.toLowerCase();
    const filterOk = value === "all" || haystack.includes(value);
    const queryOk = !query || haystack.includes(query);
    card.classList.toggle("hidden", !(filterOk && queryOk));
  });
}

qs("[data-resource-filter]").forEach(button => {
  button.addEventListener("click", () => {
    qs("[data-resource-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    filterResources(button.dataset.resourceFilter);
  });
});

document.getElementById("resourceSearch")?.addEventListener("input", () => {
  filterResources(document.querySelector("[data-resource-filter].active")?.dataset.resourceFilter || "all");
});

filterBoard("all");
filterResources("all");
updateProgress();
