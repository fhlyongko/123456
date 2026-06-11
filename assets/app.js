const modules = [
  {
    week: 1,
    title: "영어 논문 작성의 큰 지도",
    category: "writing",
    file: "week1-academic-writing-summary-40slides-redesign.pdf",
    goals: ["Academic English의 목적 이해", "연구 질문, 방법, 증거, 기여의 정렬", "리뷰어 관점으로 논문 구조 보기"],
    concepts: ["EAP/ESP", "Simple and clear English", "Research alignment"],
    activity: "자신의 연구 주제를 한 문장으로 쓰고 목적, 질문, 방법, 기여를 연결해 본다.",
    assignment: "연구 주제 1개를 선택하고 연구 목적과 예상 독자를 150단어 이내로 작성한다.",
    checklist: ["연구 주제가 한 문장으로 표현되었는가?", "목적, 질문, 방법, 기여가 서로 연결되는가?", "영어 표현이 복잡함보다 명확성을 우선하는가?"]
  },
  {
    week: 2,
    title: "연구계획 수립과 문제 설정",
    category: "planning",
    file: "week2-research-planning-academic-writing-40slides-redesign.pdf",
    goals: ["논문 작성 계획 단계 이해", "서론의 funnel 구조 정리", "문제해결형 연구 주제 설계"],
    concepts: ["Research planning", "Introduction funnel", "Problem definition"],
    activity: "관심 주제를 연구 문제로 좁히고 why, what, how 질문을 만든다.",
    assignment: "관심사, 문제, 목적, 문헌, 연구 질문을 포함한 research planning memo를 작성한다.",
    checklist: ["넓은 관심사가 구체적인 연구 문제로 좁혀졌는가?", "서론의 배경-공백-목적 흐름이 보이는가?", "연구 질문이 실제 자료와 방법으로 답할 수 있는가?"]
  },
  {
    week: 3,
    title: "이론적 기반과 문헌고찰",
    category: "planning",
    file: "week3-theory-literature-submission-40slides.pdf",
    goals: ["이론적 기반의 의미 이해", "문헌고찰의 탐색, 조직화, 작성", "투고 가능한 연구 프로필 만들기"],
    concepts: ["Theoretical foundation", "Literature review", "Journal submission"],
    activity: "선행연구 5편을 비교해 공통점, 차이점, 연구 공백을 표로 정리한다.",
    assignment: "문헌고찰 매트릭스와 research gap 문장 3개를 제출한다.",
    checklist: ["이론이 연구 질문과 분석 관점을 뒷받침하는가?", "선행연구를 단순 요약이 아니라 비교·대조했는가?", "연구 공백이 명시적인 문장으로 제시되었는가?"]
  },
  {
    week: 4,
    title: "방법론, 결과 제시, 논의와 결론",
    category: "writing",
    file: "week4-methodology-results-discussion-40slides.pdf",
    goals: ["Methodology와 methods의 차이 이해", "결과 제시 방식 정리", "논의와 결론의 역할 구분"],
    concepts: ["Research paradigm", "Results", "Discussion moves"],
    activity: "자신의 연구방법을 철학적 전제, 자료수집, 분석 절차로 분리해 설명한다.",
    assignment: "방법론 섹션 초안 1쪽 또는 결과 제시 문단 2개를 작성한다.",
    checklist: ["방법론의 철학적 근거와 실제 방법이 구분되는가?", "결과 문단이 표나 자료를 반복하지 않고 의미를 설명하는가?", "논의가 결과를 연구 질문과 다시 연결하는가?"]
  },
  {
    week: 5,
    title: "리뷰어 관점에서 논문 섹션 점검",
    category: "writing",
    file: "week5-reviewer-view-paper-sections-40slides.pdf",
    goals: ["리뷰어 평가 기준 이해", "초록부터 결론까지 섹션별 기능 점검", "내 초안에 체크리스트 적용"],
    concepts: ["Reviewer lens", "Section alignment", "Journal fit"],
    activity: "논문 초록 또는 서론을 리뷰어 체크리스트로 진단한다.",
    assignment: "내 논문 초안의 강점 3개와 보완점 3개를 reviewer memo 형식으로 작성한다.",
    checklist: ["초록에서 연구 목적, 방법, 결과, 기여가 빠르게 보이는가?", "연구 질문과 방법, 결과, 논의가 정렬되는가?", "저널 독자에게 필요한 기여가 분명한가?"]
  },
  {
    week: 6,
    title: "연구 시작, 절차, IRB와 윤리",
    category: "ethics",
    file: "week6-research-problem-procedure-ethics-40slides.pdf",
    goals: ["글쓰기 이전의 why 정리", "연구 절차와 IRB 이해", "윤리적 글쓰기 기준 확인"],
    concepts: ["Research procedure", "IRB", "Ethical writing"],
    activity: "연구 대상, 자료수집, 개인정보, 동의 절차의 위험 요소를 점검한다.",
    assignment: "연구 절차표와 윤리 체크리스트 초안을 제출한다.",
    checklist: ["참여자 모집, 동의, 자료수집 절차가 순서대로 설명되는가?", "개인정보 보호와 자료 보관 계획이 포함되었는가?", "연구자의 역할과 잠재적 위험을 점검했는가?"]
  },
  {
    week: 7,
    title: "방법론에서 결론 작성까지",
    category: "writing",
    file: "week7-methodology-results-writing-functions-40slides.pdf",
    goals: ["양적, 질적, 혼합 연구 방법 정리", "결과 시각화와 논의 작성", "학술적 글쓰기 기능 활용"],
    concepts: ["Quantitative", "Qualitative", "Mixed methods", "Conclusion"],
    activity: "한 개의 표나 그림을 선택해 결과 문단과 논의 문단을 각각 작성한다.",
    assignment: "결과 해석 문장 5개와 논의 문단 1개를 작성한다.",
    checklist: ["결과 문장이 자료의 핵심 패턴을 정확히 설명하는가?", "논의 문단이 선행연구와 연결되는가?", "결론이 과장 없이 연구의 기여와 한계를 제시하는가?"]
  },
  {
    week: 8,
    title: "중간 점검 워크숍",
    category: "planning",
    file: "",
    goals: ["1-7주차 산출물 통합", "연구 질문과 방법론 정렬 점검", "동료 피드백 반영 계획 수립"],
    concepts: ["Draft clinic", "Peer feedback", "Revision plan"],
    activity: "연구 질문, 문헌고찰, 방법론 초안을 서로 교환해 피드백한다.",
    assignment: "중간 수정계획서와 다음 3주 작성 일정을 제출한다.",
    checklist: ["지금까지의 산출물이 하나의 논문 흐름으로 연결되는가?", "동료 피드백이 구체적인 수정 계획으로 바뀌었는가?", "다음 작성 일정이 현실적으로 배분되었는가?"]
  },
  {
    week: 9,
    title: "시각 자료, 제안점, 한계점, 학문적 언어",
    category: "writing",
    file: "week9-visual-references-recommendations-academic-language-40slides.pdf",
    goals: ["표와 그림을 본문에서 참조", "권장사항과 한계점 작성", "신중한 학술 표현 사용"],
    concepts: ["Visual reference", "Limitations", "Hedging", "Causality"],
    activity: "표 또는 그림을 설명하는 문장 3개와 한계점 문장 2개를 작성한다.",
    assignment: "시각자료 참조 문단과 limitation paragraph를 제출한다.",
    checklist: ["표와 그림을 번호와 핵심 패턴으로 정확히 참조했는가?", "한계점이 연구의 가치를 약화하지 않도록 균형 있게 쓰였는가?", "인과 표현과 신중한 표현을 구분해 사용했는가?"]
  },
  {
    week: 10,
    title: "학술 영어 논문 작성 핸드북",
    category: "writing",
    file: "week10-academic-writing-handbook-summary-40slides.pdf",
    goals: ["학술 글쓰기 기본 원칙 종합", "아이디어부터 확산까지 전체 여정 이해", "명확성, 정확성, 증거 기반 점검"],
    concepts: ["Clarity", "Accuracy", "Evidence-based argument", "Research process"],
    activity: "내 논문 초안에서 모호한 문장 3개를 명확한 문장으로 고친다.",
    assignment: "초록 또는 서론 1개 단락을 revise-before/after 형식으로 제출한다.",
    checklist: ["문장이 불필요하게 길거나 모호하지 않은가?", "주장마다 자료, 인용, 분석 근거가 연결되는가?", "수정 전후의 개선 이유를 설명할 수 있는가?"]
  },
  {
    week: 11,
    title: "아이디어에서 연구보고까지",
    category: "planning",
    file: "week11-academic-writing-research-process-40slides.pdf",
    goals: ["연구 수행 과정과 글쓰기 연결", "인용과 증거 기반 논증 강화", "보고서에서 논문으로 발전"],
    concepts: ["Research process", "Citation", "Argumentation", "Revision"],
    activity: "선행연구 인용 문장을 단순 요약형에서 비판적 논증형으로 수정한다.",
    assignment: "문헌 인용 문장 5개와 연구 공백 단락 1개를 작성한다.",
    checklist: ["인용이 단순 나열이 아니라 논증의 근거로 쓰였는가?", "연구 공백이 기존 연구의 한계와 연결되는가?", "보고서식 설명을 논문식 주장으로 바꾸었는가?"]
  },
  {
    week: 12,
    title: "논문 사례 분석과 학문 커리어 문서",
    category: "career",
    file: "week12-academic-career-writing-30slides.pdf",
    goals: ["실제 논문의 구조와 기여 분석", "Cover Letter와 CV 이해", "Research/Teaching Statement 방향 설정"],
    concepts: ["Article analysis", "Cover letter", "CV", "Research statement"],
    activity: "샘플 논문 1편의 연구 공백, 방법, 결과, 기여를 역추적한다.",
    assignment: "짧은 academic bio와 cover letter opening paragraph를 작성한다.",
    checklist: ["논문 사례의 연구 공백, 방법, 결과, 기여를 구분했는가?", "academic bio가 연구 분야와 강점을 간결하게 보여주는가?", "cover letter 첫 문단이 지원 목적과 적합성을 분명히 말하는가?"]
  },
  {
    week: 13,
    title: "양적연구 영어 논문 작성",
    category: "writing",
    file: "week13-quantitative-research-writing-40slides.pdf",
    goals: ["양적연구 논문의 표준 구조 이해", "제목과 초록 템플릿 적용", "방법, 결과, 논의 문장 패턴 익히기"],
    concepts: ["Title pattern", "Abstract 5-sentence structure", "Methods", "Statistical results"],
    activity: "자신의 연구를 5문장 abstract 구조로 압축한다.",
    assignment: "Title 3개 버전과 structured abstract 초안을 제출한다.",
    checklist: ["제목이 방법, 대상, 핵심 변수를 구체적으로 보여주는가?", "초록이 배경-공백-목적-방법-기여 흐름을 갖추었는가?", "통계 결과 표현이 정확하고 과장되지 않았는가?"]
  },
  {
    week: 14,
    title: "연구윤리와 AI 윤리",
    category: "ethics",
    file: "week14-research-ai-ethics-39slides.pdf",
    goals: ["연구윤리 기본 원칙 이해", "FFP와 중복게재 위험 구분", "AI 도구 활용의 투명성 점검"],
    concepts: ["Integrity", "Belmont Report", "FFP", "AI transparency", "Privacy"],
    activity: "AI 활용 가능 범위와 disclosure 문장을 수업 맥락에 맞게 작성한다.",
    assignment: "연구윤리 및 AI 활용 선언문 초안을 제출한다.",
    checklist: ["위조, 변조, 표절, 중복게재 위험을 구분할 수 있는가?", "AI 사용 범위와 검증 책임이 투명하게 제시되었는가?", "개인정보와 연구자료 보호 기준을 포함했는가?"]
  },
  {
    week: 15,
    title: "연구자의 성장과 발전",
    category: "career",
    file: "week15-researcher-growth-20slides.pdf",
    goals: ["학술 글쓰기 성장 과정 성찰", "연구 확산과 역량 개발 계획", "다음 연구 로드맵 수립"],
    concepts: ["Reflection", "Research dissemination", "Growth roadmap", "Researcher development"],
    activity: "이번 학기 산출물을 바탕으로 성장 포트폴리오를 구성한다.",
    assignment: "최종 연구 포트폴리오와 6개월 연구 성장 로드맵을 제출한다.",
    checklist: ["이번 학기 산출물이 포트폴리오 형태로 정리되었는가?", "연구 확산, 투고, 발표 계획이 구체적인 일정으로 제시되었는가?", "다음 연구 역량 개발 목표가 현실적인가?"]
  }
];

