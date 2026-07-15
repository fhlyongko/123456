const data = window.REPORT_LMS_DATA;
const search = document.getElementById("readerSearch");
const results = document.getElementById("readerResults");
const stats = document.getElementById("readerStats");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(escaped, "gi"), match => `<mark>${match}</mark>`);
}

function render() {
  const query = search.value.trim();
  const normalized = query.toLowerCase();
  const all = data.paragraphs;
  const matches = query
    ? all.filter(item => item.text.toLowerCase().includes(normalized))
    : all.slice(0, 80);

  stats.textContent = query
    ? `검색 결과 ${matches.length.toLocaleString("ko-KR")}개 / 전체 ${all.length.toLocaleString("ko-KR")}문단`
    : `전체 ${all.length.toLocaleString("ko-KR")}문단 중 첫 80개 문단 표시`;

  results.innerHTML = matches.slice(0, 160).map(item => `
    <article class="para-card">
      <small>문단 ${item.n}</small>
      <p>${highlight(item.text, query)}</p>
    </article>
  `).join("");

  if (matches.length > 160) {
    results.insertAdjacentHTML("beforeend", `<article class="para-card"><p>검색 결과가 많아 상위 160개만 표시합니다. 검색어를 더 구체적으로 입력하세요.</p></article>`);
  }
}

search.addEventListener("input", render);
render();
