const data = {
  ...window.REPORT_LMS_DATA,
  ...window.REPORT_LMS_MANUAL,
  meta: {
    ...window.REPORT_LMS_DATA.meta,
    title: "자율전공학부 우수사례 연구 요약 보드",
    subtitle: "보고서의 전체 논지를 빠르게 파악하기 위한 요약 보드"
  }
};

const byId = id => document.getElementById(id);
const validTabs = ["summary", "evidence", "factors", "roadmap", "metrics", "materials"];

const insights = [
  {
    title: "자유는 구조와 함께 작동한다",
    body: "무전공·자율전공 제도는 선택권 확대만으로 성공하기 어렵습니다. 전공 정보, 진입요건, 상담, 탐색 과제가 함께 배치될 때 학생의 선택은 근거 있는 결정으로 발전합니다."
  },
  {
    title: "우수사례는 탐색 기간을 교육과정으로 설계한다",
    body: "KAIST·UNIST·DGIST 등은 1학년 탐색 기간을 단순한 유예 기간이 아니라 기초교과, 트랙 설계, 자기설계 활동이 결합된 교육 경험으로 운영합니다."
  },
  {
    title: "밀착 지도와 표준화된 정보가 핵심이다",
    body: "교수 면담, 선배 멘토링, 전공위키, 전공진입 체크리스트가 결합되면 학생 간 정보 격차와 인기 전공 쏠림 현상을 줄일 수 있습니다."
  },
  {
    title: "최종 산출물은 희망 학과명이 아니라 근거 포트폴리오다",
    body: "보고서는 학생이 전공을 왜 선택했는지 주장, 근거, 대안, 보완계획으로 설명하도록 하는 포트폴리오형 평가를 제안합니다."
  }
];

function tabFromHash() {
  const hash = window.location.hash.replace("#", "");
  return validTabs.includes(hash) ? hash : "summary";
}

function setActiveTab(tabName, options = {}) {
  const nextTab = validTabs.includes(tabName) ? tabName : "summary";
  document.querySelectorAll("[data-tab-target]").forEach(button => {
    button.classList.toggle("active", button.dataset.tabTarget === nextTab);
  });
  document.querySelectorAll("[data-tab-panel]").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.tabPanel === nextTab);
  });
  if (options.updateHash !== false) {
    history.replaceState(null, "", `#${nextTab}`);
  }
  if (options.scroll) {
    document.querySelector(".tab-board")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

byId("insightGrid").innerHTML = insights.map((item, index) => `
  <article class="insight-card">
    <span>${index + 1}</span>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  </article>
`).join("");

byId("questionGrid").innerHTML = data.researchQuestions.map((question, index) => `
  <article class="card">
    <small>RQ ${index + 1}</small>
    <h3>연구 질문 ${index + 1}</h3>
    <p>${question}</p>
  </article>
`).join("");

function modelKeyword(item) {
  const text = `${item.name} ${item.type} ${item.point} ${item.apply}`;
  if (/KAIST|UNIST|DGIST|GIST|한동|탐색/.test(text)) return "탐색";
  if (/서울대|설계|포트폴리오|리버럴/.test(text)) return "설계";
  if (/아주|경희|고려|성균|지원|멘토/.test(text)) return "지원";
  if (/한국외대|융합|트랙|부경|중앙/.test(text)) return "융합";
  return "탐색";
}

function renderCases(filter = "all") {
  byId("caseGrid").innerHTML = data.caseModels.map(item => {
    const key = modelKeyword(item);
    const hidden = filter !== "all" && key !== filter ? " hidden" : "";
    return `
      <article class="case-card${hidden}" data-key="${key}">
        <p class="type">${key} · ${item.type}</p>
        <h3>${item.name}</h3>
        <p>${item.point}</p>
        <p><strong>적용 포인트:</strong> ${item.apply}</p>
      </article>
    `;
  }).join("");
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCases(button.dataset.filter);
  });
});

byId("factorGrid").innerHTML = data.successFactors.map((factor, index) => `
  <article class="factor-card">
    <span>${index + 1}</span>
    <h3>${factor.title}</h3>
    <p>${factor.body}</p>
  </article>
`).join("");

byId("modelGrid").innerHTML = data.adaptationModels.map((model, index) => `
  <article class="model-card">
    <span>${index + 1}</span>
    <h3>${model.model}</h3>
    <p><strong>참조 사례:</strong> ${model.source}</p>
    <p>${model.design}</p>
  </article>
`).join("");

byId("weekList").innerHTML = data.weekPlan.map(row => `
  <article class="week-card">
    <b>${row[0]}</b>
    <div>
      <h3>${row[1]}</h3>
      <p>${row[2]}</p>
      <p><strong>핵심 산출물:</strong> ${row[3]}</p>
    </div>
  </article>
`).join("");

byId("kpiTable").innerHTML = `
  <div class="kpi-row header"><div>평가 영역</div><div>핵심 지표</div><div>확인 방식</div></div>
  ${data.kpis.map(row => `<div class="kpi-row"><div>${row[0]}</div><div>${row[1]}</div><div>${row[2]}</div></div>`).join("")}
`;

byId("faqList").innerHTML = data.faq.map(row => `
  <article class="faq-item">
    <h3>${row[0]}</h3>
    <p>${row[1]}</p>
  </article>
`).join("");

byId("checkList").innerHTML = data.checklist.map((item, index) => `
  <label><input type="checkbox" data-check="${index}"><span>${item}</span></label>
`).join("");

document.querySelectorAll("[data-check]").forEach(check => {
  const key = `autonomous-major-report-check-${check.dataset.check}`;
  check.checked = localStorage.getItem(key) === "1";
  check.addEventListener("change", () => localStorage.setItem(key, check.checked ? "1" : "0"));
});

document.querySelectorAll("[data-tab-target]").forEach(button => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tabTarget, { scroll: true });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = link.getAttribute("href").replace("#", "");
    if (!validTabs.includes(target)) return;
    event.preventDefault();
    setActiveTab(target, { scroll: true });
  });
});

window.addEventListener("hashchange", () => setActiveTab(tabFromHash(), { updateHash: false }));

renderCases();
const initialTab = tabFromHash();
setActiveTab(initialTab, { updateHash: false, scroll: initialTab !== "summary" });