const tools = [
  {
    title: "Research Question Builder",
    body: "관심 주제를 연구 가능한 질문으로 바꾸는 템플릿입니다.",
    items: ["Topic: I am interested in examining ...", "Problem: However, little is known about ...", "Purpose: This study aims to investigate ...", "Question: How does ... influence ...?", "Question: To what extent does ... predict ...?"]
  },
  {
    title: "Abstract 5-Sentence Frame",
    body: "양적·질적 논문 초록을 빠르게 구성하는 기본 구조입니다.",
    items: ["Background: Recent research has emphasized the importance of ...", "Gap: Nevertheless, limited attention has been paid to ...", "Objective: This study investigates ...", "Methods: Data were collected from ... and analyzed using ...", "Contribution: The findings suggest that ..."]
  },
  {
    title: "Reviewer Checklist",
    body: "초안 제출 전 심사자 관점에서 확인할 항목입니다.",
    items: ["Is the research gap explicit?", "Are the research questions aligned with the methods?", "Are the results directly connected to the research questions?", "Does the discussion explain the contribution and limitations of the study?"]
  },
  {
    title: "Ethics & AI Disclosure",
    body: "연구윤리와 AI 활용 투명성을 점검하는 문장 틀입니다.",
    items: ["Participants provided informed consent before data collection.", "The study followed institutional ethical guidelines.", "AI tools were used only for language revision, organization, or brainstorming as permitted by the course policy.", "All substantive claims, analyses, and citations were verified by the author."]
  }
];

