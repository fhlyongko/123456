const modules = [
  { id: "w01", week: "Week 1", cat: "foundation", col: "start", title: "Academic Writing as Inquiry", text: "Understand audience, purpose, claim, evidence, and the basic architecture of academic writing.", file: "../materials/week1-academic-writing-summary-40slides-redesign.pdf" },
  { id: "w02", week: "Week 2", cat: "planning", col: "start", title: "From Interest to Research Question", text: "Narrow a broad interest into a focused, arguable, and researchable writing question.", file: "../materials/week2-research-planning-academic-writing-40slides-redesign.pdf" },
  { id: "w03", week: "Week 3", cat: "planning", col: "evidence", title: "Reading Sources Critically", text: "Identify claims, evidence, limitations, and relevance across academic sources.", file: "../materials/week3-theory-literature-submission-40slides.pdf" },
  { id: "w04", week: "Week 4", cat: "writing", col: "draft", title: "Structuring Introduction, Body, and Conclusion", text: "Design a complete outline with a clear introduction, body paragraphs, and conclusion.", file: "../materials/week4-methodology-results-discussion-40slides.pdf" },
  { id: "w05", week: "Week 5", cat: "writing", col: "draft", title: "Reading a Draft as a Reviewer", text: "Revise clarity, information order, and paragraph function from the reader's perspective.", file: "../materials/week5-reviewer-view-paper-sections-40slides.pdf" },
  { id: "w06", week: "Week 6", cat: "ethics", col: "finish", title: "Citation, Paraphrase, and Academic Integrity", text: "Practice ethical quotation, paraphrase, summary, citation, and reference use.", file: "../materials/week6-research-problem-procedure-ethics-40slides.pdf" },
  { id: "w07", week: "Week 7", cat: "writing", col: "draft", title: "Evidence Paragraphs and Analytical Sentences", text: "Build paragraphs with a topic sentence, evidence, explanation, and connection.", file: "../materials/week7-methodology-results-writing-functions-40slides.pdf" },
  { id: "w08", week: "Week 8", cat: "portfolio", col: "draft", title: "Midterm Writing Checkpoint", text: "Review topic, source notes, outline, paragraph drafts, and a concrete revision plan." },
  { id: "w09", week: "Week 9", cat: "writing", col: "evidence", title: "Explaining Tables, Figures, and References", text: "Describe visual information accurately and connect it to the argument.", file: "../materials/week9-visual-references-recommendations-academic-language-40slides.pdf" },
  { id: "w10", week: "Week 10", cat: "writing", col: "draft", title: "Sentence Clarity and Paragraph Revision", text: "Improve long, vague, or repetitive sentences and strengthen paragraph flow.", file: "../materials/week10-academic-writing-handbook-summary-40slides.pdf" },
  { id: "w11", week: "Week 11", cat: "planning", col: "evidence", title: "Evidence-Based Argumentation", text: "Use sources to support, qualify, and refine the central argument.", file: "../materials/week11-academic-writing-research-process-40slides.pdf" },
  { id: "w12", week: "Week 12", cat: "portfolio", col: "finish", title: "Model Text Analysis and Self-Introduction", text: "Analyze strong writing samples and introduce your own project concisely.", file: "../materials/week12-academic-career-writing-30slides.pdf" },
  { id: "w13", week: "Week 13", cat: "writing", col: "evidence", title: "Explaining Quantitative Results", text: "Report numbers, tables, and patterns clearly without overclaiming.", file: "../materials/week13-quantitative-research-writing-40slides.pdf" },
  { id: "w14", week: "Week 14", cat: "ethics", col: "finish", title: "Responsible AI Use in Academic Writing", text: "Use AI for support while keeping verification, citation, transparency, and responsibility visible.", file: "../materials/week14-research-ai-ethics-39slides.pdf" },
  { id: "w15", week: "Week 15", cat: "portfolio", col: "finish", title: "Final Writing Portfolio", text: "Submit the final paper, revision history, reflection, and presentation materials.", file: "../materials/week15-researcher-growth-20slides.pdf" }
];

