const searchInput = document.querySelector("#moduleSearch");
const filterSelect = document.querySelector("#moduleFilter");
const modules = Array.from(document.querySelectorAll(".module"));
const progressChecks = Array.from(document.querySelectorAll("[data-progress]"));
const completedCount = document.querySelector("#completedCount");
const progressBar = document.querySelector("#progressBar");
const emptyState = document.querySelector("#emptyState");
const downloadMap = [
  { match: "2학기 강의계획서", href: "downloads/course-syllabus-ai-ted.md", label: "수업 안내 다운로드" },
  { match: "AI 리터러시란", href: "downloads/ai-literacy-guide.md", label: "AI 리터러시 다운로드" },
  { match: "UNIT 1.pdf", href: "downloads/unit1-leadership-movements.md", label: "Unit 1 다운로드" },
  { match: "UNIT 4.pdf", href: "downloads/unit4-game-changers.md", label: "Unit 4 다운로드" },
  { match: "UNIT 5.pdf", href: "downloads/unit5-lessons-learning.md", label: "Unit 5 다운로드" },
  { match: "UNIT 6.pdf", href: "downloads/unit6-food-revolution.md", label: "Unit 6 다운로드" },
  { match: "UNIT 7.pdf", href: "downloads/unit7-body-signs.md", label: "Unit 7 다운로드" },
  { match: "UNIT 9.pdf", href: "downloads/unit9-new-perspectives.md", label: "Unit 9 다운로드" },
  { match: "UNIT 10.pdf", href: "downloads/unit10-data-detectives.md", label: "Unit 10 다운로드" },
  { match: "UNIT 11.pdf", href: "downloads/unit11-sleep.md", label: "Unit 11 다운로드" },
  { match: "UNIT 12.pdf", href: "downloads/unit12-ai-cyborgs.md", label: "Unit 12 다운로드" },
  { match: "기말 프로젝트", href: "downloads/final-portfolio-guide.md", label: "포트폴리오 다운로드" }
];

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

function createDownloadLink(item) {
  const link = document.createElement("a");
  link.className = "download-link";
  link.href = item.href;
  link.download = "";
  link.textContent = item.label;
  return link;
}

function attachDownloadLinks() {
  document.querySelectorAll(".module, .resource-table [role='row']").forEach((section) => {
    const text = section.textContent || "";
    downloadMap.forEach((item) => {
      if (!text.includes(item.match) || section.querySelector(`a[href="${item.href}"]`)) return;
      const target = section.querySelector("ul") || section.lastElementChild || section;
      if (target.tagName === "UL") {
        const li = document.createElement("li");
        li.appendChild(createDownloadLink(item));
        target.appendChild(li);
      } else {
        target.appendChild(document.createTextNode(" "));
        target.appendChild(createDownloadLink(item));
      }
    });
  });
}

function injectDownloadStyles() {
  if (document.querySelector("#downloadLinkStyles")) return;
  const style = document.createElement("style");
  style.id = "downloadLinkStyles";
  style.textContent = `
    .download-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
      margin: 4px 4px 0 0;
      padding: 5px 10px;
      border: 1px solid rgba(20, 116, 111, .28);
      border-radius: 8px;
      background: #e6f3ef;
      color: #0b4f4b;
      font-size: .88rem;
      font-weight: 900;
      text-decoration: none;
    }
    .download-link:hover {
      border-color: #14746f;
      background: #d8eee8;
    }
  `;
  document.head.appendChild(style);
}

searchInput?.addEventListener("input", filterModules);
filterSelect?.addEventListener("change", filterModules);
injectDownloadStyles();
attachDownloadLinks();
restoreProgress();
filterModules();
