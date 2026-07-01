const base="materials/";
const modules=[
 {w:1,c:"writing",t:"영어논문작성의 큰 지도",g:"Academic English의 목적과 정렬, 리뷰어 관점으로 구조 보기",act:"내 연구 주제를 한 문장으로 쓰고 목적·질문·방법·기여를 연결한다.",as:"연구 주제 1개의 목적·예상 독자를 150단어 이내로 작성.",ck:["주제가 한 문장으로 표현됐는가?","목적·질문·방법·기여가 연결되는가?","명확성을 복잡함보다 우선했는가?"],f:"week1-academic-writing-summary-40slides-redesign.pdf"},
 {w:2,c:"planning",t:"연구계획 수립과 문제 설정",g:"논문 계획 단계, 서론 funnel, 문제 정의",act:"관심 주제를 연구 문제로 좁히고 why, what, how 질문을 만든다.",as:"관심사·문제·목적·문헌·연구 질문을 담은 research planning memo.",ck:["관심사가 구체적 연구 문제로 좁혀졌는가?","배경-공백-목적 흐름이 보이는가?","연구 질문이 자료·방법으로 답할 수 있는가?"],f:"week2-research-planning-academic-writing-40slides-redesign.pdf"},
 {w:3,c:"planning",t:"이론적 기반과 문헌고찰",g:"이론적 기반, 문헌 조직화, 투고 프로필",act:"선행연구 5편을 비교해 공통점·차이·공백을 표로 정리한다.",as:"문헌고찰 매트릭스와 research gap 문장 3개.",ck:["이론이 연구 질문을 뒷받침하는가?","요약이 아니라 비교·대조했는가?","연구 공백이 명시적 문장인가?"],f:"week3-theory-literature-submission-40slides.pdf"},
 {w:4,c:"writing",t:"방법론·결과·논의와 결론",g:"Methodology와 methods 구분, 결과 제시, 논의·결론 역할",act:"내 방법을 철학적 전제·자료수집·분석 절차로 분리해 설명한다.",as:"방법론 초안 1쪽 또는 결과 문단 2개.",ck:["철학적 근거와 실제 방법이 구분되는가?","결과가 표를 반복하지 않고 의미를 설명하는가?","논의가 결과를 연구 질문에 다시 연결하는가?"],f:"week4-methodology-results-discussion-40slides.pdf"},
 {w:5,c:"writing",t:"리뷰어 관점에서 섹션 점검",g:"리뷰어 기준, 섹션별 기능, 체크리스트 적용",act:"초록 또는 서론을 리뷰어 체크리스트로 진단한다.",as:"내 초안의 강점 3개와 보완점 3개를 reviewer memo로 작성.",ck:["초록에서 목적·방법·결과·기여가 빠르게 보이는가?","질문·방법·결과·논의가 정렬되는가?","독자에게 필요한 기여가 분명한가?"],f:"week5-reviewer-view-paper-sections-40slides.pdf"},
 {w:6,c:"ethics",t:"연구 시작·절차·IRB와 윤리",g:"글쓰기 이전의 why, 연구 절차·IRB, 윤리적 글쓰기",act:"대상·자료수집·개인정보·동의 절차의 위험을 점검한다.",as:"연구 절차표와 윤리 체크리스트 초안.",ck:["모집·동의·자료수집 절차가 순서대로인가?","개인정보·자료 보관 계획이 포함됐는가?","연구자 역할과 위험을 점검했는가?"],f:"week6-research-problem-procedure-ethics-40slides.pdf"},
 {w:7,c:"writing",t:"방법론에서 결론 작성까지",g:"양적·질적·혼합 방법, 결과 시각화, 학술 글쓰기 기능",act:"표·그림 1개로 결과 문단과 논의 문단을 각각 쓴다.",as:"결과 해석 문장 5개와 논의 문단 1개.",ck:["결과 문장이 핵심 패턴을 정확히 설명하는가?","논의가 선행연구와 연결되는가?","결론이 과장 없이 기여·한계를 제시하는가?"],f:"week7-methodology-results-writing-functions-40slides.pdf"},
 {w:8,c:"planning",t:"중간 점검 워크숍",g:"1-7주 산출물 통합, 정렬 점검, 피드백 반영 계획",act:"연구 질문·문헌고찰·방법론 초안을 교환해 피드백한다.",as:"중간 수정계획서와 다음 3주 일정.",ck:["산출물이 하나의 논문 흐름으로 연결되는가?","피드백이 구체적 수정 계획이 됐는가?","작성 일정이 현실적인가?"],f:""},
 {w:9,c:"writing",t:"시각 자료·제안·한계·학술 언어",g:"표·그림 참조, 권장·한계 작성, 신중한 표현",act:"표·그림 설명 문장 3개와 한계 문장 2개를 쓴다.",as:"시각자료 참조 문단과 limitation paragraph.",ck:["표·그림을 번호·핵심 패턴으로 참조했는가?","한계가 가치를 약화하지 않게 균형 있는가?","인과·신중 표현을 구분했는가?"],f:"week9-visual-references-recommendations-academic-language-40slides.pdf"},
 {w:10,c:"writing",t:"학술 영어논문작성 핸드북",g:"기본 원칙 종합, 전체 여정, 명확성·정확성·증거",act:"내 초안의 모호한 문장 3개를 명확하게 고친다.",as:"초록·서론 한 단락을 before/after로.",ck:["문장이 길거나 모호하지 않은가?","주장마다 근거가 연결되는가?","수정 전후 개선 이유를 설명할 수 있는가?"],f:"week10-academic-writing-handbook-summary-40slides.pdf"},
 {w:11,c:"planning",t:"아이디어에서 연구보고까지",g:"연구 과정과 글쓰기 연결, 인용·논증, 보고서에서 논문으로",act:"인용 문장을 요약형에서 비판적 논증형으로 수정한다.",as:"문헌 인용 문장 5개와 연구 공백 단락 1개.",ck:["인용이 논증의 근거로 쓰였는가?","공백이 기존 연구 한계와 연결되는가?","보고서식을 논문식 주장으로 바꿨는가?"],f:"week11-academic-writing-research-process-40slides.pdf"},
 {w:12,c:"career",t:"논문 사례 분석·커리어 문서",g:"논문 구조·기여 분석, Cover Letter, CV, Research Statement",act:"샘플 논문 1편의 공백·방법·결과·기여를 역추적한다.",as:"academic bio와 cover letter 첫 문단.",ck:["사례의 공백·방법·결과·기여를 구분했는가?","bio가 분야·강점을 간결히 보여주는가?","cover letter가 목적·적합성을 분명히 하는가?"],f:"week12-academic-career-writing-30slides.pdf"},
 {w:13,c:"writing",t:"양적연구 영어논문작성",g:"표준 구조, 제목·초록 템플릿, 방법·결과·논의 패턴",act:"내 연구를 5문장 abstract 구조로 압축한다.",as:"Title 3버전과 structured abstract 초안.",ck:["제목이 방법·대상·핵심 변수를 보여주는가?","초록이 배경-공백-목적-방법-기여 흐름인가?","통계 표현이 정확하고 과장 없는가?"],f:"week13-quantitative-research-writing-40slides.pdf"},
 {w:14,c:"ethics",t:"연구윤리와 AI 윤리",g:"윤리 원칙, FFP·중복게재, AI 투명성",act:"AI 활용 범위와 disclosure 문장을 맥락에 맞게 쓴다.",as:"연구윤리·AI 활용 선언문 초안.",ck:["위조·변조·표절·중복게재를 구분하는가?","AI 사용 범위·검증 책임이 투명한가?","개인정보·자료 보호 기준을 포함했는가?"],f:"week14-research-ai-ethics-39slides.pdf"},
 {w:15,c:"career",t:"연구자의 성장과 발전",g:"성장 성찰, 연구 확산, 성장 로드맵",act:"이번 학기 산출물로 성장 포트폴리오를 구성한다.",as:"최종 포트폴리오와 6개월 성장 로드맵.",ck:["산출물이 포트폴리오로 정리됐는가?","확산·투고·발표 계획이 구체적 일정인가?","다음 역량 목표가 현실적인가?"],f:"week15-researcher-growth-20slides.pdf"}
];
const tools=[
 {h:"Research Question Builder",p:"관심 주제를 연구 질문으로 바꾸는 틀입니다.",i:["Topic: I am interested in examining ...","Problem: However, little is known about ...","Purpose: This study aims to investigate ...","Question: How does ... influence ...?","Question: To what extent does ... predict ...?"]},
 {h:"Abstract 5-Sentence Frame",p:"초록을 빠르게 구성하는 기본 구조입니다.",i:["Background: Recent research has emphasized ...","Gap: Nevertheless, limited attention has been paid to ...","Objective: This study investigates ...","Methods: Data were collected from ... and analyzed using ...","Contribution: The findings suggest that ..."]},
 {h:"Reviewer Checklist",p:"제출 전 심사자 관점으로 점검하는 항목입니다.",i:["Is the research gap explicit?","Are the research questions aligned with the methods?","Are the results connected to the research questions?","Does the discussion explain contribution and limitations?"]},
 {h:"Ethics and AI Disclosure",p:"연구윤리와 AI 사용 투명성을 위한 문장 틀입니다.",i:["Participants provided informed consent before data collection.","The study followed institutional ethical guidelines.","AI tools were used only for language revision or brainstorming as permitted.","All claims, analyses, and citations were verified by the author."]}
];
const label={planning:"연구설계",writing:"논문작성",ethics:"윤리와 AI",career:"성장과 커리어"};
const stateKey="graduate-writing-progress-v2";
let completed=new Set(JSON.parse(localStorage.getItem(stateKey)||"[]"));