const referenceMaterials = {
  "w01": {
    "title": "영어 논문 작성법",
    "summary": "학술 영어, 연구질문과 목적의 정렬, 논문 구조, 리뷰어 관점"
  },
  "w02": {
    "title": "연구계획 수립과 학술적 글쓰기",
    "summary": "연구계획, 문제 설정, 서론의 깔때기 구조, 연구방법과 글쓰기"
  },
  "w03": {
    "title": "이론적 기반과 문헌고찰",
    "summary": "이론적 기반, 문헌고찰, 정의·비교·대조, 학술지 투고 준비"
  },
  "w04": {
    "title": "연구방법론, 결과 제시, 논의와 결론",
    "summary": "방법론과 방법의 차이, 결과 제시, 논의·결론의 역할, 학술 표현"
  },
  "w05": {
    "title": "리뷰어의 관점에서 영어 논문 살펴보기",
    "summary": "심사 기준, 초록부터 결론까지의 섹션별 기능, 논문의 정렬 점검"
  },
  "w06": {
    "title": "연구 시작부터 연구 절차 및 윤리까지",
    "summary": "연구문제 설정, 연구계획, 연구 절차, IRB와 연구윤리"
  },
  "w07": {
    "title": "연구 방법론에서 결론 작성까지",
    "summary": "방법론, 양적·질적·혼합 연구 결과, 논의·결론, 학술 표현 기능"
  },
  "w09": {
    "title": "시각 자료, 제안점, 한계점, 학문적 언어",
    "summary": "표·그림 참조, 권장사항, 연구 한계, 인과·신중한 언어와 분류 표현"
  },
  "w10": {
    "title": "학술 영어 논문 작성 핸드북",
    "summary": "연구 설계부터 문헌고찰, 방법론, 결과·논의, 자기점검과 연구 확산까지"
  },
  "w11": {
    "title": "영어학술논문작성: 아이디어에서 연구보고까지",
    "summary": "학술 글쓰기 원칙, 연구 절차와 윤리, 이론·문헌고찰, 방법과 결과·논의"
  },
  "w12": {
    "title": "논문 사례 분석과 학문 커리어 문서 작성",
    "summary": "연구논문 사례 분석, Cover Letter, CV, Research Statement, Teaching Statement"
  },
  "w13": {
    "title": "양적연구 영어 논문 작성 가이드",
    "summary": "양적연구 논문의 제목부터 결론까지의 구조, 템플릿, 통계·학술 표현"
  },
  "w14": {
    "title": "연구 윤리와 AI 윤리의 중요성",
    "summary": "연구윤리, 연구 부정행위, 저자·데이터 관리, AI 사용 공개와 개인정보 보호"
  },
  "w15": {
    "title": "연구자의 성장과 발전",
    "summary": "연구 진행 상황의 자기점검, 연구 결과 확산, 역량 개발과 성장 계획"
  }
};

const resources = modules.filter((item) => item.file).map((item) => ({
  ...item,
  title: `${item.week}: ${referenceMaterials[item.id].title}`,
  summary: referenceMaterials[item.id].summary
}));

const labels = {
  foundation: "Foundation",
  planning: "Topic & Sources",
  writing: "Drafting",
  ethics: "Ethics & AI",
  portfolio: "Portfolio"
};

function renderModuleBoard() {
  const board = document.querySelector("[data-module-board]");
  if (!board) return;
  const columns = [
    ["start", "Start and Design"],
    ["evidence", "Sources and Evidence"],
    ["draft", "Draft and Revision"],
    ["finish", "Ethics and Completion"]
  ];
  board.innerHTML = columns.map(([id, title]) => {
    const items = modules.filter((item) => item.col === id);
    return `<section class="board-column"><div class="column-title"><strong>${title}</strong><span>${items.length}</span></div><div class="module-list">${items.map(moduleCard).join("")}</div></section>`;
  }).join("");
}

