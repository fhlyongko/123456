const data = {
  ...window.REPORT_LMS_DATA,
  ...window.REPORT_LMS_MANUAL,
  meta: {
    ...window.REPORT_LMS_DATA.meta,
    title: "전국 대학 자율전공학부 우수사례 연구",
    subtitle: "전공탐구생활 교과 개편을 위한 벤치마킹 LMS"
  }
};

const byId = id => document.getElementById(id);

byId("paragraphCount").textContent = data.meta.paragraphCount.toLocaleString("ko-KR");

byId("questionGrid").innerHTML = data.researchQuestions.map((question, index) => `
  <article class="card">
    <small>RQ ${index + 1}</small>
    <h3>연구 질문 ${index + 1}</h3>
    <p>${question}</p>
  </article>
`).join("");

byId("sectionGrid").innerHTML = data.sectionSummaries.map(section => `
  <article class="card">
    <small>문단 ${section.start}</small>
    <h3>${section.title}</h3>
    <p>${section.summary || "원문 탐색 페이지에서 세부 내용을 확인할 수 있습니다."}</p>
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
        <p class="type">${item.type}</p>
        <h3>${item.name}</h3>
        <p>${item.point}</p>
        <p><strong>적용:</strong> ${item.apply}</p>
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
    <p><strong>참조:</strong> ${model.source}</p>
    <p>${model.design}</p>
  </article>
`).join("");

byId("weekList").innerHTML = data.weekPlan.map(row => `
  <article class="week-card">
    <b>${row[0]}</b>
    <div>
      <h3>${row[1]}</h3>
      <p>${row[2]}</p>
      <p><strong>산출물:</strong> ${row[3]}</p>
    </div>
  </article>
`).join("");

byId("kpiTable").innerHTML = `
  <div class="kpi-row header"><div>영역</div><div>지표</div><div>확인 방식</div></div>
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
  const key = `autonomous-major-check-${check.dataset.check}`;
  check.checked = localStorage.getItem(key) === "1";
  check.addEventListener("change", () => localStorage.setItem(key, check.checked ? "1" : "0"));
});

renderCases();
