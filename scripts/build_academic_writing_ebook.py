import html
import json
import re
import shutil
import subprocess
from pathlib import Path

import pypdf


ROOT = Path(__file__).resolve().parents[1]
SOURCE_PDF = Path(r"C:\Users\User\Downloads\한글판.pdf")
SITE = ROOT / "academic-writing-ebook"
PAGES = SITE / "assets" / "pages"
DOWNLOADS = SITE / "downloads"
PDF_OUT = DOWNLOADS / "academic-writing-ebook-korean.pdf"
POPLER = Path(
    r"C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
)

TITLE = "글로벌 역량 증진: 대학원생을 위한 학술 논문 작성"
SUBTITLE = "Academic Writing for Graduate Students"
DESCRIPTION = (
    "학술적 영어 글쓰기, 교육 연구 절차, 연구윤리, 문헌검토, 방법론, 결과 작성, "
    "논의와 결론, 연구 성과 확산까지 한 권으로 읽는 전자책"
)

CHAPTERS = [
    {"part": "Part I", "title": "학술적 영어 글쓰기와 교육 연구", "items": [
        "1장. 학술적 영어 글쓰기란 무엇인가?",
        "2장. 연구 수행하기",
        "3장. 연구에서의 학술적 영어 글쓰기",
        "4장. 연구 절차",
        "5장. 연구 윤리",
    ]},
    {"part": "Part II", "title": "연구 절차별 가이드라인", "items": [
        "6장. 글쓰기 이전의 고려사항",
        "7장. 계획 수립 및 준비 단계",
        "8장. 연구문제 설정: 문제해결형 연구 방법",
        "9장. 이론적 기반 확립",
        "10장. 포괄적 문헌 검토",
        "11장. 단순 도구를 넘어선 연구 방법론",
        "12장. 연구 결과 및 결과 제시 기법",
        "13장. 마무리: 논의 및 결론 작성",
    ]},
    {"part": "Part III", "title": "연구 및 학술적 영어 글쓰기 심화", "items": [
        "14장. 학술적 영어 글쓰기 및 교육 연구를 위한 자기 점검 목록",
        "15장. 학위논문을 넘어선 연구 결과 확산",
        "16장. 연구자 역량 개발",
        "참고문헌",
        "부록. 학위논문·영어 논문 작성 핵심 자료",
    ]},
]

START_PAGES = {
    "1장. 학술적 영어 글쓰기란 무엇인가?": 5,
    "2장. 연구 수행하기": 11,
    "3장. 연구에서의 학술적 영어 글쓰기": 15,
    "4장. 연구 절차": 19,
    "5장. 연구 윤리": 22,
    "6장. 글쓰기 이전의 고려사항": 26,
    "7장. 계획 수립 및 준비 단계": 31,
    "8장. 연구문제 설정: 문제해결형 연구 방법": 35,
    "9장. 이론적 기반 확립": 44,
    "10장. 포괄적 문헌 검토": 50,
    "11장. 단순 도구를 넘어선 연구 방법론": 56,
    "12장. 연구 결과 및 결과 제시 기법": 62,
    "13장. 마무리: 논의 및 결론 작성": 67,
    "14장. 학술적 영어 글쓰기 및 교육 연구를 위한 자기 점검 목록": 72,
    "15장. 학위논문을 넘어선 연구 결과 확산": 75,
    "16장. 연구자 역량 개발": 77,
    "참고문헌": 80,
    "부록. 학위논문·영어 논문 작성 핵심 자료": 84,
}


def clean_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    text = text.replace(" ,", ",").replace(" .", ".").replace(" ?", "?")
    return text


def page_title(text: str, page_index: int) -> str:
    text = clean_text(text)
    if page_index == 1:
        return "표지"
    if "저자 약력" in text[:120]:
        return "저자 약력"
    if "목차" in text[:80]:
        return "목차"
    patterns = [
        r"(Part\s*[ⅠⅡⅢIVX]+[^0-9]{0,80})",
        r"(\d+\s*장\s*[.·]?\s*[^•]{0,70})",
        r"(참고문헌)",
        r"(부록\s*[.·]?\s*[^•]{0,70})",
    ]
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            return clean_text(match.group(1))[:80]
    return f"{page_index}쪽"


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def asset_name(index: int) -> str:
    return f"page-{index:03d}.jpg"