function moduleCard(item) {
  const file = item.file ? `<a class="mini-link" href="${item.file}" download>참고 PDF 다운로드</a>` : `<span class="mini-link">중간 점검 · 별도 PDF 미연결</span>`;
  return `<article class="module-card" data-category="${item.cat}" data-text="${[item.week, item.title, item.text, referenceMaterials[item.id]?.title, labels[item.cat]].join(" ").toLowerCase()}">
    <div class="module-meta"><span class="pill">${item.week}</span><span class="pill">${labels[item.cat]}</span></div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    ${item.file ? `<p>참고 PDF: ${referenceMaterials[item.id].title}</p>` : ""}
    <div class="module-actions">${file}<a class="mini-link" href="modules.html#${item.id}">Open detail</a></div>
  </article>`;
}

function renderModuleDetails() {
  const grid = document.querySelector("[data-module-details]");
  if (!grid) return;
  grid.innerHTML = modules.map((item) => `<article class="module-card" id="${item.id}" data-category="${item.cat}" data-text="${[item.week, item.title, item.text, referenceMaterials[item.id]?.title, labels[item.cat]].join(" ").toLowerCase()}">
    <div class="module-meta"><span class="pill">${item.week}</span><span class="pill">${labels[item.cat]}</span></div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    ${item.file ? `<p>참고 PDF: ${referenceMaterials[item.id].title}</p>` : ""}
    <ul>
      <li><strong>Before class:</strong> ${item.file ? "Preview the reference PDF and write two questions." : "Review your topic, source notes, outline, and paragraph drafts."}</li>
      <li><strong>During class:</strong> Complete the short writing activity connected to the weekly theme.</li>
      <li><strong>After class:</strong> Revise one part of your academic writing portfolio.</li>
    </ul>
    <div class="module-actions">${item.file ? `<a class="mini-link" href="${item.file}" download>참고 PDF 다운로드</a>` : `<span class="mini-link">중간 점검 · 별도 PDF 미연결</span>`}</div>
  </article>`).join("");
  attachFilters();
}

function renderResources() {
  const grid = document.querySelector("[data-resources]");
  if (!grid) return;
  grid.innerHTML = resources.map((item) => `<a class="resource-card" href="${item.file}" download data-category="${item.cat}" data-text="${[item.week, item.title, item.summary, labels[item.cat]].join(" ").toLowerCase()}">
    <span class="tag teal">PDF</span>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <span class="button primary">Download PDF</span>
  </a>`).join("");
  attachFilters();
}

function attachFilters() {
  const search = document.querySelector("[data-search]");
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  if (!cards.length) return;
  let active = "all";
  const apply = () => {
    const q = (search?.value || "").trim().toLowerCase();
    cards.forEach((card) => {
      const okFilter = active === "all" || card.dataset.category === active;
      const okSearch = !q || (card.dataset.text || card.textContent.toLowerCase()).includes(q);
      card.classList.toggle("hidden", !(okFilter && okSearch));
    });
  };
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      active = button.dataset.filter;
      filters.forEach((b) => {
        const selected = b === button;
        b.classList.toggle("active", selected);
        b.setAttribute("aria-pressed", String(selected));
      });
      apply();
    });
  });
  search?.addEventListener("input", apply);
  apply();
}

function renderFilters() {
  document.querySelectorAll("[data-filter-row]").forEach((row) => {
    row.innerHTML = [`<button class="filter active" data-filter="all" type="button" aria-pressed="true">All</button>`]
      .concat(Object.entries(labels).map(([id, label]) => `<button class="filter" data-filter="${id}" type="button" aria-pressed="false">${label}</button>`))
      .join("");
  });
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
    toggle.textContent = "☰";
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    toggle.textContent = open ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderFilters();
  renderModuleBoard();
  renderModuleDetails();
  renderResources();
  attachFilters();
});