function renderWeeks(){
  const host=document.getElementById("weekList");
  if(!host)return;
  const search=document.getElementById("search");
  const filter=document.getElementById("filter");
  const q=search?search.value.trim().toLowerCase():"";
  const f=filter?filter.value:"all";
  host.innerHTML="";
  modules.filter(m=>f==="all"||m.c===f).filter(m=>!q||(m.t+m.g+m.act+m.as+m.ck.join(" ")).toLowerCase().includes(q)).forEach(m=>{
    const article=document.createElement("article");
    article.className="week";
    article.innerHTML=`<div class="unit"><strong>${m.w}</strong><span>Week</span></div><div class="week-main"><h3>${m.t}</h3><p>${m.g}</p><div class="concepts"><span>${label[m.c]}</span><span>${m.act}</span></div><p><b>과제</b> ${m.as}</p><ul class="checklist">${m.ck.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="week-side">${m.f?`<a class="btn primary" href="${base+m.f}" download>PDF 다운로드</a>`:`<span class="btn">워크숍</span>`}<label class="done"><input type="checkbox" data-week="${m.w}" ${completed.has(m.w)?"checked":""}> 완료</label></div>`;
    host.appendChild(article);
  });
  if(!host.children.length)host.innerHTML='<p class="section-lead">검색 결과가 없습니다.</p>';
  updateProgress();
}
function renderTools(){
  const host=document.getElementById("toolList");
  if(!host)return;
  host.innerHTML=tools.map((tool,index)=>`<article class="tool"><h3>${tool.h}</h3><p>${tool.p}</p><ul>${tool.i.map(x=>`<li>${x}</li>`).join("")}</ul><button class="copy" data-index="${index}">템플릿 복사</button></article>`).join("");
}
function renderDownloads(){
  const host=document.getElementById("downloadGrid");
  if(!host)return;
  host.innerHTML=modules.filter(m=>m.f).map(m=>`<article class="download"><span class="tag">Week ${m.w} · ${label[m.c]}</span><h3>${m.t}</h3><p>${m.g}</p><a class="btn primary" href="${base+m.f}" download>PDF 다운로드</a></article>`).join("");
}
function updateProgress(){
  const bar=document.getElementById("bar");
  const progressText=document.getElementById("progressText");
  if(bar)bar.style.width=(completed.size/modules.length*100)+"%";
  if(progressText)progressText.textContent=`${completed.size} / ${modules.length} 완료`;
  localStorage.setItem(stateKey,JSON.stringify([...completed]));
}
document.addEventListener("input",event=>{if(event.target && event.target.id==="search")renderWeeks();});
document.addEventListener("change",event=>{
  if(event.target && event.target.id==="filter")renderWeeks();
  if(!event.target.matches("[data-week]"))return;
  const week=Number(event.target.dataset.week);
  event.target.checked?completed.add(week):completed.delete(week);
  updateProgress();
});
document.addEventListener("click",async event=>{
  const button=event.target.closest(".copy");
  if(!button)return;
  const tool=tools[Number(button.dataset.index)];
  const text=tool.h+"\\n\\n"+tool.i.join("\\n");
  try{await navigator.clipboard.writeText(text);button.textContent="복사 완료";setTimeout(()=>button.textContent="템플릿 복사",1400);}
  catch(_error){button.textContent="복사 실패";setTimeout(()=>button.textContent="템플릿 복사",1400);}
});
renderWeeks();
renderTools();
renderDownloads();