def nav(current: str) -> str:
    items = [
        ("index.html", "Home"),
        ("reader.html", "E-Book Reader"),
        ("contents.html", "Contents"),
        ("brunchbook.html", "Brunchbook View"),
        ("downloads.html", "Download"),
    ]
    links = []
    for href, label in items:
        active = " active" if href == current else ""
        links.append(f'<a class="nav-link{active}" href="{href}">{label}</a>')
    return "\n".join(links)


def layout(current: str, title: str, body: str, extra_head: str = "") -> str:
    return f"""<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)} | E-Book</title>
  <meta name="description" content="{html.escape(DESCRIPTION)}">
  <link rel="stylesheet" href="assets/styles.css">
  {extra_head}
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html">
      <span class="brand-mark">AW</span>
      <span><strong>Academic Writing E-Book</strong><small>Graduate Research Writing</small></span>
    </a>
    <nav class="top-nav" aria-label="Main navigation">
      {nav(current)}
    </nav>
  </header>
  <main>
    {body}
  </main>
  <footer class="site-footer">
    <p>{html.escape(TITLE)}</p>
    <p>Designed as a web-based e-book with full-page reading, chapter navigation, and PDF download.</p>
  </footer>
</body>
</html>
"""


def build(reader: pypdf.PdfReader) -> None:
    SITE.mkdir(exist_ok=True)
    PAGES.mkdir(parents=True, exist_ok=True)
    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    shutil.copy2(SOURCE_PDF, PDF_OUT)

    page_count = len(reader.pages)
    existing = sorted(PAGES.glob("page-*.jpg"))
    if len(existing) != page_count:
        for file in existing:
            file.unlink()
        prefix = str(PAGES / "raw-page")
        subprocess.run(
            [str(POPLER), "-jpeg", "-r", "140", "-jpegopt", "quality=88", str(SOURCE_PDF), prefix],
            check=True,
        )
        for index, file in enumerate(sorted(PAGES.glob("raw-page-*.jpg")), 1):
            file.rename(PAGES / asset_name(index))

    pages = []
    for index, page in enumerate(reader.pages, 1):
        text = clean_text(page.extract_text() or "")
        pages.append({
            "number": index,
            "image": f"assets/pages/{asset_name(index)}",
            "title": page_title(text, index),
            "text": text,
        })

    write(SITE / "assets" / "ebook-data.js", "window.EBOOK_DATA = " + json.dumps({
        "title": TITLE,
        "subtitle": SUBTITLE,
        "description": DESCRIPTION,
        "pageCount": page_count,
        "chapters": CHAPTERS,
        "pages": pages,
    }, ensure_ascii=False) + ";\n")

    hero_cards = "".join(
        f"""<article class="metric-card">
          <strong>{len(part["items"])}</strong>
          <span>{html.escape(part["part"])}</span>
          <p>{html.escape(part["title"])}</p>
        </article>"""
        for part in CHAPTERS
    )
    chapter_preview = "".join(
        f"""<section class="part-band">
          <p class="eyebrow">{html.escape(part["part"])}</p>
          <h2>{html.escape(part["title"])}</h2>
          <div class="chapter-list">{''.join(f'<a href="reader.html#page-{START_PAGES.get(item, 1)}">{html.escape(item)}</a>' for item in part["items"])}</div>
        </section>"""
        for part in CHAPTERS
    )
    index_body = f"""
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Web E-Book</p>
        <h1>{html.escape(TITLE)}</h1>
        <p>{html.escape(DESCRIPTION)}</p>
        <div class="hero-actions">
          <a class="button primary" href="reader.html">전자책 바로 읽기</a>
          <a class="button" href="downloads/academic-writing-ebook-korean.pdf" download>PDF 다운로드</a>
        </div>
      </div>
      <div class="book-cover" aria-label="E-book cover">
        <span>Graduate Academic Writing</span>
        <h2>학술 논문 작성</h2>
        <p>Research Design · Literature Review · Methodology · Ethics · Publication</p>
      </div>
    </section>
    <section class="metrics">{hero_cards}</section>
    <section class="intro-grid">
      <article>
        <h2>전자책 구성</h2>
        <p>원본 PDF의 모든 페이지를 이미지 기반 e-book으로 제시하여 내용 누락 없이 읽을 수 있습니다. 장별 목차, 검색, 페이지 이동, 확대 보기, 원본 PDF 다운로드를 함께 제공합니다.</p>
      </article>
      <article>
        <h2>읽기 방식</h2>
        <p>샘플 e-book처럼 책 형태의 표지와 페이지 뷰어를 제공하고, 브런치북 스타일의 장별 연재 화면을 별도로 구성했습니다.</p>
      </article>
    </section>
    {chapter_preview}
    """
    write(SITE / "index.html", layout("index.html", TITLE, index_body))

    reader_body = """
    <section class="reader-shell">
      <aside class="reader-panel">
        <p class="eyebrow">E-Book Reader</p>
        <h1>전자책 읽기</h1>
        <label class="search-label" for="searchInput">본문 검색</label>
        <input id="searchInput" class="search-input" type="search" placeholder="검색어를 입력하세요">
        <div class="reader-controls">
          <button id="prevPage" type="button">이전</button>
          <input id="pageInput" type="number" min="1" value="1" aria-label="Page number">
          <button id="nextPage" type="button">다음</button>
        </div>
        <div class="reader-controls compact">
          <button id="zoomOut" type="button">축소</button>
          <button id="zoomIn" type="button">확대</button>
        </div>
        <p id="pageMeta" class="page-meta"></p>
        <div id="searchResults" class="search-results"></div>
      </aside>
      <section class="page-stage" aria-label="Book page">
        <img id="pageImage" src="assets/pages/page-001.jpg" alt="E-book page 1">
      </section>
    </section>
    <script src="assets/ebook-data.js"></script>
    <script src="assets/reader.js"></script>
    """
    write(SITE / "reader.html", layout("reader.html", "전자책 읽기", reader_body))

    contents_sections = []
    for part in CHAPTERS:
        items = "".join(
            f'<li><a href="reader.html#page-{START_PAGES.get(item, 1)}">{html.escape(item)}</a></li>'
            for item in part["items"]
        )
        contents_sections.append(f"""
        <article class="contents-card">
          <p class="eyebrow">{html.escape(part["part"])}</p>
          <h2>{html.escape(part["title"])}</h2>
          <ol>{items}</ol>
        </article>
        """)
    contents_body = f"""
    <section class="page-hero slim">
      <p class="eyebrow">Table of Contents</p>
      <h1>목차</h1>
      <p>총 {page_count}쪽으로 구성된 원문 기반 전자책입니다.</p>
    </section>
    <section class="contents-grid">{''.join(contents_sections)}</section>
    <section class="all-pages">
      <h2>페이지별 바로가기</h2>
      <div id="pageLinks" class="page-links"></div>
    </section>
    <script src="assets/ebook-data.js"></script>
    <script src="assets/contents.js"></script>
    """
    write(SITE / "contents.html", layout("contents.html", "목차", contents_body))

    brunch_items = []
    chapter_number = 1
    for part in CHAPTERS:
        for item in part["items"]:
            brunch_items.append(f"""
            <a class="episode-card" href="reader.html#page-{START_PAGES.get(item, 1)}">
              <span>{chapter_number:02d}</span>
              <h2>{html.escape(item)}</h2>
              <p>{html.escape(part["title"])}</p>
            </a>
            """)
            chapter_number += 1
    brunch_body = f"""
    <section class="brunch-hero">
      <p class="eyebrow">Brunchbook Style</p>
      <h1>{html.escape(TITLE)}</h1>
      <p>{html.escape(SUBTITLE)}</p>
      <a class="button primary" href="reader.html">전체 전자책 읽기</a>
    </section>
    <section class="episode-grid">{''.join(brunch_items)}</section>
    """
    write(SITE / "brunchbook.html", layout("brunchbook.html", "Brunchbook View", brunch_body))

    downloads_body = f"""
    <section class="page-hero slim">
      <p class="eyebrow">Download</p>
      <h1>전자책 다운로드</h1>
      <p>원본 PDF와 웹 e-book 페이지를 함께 제공합니다.</p>
    </section>
    <section class="download-panel">
      <article>
        <h2>원본 PDF</h2>
        <p>{html.escape(TITLE)} 원문 PDF 파일입니다.</p>
        <a class="button primary" href="downloads/academic-writing-ebook-korean.pdf" download>PDF 다운로드</a>
      </article>
      <article>
        <h2>온라인 읽기</h2>
        <p>웹 브라우저에서 바로 넘겨 읽는 e-book 뷰어입니다.</p>
        <a class="button" href="reader.html">전자책 열기</a>
      </article>
    </section>
    """
    write(SITE / "downloads.html", layout("downloads.html", "다운로드", downloads_body))

    write(SITE / "assets" / "reader.js", """
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
const hash = location.hash.match(/page-(\\d+)/);
go(hash ? Number(hash[1]) : 1);
applyZoom();
""")

    write(SITE / "assets" / "contents.js", """
const links = document.getElementById('pageLinks');
for (const page of window.EBOOK_DATA.pages) {
  const a = document.createElement('a');
  a.href = `reader.html#page-${page.number}`;
  a.textContent = `${page.number}쪽`;
  a.title = page.title;
  links.appendChild(a);
}
""")

    write(SITE / "assets" / "styles.css", """
:root {
  --ink: #172033;
  --muted: #647084;
  --line: #dfe5ee;
  --paper: #fffdf8;
  --soft: #f4f7fb;
  --accent: #1f6f8b;
  --accent-2: #a84f2a;
  --deep: #102a43;
  --shadow: 0 18px 48px rgba(19, 39, 64, .14);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: linear-gradient(180deg, #f7f9fc 0%, #eef3f7 100%);
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Segoe UI", sans-serif;
  line-height: 1.65;
  letter-spacing: 0;
}
a { color: inherit; text-decoration: none; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px clamp(18px, 4vw, 56px);
  background: rgba(255, 255, 255, .92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}
.brand { display: flex; align-items: center; gap: 12px; min-width: 220px; }
.brand-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--deep);
  border-radius: 12px;
  font-weight: 800;
}
.brand small { display: block; color: var(--muted); font-size: 12px; margin-top: 1px; }
.top-nav { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
.nav-link {
  padding: 9px 12px;
  border-radius: 999px;
  color: #3d4b5f;
  font-size: 14px;
  border: 1px solid transparent;
}
.nav-link.active, .nav-link:hover { border-color: #b9c9d9; background: #fff; color: var(--deep); }
main { min-height: 72vh; }
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .68fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
  padding: clamp(48px, 8vw, 90px) clamp(18px, 5vw, 72px) 42px;
}
.hero-copy h1, .page-hero h1, .brunch-hero h1 {
  margin: 0;
  max-width: 920px;
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.12;
  letter-spacing: 0;
}
.hero-copy p, .page-hero p, .brunch-hero p {
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(16px, 2vw, 20px);
}
.eyebrow {
  margin: 0 0 10px;
  color: var(--accent);
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
}
.hero-actions, .reader-controls { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.button, button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #c8d4df;
  background: #fff;
  color: var(--deep);
  font-weight: 750;
  cursor: pointer;
}
.button.primary {
  background: var(--deep);
  border-color: var(--deep);
  color: #fff;
}
.book-cover {
  min-height: 430px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px 22px 22px 8px;
  background:
    linear-gradient(90deg, rgba(0,0,0,.16), transparent 8%),
    radial-gradient(circle at 85% 12%, rgba(255,255,255,.35), transparent 22%),
    linear-gradient(135deg, #16324f 0%, #1f6f8b 55%, #d1a15d 100%);
  box-shadow: var(--shadow);
  color: #fff;
}
.book-cover h2 { font-size: clamp(32px, 4vw, 52px); line-height: 1.15; margin: 0; }
.book-cover span { font-weight: 800; opacity: .86; }
.book-cover p { max-width: 320px; margin: 0; }
.metrics, .intro-grid, .contents-grid, .episode-grid, .download-panel {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto 38px;
}
.metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.metric-card, .intro-grid article, .contents-card, .download-panel article, .episode-card {
  background: rgba(255,255,255,.86);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 10px 26px rgba(19, 39, 64, .06);
}
.metric-card { padding: 20px; }
.metric-card strong { display: block; font-size: 38px; color: var(--accent-2); }
.metric-card span { font-weight: 800; }
.metric-card p { margin: 8px 0 0; color: var(--muted); }
.intro-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.intro-grid article { padding: 26px; }
.intro-grid h2, .part-band h2, .contents-card h2, .download-panel h2 { margin: 0 0 10px; line-height: 1.25; }
.part-band {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto 20px;
  padding: 28px;
  border-top: 1px solid var(--line);
}
.chapter-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.chapter-list a {
  padding: 12px 14px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--line);
  color: #263448;
}
.page-hero, .brunch-hero {
  padding: clamp(42px, 7vw, 76px) clamp(18px, 5vw, 72px) 28px;
}
.page-hero.slim { padding-bottom: 18px; }
.contents-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; align-items: start; }
.contents-card { padding: 24px; }
.contents-card ol { padding-left: 22px; margin-bottom: 0; }
.contents-card li { margin: 8px 0; }
.all-pages { width: min(1180px, calc(100% - 36px)); margin: 0 auto 48px; }
.page-links { display: flex; flex-wrap: wrap; gap: 8px; }
.page-links a {
  min-width: 52px;
  text-align: center;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--line);
  font-size: 13px;
}
.reader-shell {
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  gap: 22px;
  padding: 22px;
}
.reader-panel {
  position: sticky;
  top: 86px;
  align-self: start;
  max-height: calc(100vh - 108px);
  overflow: auto;
  padding: 22px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
}
.reader-panel h1 { margin: 0 0 16px; font-size: 28px; }
.search-label { display: block; font-weight: 800; margin-bottom: 6px; }
.search-input, #pageInput {
  width: 100%;
  min-height: 42px;
  border: 1px solid #c6d2dd;
  border-radius: 8px;
  padding: 9px 11px;
  font: inherit;
}
#pageInput { max-width: 82px; text-align: center; }
.reader-controls { margin-top: 12px; }
.reader-controls.compact button { flex: 1; }
.page-meta { color: var(--muted); font-weight: 700; }
.search-results { display: grid; gap: 8px; margin-top: 16px; }
.search-results button {
  width: 100%;
  display: grid;
  justify-content: start;
  text-align: left;
  border-radius: 8px;
}
.search-results span { color: var(--muted); font-size: 13px; }
.empty { color: var(--muted); }
.page-stage {
  min-height: 76vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(12px, 3vw, 36px);
  background:
    linear-gradient(90deg, rgba(16,42,67,.08) 1px, transparent 1px),
    linear-gradient(#f5f8fb, #edf2f6);
  background-size: 24px 24px;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: auto;
}
.page-stage img {
  width: 100%;
  max-width: 920px;
  height: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: var(--shadow);
}
.brunch-hero {
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #fff8ed, #eef7fb 55%, #eef2f6);
  border-bottom: 1px solid var(--line);
}
.episode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 34px;
}
.episode-card { padding: 22px; transition: transform .18s ease, box-shadow .18s ease; }
.episode-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.episode-card span { color: var(--accent-2); font-weight: 900; }
.episode-card h2 { margin: 10px 0 8px; font-size: 20px; line-height: 1.32; }
.episode-card p { margin: 0; color: var(--muted); }
.download-panel { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.download-panel article { padding: 28px; }
.site-footer {
  padding: 28px clamp(18px, 5vw, 72px);
  color: var(--muted);
  border-top: 1px solid var(--line);
  background: #fff;
}
.site-footer p { margin: 4px 0; }
@media (max-width: 900px) {
  .site-header { position: static; align-items: flex-start; flex-direction: column; }
  .top-nav { justify-content: flex-start; }
  .hero, .intro-grid, .download-panel, .reader-shell { grid-template-columns: 1fr; }
  .metrics, .contents-grid, .episode-grid { grid-template-columns: 1fr; }
  .reader-panel { position: static; max-height: none; }
  .chapter-list { grid-template-columns: 1fr; }
  .book-cover { min-height: 320px; }
}
@media (max-width: 560px) {
  .nav-link { flex: 1 1 auto; text-align: center; }
  .hero-copy h1, .page-hero h1, .brunch-hero h1 { font-size: 32px; }
  .reader-shell { padding: 12px; }
  .page-stage { padding: 10px; }
}
""")


if __name__ == "__main__":
    if not SOURCE_PDF.exists():
        raise SystemExit(f"Missing source PDF: {SOURCE_PDF}")
    if not POPLER.exists():
        raise SystemExit(f"Missing pdftoppm: {POPLER}")
    build(pypdf.PdfReader(str(SOURCE_PDF)))
    print(f"Built {SITE}")
