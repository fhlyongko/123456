const key = "sarim-honors-global-lms-checks";
const checks = Array.from(document.querySelectorAll("[data-check]"));
const saveNote = document.querySelector("#saveNote");
const saved = new Set(JSON.parse(localStorage.getItem(key) || "[]"));

checks.forEach((box) => {
  box.checked = saved.has(box.dataset.check);
});

function updateProgress() {
  const completed = checks.filter((box) => box.checked).length;
  saveNote.textContent = `학습 체크 ${completed} / ${checks.length} 완료`;
}

checks.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      saved.add(box.dataset.check);
    } else {
      saved.delete(box.dataset.check);
    }
    localStorage.setItem(key, JSON.stringify([...saved]));
    updateProgress();
  });
});

updateProgress();
