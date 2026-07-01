const base = "downloads/";
const modules = [
  {w:1,c:"ai",t:"강의 소개와 AI 리터러시",d:"수업 목표, 평가 기준, AI 활용 원칙을 확인합니다.",p:"개인 학습 목표 3문장 작성",dl:[["수업 안내","course-syllabus-ai-ted.md"],["AI 리터러시","ai-literacy-guide.md"]]},
  {w:2,c:"ted",t:"Leadership and Movements",d:"Sinek의 belief 리더십과 Sivers의 first follower를 비교합니다.",p:"Why do people follow leaders?",dl:[["Unit 1 활동지","unit1-leadership-movements.md"]]},
  {w:3,c:"ted",t:"Simple Ideas for Big Problems",d:"복잡한 사회문제를 단순하고 창의적인 해결책으로 접근합니다.",p:"문제 정의 카드와 영어 요약문",dl:[["Unit 3 활동지","unit3-simple-ideas.md"]]},
  {w:4,c:"ted",t:"Game Changers",d:"게임의 몰입, 전략적 사고, 문제 해결 가능성을 토론합니다.",p:"사회문제 해결 게임 아이디어",dl:[["Unit 4 활동지","unit4-game-changers.md"]]},
  {w:5,c:"ted",t:"Lessons in Learning",d:"학습 참여, Studio School, grit, growth mindset을 연결합니다.",p:"학습 성공에 영향을 주는 조건 토론",dl:[["Unit 5 활동지","unit5-lessons-learning.md"]]},
  {w:6,c:"ted",t:"Food Revolution",d:"건강한 식문화, 학교 급식, 식생활 교육의 사회적 의미를 분석합니다.",p:"Food Revolution Day 플라이어",dl:[["Unit 6 활동지","unit6-food-revolution.md"]]},
  {w:7,c:"project",t:"중간 프로젝트 준비",d:"팀별 주제 선정, 문제 정의, 자료 수집, 역할 분담을 수행합니다.",p:"기획안, AI 활용 계획, 참고자료 목록",dl:[]},
  {w:8,c:"project",t:"중간 프로젝트 발표",d:"팀 디지털 콘텐츠를 발표하고 동료 피드백을 받습니다.",p:"내용 구성, 전달력, 시각적 완성도 피드백",dl:[]},
  {w:9,c:"ted",t:"Body Signs",d:"비언어적 의사소통과 power posing을 발표 수행과 연결합니다.",p:"발표 자세 자기평가",dl:[["Unit 7 활동지","unit7-body-signs.md"]]},
  {w:10,c:"ted",t:"New Perspectives",d:"disability를 limitation이 아니라 difference와 strength로 읽습니다.",p:"2분 영어 발표",dl:[["Unit 9 활동지","unit9-new-perspectives.md"]]},
  {w:11,c:"ted",t:"Data Detectives",d:"데이터 시각화와 infographic의 소통 효과를 학습합니다.",p:"미니 인포그래픽",dl:[["Unit 10 활동지","unit10-data-detectives.md"]]},
  {w:12,c:"ted",t:"Sleep",d:"수면 부족이 학업, 업무, 건강, 안전에 미치는 영향을 분석합니다.",p:"영어 의견문 1단락",dl:[["Unit 11 활동지","unit11-sleep.md"]]},
  {w:13,c:"ai",t:"AI, Cyborgs and Language Learning",d:"기술이 인간 역량을 확장하는 방식을 읽고 AI 언어학습을 실습합니다.",p:"AI 초안 수정과 사용 기록",dl:[["Unit 12 활동지","unit12-ai-cyborgs.md"]]},
  {w:14,c:"project",t:"기말 프로젝트 준비",d:"개인 주제, TED 분석, AI 활용, 디지털 콘텐츠를 포트폴리오로 구성합니다.",p:"포트폴리오 가이드 확인",dl:[["포트폴리오 안내","final-portfolio-guide.md"]]},
  {w:15,c:"project",t:"보강과 기말 피드백",d:"포트폴리오 구성, 영어 표현, AI 활용 기록을 최종 보완합니다.",p:"개별 상담과 동료 점검",dl:[]},
  {w:16,c:"project",t:"기말 프로젝트 제출과 성찰",d:"개인 디지털 포트폴리오를 제출하고 한 학기 성장을 성찰합니다.",p:"개인 디지털 포트폴리오",dl:[["포트폴리오 안내","final-portfolio-guide.md"]]}
];
const labels = {ted:"TED·읽기", project:"프로젝트", ai:"AI 활용"};
const key = "ai-ted-lms-progress";
const done = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
let activeFilter = "all";
const $ = (s) => document.querySelector(s);
function downloadButton(item) {
  return `<a class="download-link" href="${base + item[1]}" download>${item[0]} PDF</a>`;
}
function moduleCard(item) {
  const downloads = item.dl.length ? item.dl.map(downloadButton).join("") : `<span class="download-link">수업 활동 중심</span>`;
  return `<article class="module ${item.c}"><div class="module-top"><span class="week-badge">${item.w}주</span><div><span class="tag">${labels[item.c]}</span><h3>${item.t}</h3></div></div><p>${item.d}</p><p class="row"><b>수업 활동</b>${item.p}</p><div class="module-foot">${downloads}<label class="done"><input type="checkbox" data-week="${item.w}" ${done.has(item.w) ? "checked" : ""}> 완료</label></div></article>`;
}
function renderModules() {
  const grid = $("#moduleGrid");
  if (!grid) return;
  const search = $("#search");
  const query = search ? search.value.trim().toLowerCase() : "";
  const filtered = modules.filter((item) => activeFilter === "all" || item.c === activeFilter).filter((item) => !query || [item.t,item.d,item.p,labels[item.c]].join(" ").toLowerCase().includes(query));
  grid.innerHTML = filtered.length ? filtered.map(moduleCard).join("") : `<p class="lead">검색 결과가 없습니다.</p>`;
  updateProgress();
}
function updateProgress() {
  const bar = $("#progressBar");
  const text = $("#progressText");
  if (bar) bar.style.width = `${Math.round((done.size / modules.length) * 100)}%`;
  if (text) text.textContent = `${done.size} / ${modules.length} 완료`;
}
function renderResources() {
  const grid = $("#resourceGrid");
  if (!grid) return;
  const seen = new Set();
  const resources = [];
  modules.forEach((item) => item.dl.forEach((entry) => {
    if (!seen.has(entry[1])) {
      seen.add(entry[1]);
      resources.push(entry);
    }
  }));
  grid.innerHTML = resources.map((entry) => `<a class="download-card download-link" href="${base + entry[1]}" download><span>PDF</span><strong>${entry[0]}</strong><em>${entry[1].replace(".md", ".pdf")}</em></a>`).join("");
}
document.addEventListener("change", (event) => {
  if (!event.target.matches("[data-week]")) return;
  const week = Number(event.target.dataset.week);
  if (event.target.checked) done.add(week); else done.delete(week);
  localStorage.setItem(key, JSON.stringify([...done]));
  updateProgress();
});
const filters = $("#filters");
if (filters) {
  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderModules();
  });
}
const search = $("#search");
if (search) search.addEventListener("input", renderModules);
renderModules();
renderResources();
