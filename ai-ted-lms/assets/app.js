const searchInput = document.querySelector("#moduleSearch");
const filterSelect = document.querySelector("#moduleFilter");
const modules = Array.from(document.querySelectorAll(".module"));
const progressChecks = Array.from(document.querySelectorAll("[data-progress]"));
const completedCount = document.querySelector("#completedCount");
const progressBar = document.querySelector("#progressBar");
const emptyState = document.querySelector("#emptyState");

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function filterModules() {
  const query = normalize(searchInput?.value || "");
  const selected = filterSelect?.value || "all";
  let visibleCount = 0;

  modules.forEach((module) => {
    const text = normalize(module.textContent || "");
    const tags = module.dataset.tags || "";
    const matchesQuery = !query || text.includes(query);
    const matchesFilter = selected === "all" || tags.includes(selected);
    const isVisible = matchesQuery && matchesFilter;
    module.classList.toggle("hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
}

function updateProgress() {
  const total = progressChecks.length;
  const completed = progressChecks.filter((checkbox) => checkbox.checked).length;
  if (completedCount) {
    completedCount.textContent = `${completed} / ${total} 완료`;
  }
  if (progressBar) {
    progressBar.style.width = total ? `${Math.round((completed / total) * 100)}%` : "0%";
  }
}

function restoreProgress() {
  progressChecks.forEach((checkbox) => {
    const key = `ai-ted-lms:${checkbox.dataset.progress}`;
    checkbox.checked = localStorage.getItem(key) === "done";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        localStorage.setItem(key, "done");
      } else {
        localStorage.removeItem(key);
      }
      updateProgress();
    });
  });
  updateProgress();
}

searchInput?.addEventListener("input", filterModules);
filterSelect?.addEventListener("change", filterModules);
restoreProgress();
filterModules();
