
const data = window.EBOOK_DATA;
let current = 1;
let zoom = 1;
const image = document.getElementById('pageImage');
const input = document.getElementById('pageInput');
const meta = document.getElementById('pageMeta');
const results = document.getElementById('searchResults');

function go(page) {
  current = Math.max(1, Math.min(data.pageCount, Number(page) || 1));
  const item = data.pages[current - 1];
  image.src = item.image;
  image.alt = `E-book page ${current}`;
  input.value = current;
  meta.textContent = `${current} / ${data.pageCount}쪽 · ${item.title}`;
  history.replaceState(null, '', `#page-${current}`);
}

function applyZoom() {
  image.style.maxWidth = `${Math.round(100 * zoom)}%`;
}

function search(query) {
  const q = query.trim().toLowerCase();
  results.innerHTML = '';
  if (!q) return;
  const matches = data.pages
    .filter(page => page.text.toLowerCase().includes(q) || page.title.toLowerCase().includes(q))
    .slice(0, 18);
  if (!matches.length) {
    results.innerHTML = '<p class="empty">검색 결과가 없습니다.</p>';
    return;
  }
  for (const page of matches) {
    const a = document.createElement('button');
    a.type = 'button';
    a.innerHTML = `<strong>${page.number}쪽</strong><span>${page.title}</span>`;
    a.addEventListener('click', () => go(page.number));
    results.appendChild(a);
  }
}

document.getElementById('prevPage').addEventListener('click', () => go(current - 1));
document.getElementById('nextPage').addEventListener('click', () => go(current + 1));
document.getElementById('zoomOut').addEventListener('click', () => { zoom = Math.max(.7, zoom - .1); applyZoom(); });
document.getElementById('zoomIn').addEventListener('click', () => { zoom = Math.min(1.7, zoom + .1); applyZoom(); });
input.addEventListener('change', () => go(input.value));
document.getElementById('searchInput').addEventListener('input', event => search(event.target.value));
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') go(current - 1);
  if (event.key === 'ArrowRight') go(current + 1);
});
const hash = location.hash.match(/page-(\d+)/);
go(hash ? Number(hash[1]) : 1);
applyZoom();
