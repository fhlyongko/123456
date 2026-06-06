const searchInput = document.querySelector("#moduleSearch");
const filterSelect = document.querySelector("#moduleFilter");
const modules = Array.from(document.querySelectorAll(".module"));
const progressChecks = Array.from(document.querySelectorAll("[data-progress]"));

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function filterModules() {
  const query = normalize(searchInput?.value || "");
  const selected = filterSelect?.value || "all";

  modules.forEach((module) => {
    const text = normalize(module.textContent || "");
    const tags = module.dataset.tags || "";
    const matchesQuery = !query || text.includes(query);
    const matchesFilter = selected === "all" || tags.includes(selected);
    module.classList.toggle("hidden", !(matchesQuery && matchesFilter));
  });
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
    });
  });
}

searchInput?.addEventListener("input", filterModules);
filterSelect?.addEventListener("change", filterModules);
restoreProgress();