const moduleGrid = document.querySelector("#moduleGrid");
const toolGrid = document.querySelector("#toolGrid");
const materialsList = document.querySelector("#materialsList");
const searchInput = document.querySelector("#moduleSearch");
const filterButtons = document.querySelectorAll(".filter");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const note = document.querySelector("#studentNote");
const saveNote = document.querySelector("#saveNote");
const saveState = document.querySelector("#saveState");

let activeFilter = "all";
const doneKey = "graduate-writing-lms-complete";
const noteKey = "graduate-writing-lms-note";
const completed = new Set(JSON.parse(localStorage.getItem(doneKey) || "[]"));

function moduleText(module) {
  return [module.title, module.category, module.goals.join(" "), module.concepts.join(" "), module.activity, module.assignment].join(" ").toLowerCase();
}

function renderModules() {
  const query = searchInput.value.trim().toLowerCase();
  moduleGrid.innerHTML = "";

  modules
    .filter((module) => activeFilter === "all" || module.category === activeFilter)
    .filter((module) => !query || moduleText(module).includes(query))
    .forEach((module) => {
      const card = document.createElement("article");
      card.className = "module-card";
      const checked = completed.has(module.week);
      const download = module.file
        ? `<a class="download" href="materials/${encodeURIComponent(module.file)}" download>PDF 다운로드</a>`
        : `<span class="tag">워크숍 자료 없음</span>`;
      card.innerHTML = `
        <div class="module-top">
          <span class="week-badge">Week ${module.week}</span>
          <div class="tag-row">${module.concepts.map((concept) => `<span class="tag">${concept}</span>`).join("")}</div>
        </div>
        <div>
          <h3>${module.title}</h3>
          <p>${module.goals.join(" · ")}</p>
        </div>
        <div>
          <strong>수업 활동</strong>
          <p>${module.activity}</p>
        </div>
        <div>
          <strong>과제</strong>
          <p>${module.assignment}</p>
        </div>
        <div>
          <strong>체크리스트</strong>
          <ul class="check-list">${module.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="card-actions">${download}</div>
        <label class="complete-row">
          <input type="checkbox" data-week="${module.week}" ${checked ? "checked" : ""} />
          <span>이 주차 학습 완료</span>
        </label>
      `;
      moduleGrid.appendChild(card);
    });

  if (!moduleGrid.children.length) {
    moduleGrid.innerHTML = `<article class="module-card"><h3>검색 결과가 없습니다</h3><p>다른 키워드로 다시 검색해 보세요.</p></article>`;
  }
}

function renderTools() {
  toolGrid.innerHTML = tools
    .map(
      (tool, index) => `
      <article class="tool-card">
        <h3>${tool.title}</h3>
        <p>${tool.body}</p>
        <ul>${tool.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <button class="button primary copy-tool" data-tool="${index}" type="button">템플릿 복사</button>
      </article>
    `
    )
    .join("");
}

function renderMaterials() {
  materialsList.innerHTML = modules
    .filter((module) => module.file)
    .map(
      (module) => `
      <a href="materials/${encodeURIComponent(module.file)}" download>
        <strong>Week ${module.week}. ${module.title}</strong>
        <span>PDF</span>
      </a>
    `
    )
    .join("");
}

function updateProgress() {
  const percent = Math.round((completed.size / modules.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${completed.size} / ${modules.length} 완료`;
}

document.addEventListener("change", (event) => {
  if (!event.target.matches("[data-week]")) return;
  const week = Number(event.target.dataset.week);
  if (event.target.checked) {
    completed.add(week);
  } else {
    completed.delete(week);
  }
  localStorage.setItem(doneKey, JSON.stringify([...completed]));
  updateProgress();
});

document.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-tool");
  if (!button) return;
  const tool = tools[Number(button.dataset.tool)];
  const text = `${tool.title}\n\n${tool.items.join("\n")}`;
  await navigator.clipboard.writeText(text);
  button.textContent = "복사 완료";
  setTimeout(() => {
    button.textContent = "템플릿 복사";
  }, 1400);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderModules();
  });
});

searchInput.addEventListener("input", renderModules);

note.value = localStorage.getItem(noteKey) || "";
saveNote.addEventListener("click", () => {
  localStorage.setItem(noteKey, note.value);
  saveState.textContent = "저장되었습니다.";
  setTimeout(() => {
    saveState.textContent = "";
  }, 1600);
});

renderModules();
renderTools();
renderMaterials();
updateProgress();
