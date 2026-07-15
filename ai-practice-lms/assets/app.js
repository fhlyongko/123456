const lessons = [
  {
    slide: 1,
    phase: "foundation",
    title: "AI 활용 실습",
    headline: "다양한 AI 도구를 직접 체험하고 학습에 적용하는 방법을 실습합니다.",
    points: ["대표 AI 도구의 차이를 이해합니다.", "영어학습에 적용 가능한 실습 방법을 경험합니다.", "도구를 목적에 맞게 선택하고 활용합니다."],
    practice: "수업이 끝나면 자신에게 맞는 AI 학습 루틴 1가지를 설계합니다."
  },
  {
    slide: 2,
    phase: "foundation",
    title: "AI 모델은 목적에 따라 다르게 선택합니다",
    headline: "최신 모델 순위보다 과제 목적과 도구의 강점을 먼저 봅니다.",
    points: ["최신 모델 순위는 계속 바뀝니다.", "ChatGPT, Gemini, Claude는 기본적으로 알아두면 좋습니다.", "중요한 것은 성능 순위보다 과제 목적과 도구의 강점입니다."],
    practice: "내가 자주 하는 학습 과제 1개를 정하고, 어떤 AI가 적합할지 생각합니다."
  },
  {
    slide: 3,
    phase: "foundation",
    title: "생성형 AI",
    headline: "도구명보다 사용 목적을 먼저 정합니다.",
    points: ["ChatGPT, Gemini, Claude, Grok 등은 범용 AI 챗봇입니다.", "Perplexity, GenSpark, Liner, Felo는 검색과 자료 탐색에 강점이 있습니다.", "수업에서는 도구명보다 사용 목적을 먼저 정해야 합니다."],
    practice: "같은 질문을 두 도구에 넣고 답변의 차이를 비교합니다."
  },
  {
    slide: 4,
    phase: "tools",
    title: "발표자료 제작 AI",
    headline: "발표자료 생성 도구는 빠른 초안 작성과 구조화에 활용합니다.",
    points: ["Gamma는 빠른 발표자료 생성에 유용합니다.", "GenSpark와 Gemini는 자료 구성과 아이디어 확장에 활용할 수 있습니다.", "Claude는 글의 구조화와 웹 형식 산출물에 강점이 있습니다."],
    practice: "같은 발표 주제를 입력하고 결과물의 구성, 디자인, 수정 가능성을 비교합니다."
  },
  {
    slide: 5,
    phase: "tools",
    title: "Gemini는 멀티모달 학습 출발점",
    headline: "텍스트, 이미지, 문서 기반 질문을 처리할 수 있습니다.",
    points: ["텍스트, 이미지, 문서 기반 질문을 처리할 수 있습니다.", "학습 자료 요약, 질문 생성, 예시 확장에 활용하기 좋습니다.", "답변을 그대로 쓰기보다 비교, 검토, 수정하는 과정이 필요합니다."],
    practice: "수업자료 1개를 Gemini에 넣고 핵심 개념 3개와 확인 질문 3개를 생성합니다."
  },
  {
    slide: 6,
    phase: "tools",
    title: "Claude Artifacts",
    headline: "결과물을 바로 보여주는 데 유용합니다.",
    points: ["Artifacts 기능은 웹페이지, 학습 자료, 간단한 활동물을 시각적으로 생성합니다.", "텍스트 결과물을 학생용 자료 형태로 변환할 때 유용합니다.", "출력물을 그대로 사용하기보다 수업 목표에 맞게 수정해야 합니다."],
    practice: "짧은 설명문을 넣고 학생용 활동지 초안으로 변환합니다."
  },
  {
    slide: 7,
    phase: "tools",
    title: "Perplexity는 출처 기반 정보 탐색에 적합합니다",
    headline: "최신 이슈와 개념 조사를 출처와 함께 확인합니다.",
    points: ["Perplexity는 답변과 함께 관련 출처를 확인할 수 있습니다.", "최신 이슈, 개념 조사, 수업 전 배경지식 확인에 활용할 수 있습니다.", "출처를 반드시 비교하고, 신뢰도 높은 자료를 우선해야 합니다."],
    practice: "관심 주제 1개를 검색하고, 신뢰할 수 있는 출처 2개를 고릅니다."
  },
  {
    slide: 8,
    phase: "tools",
    title: "Gamma는 빠른 발표자료 초안 제작에 적합합니다",
    headline: "디자인이 빠르게 나오지만 내용 정확성은 별도로 검토합니다.",
    points: ["주제와 목차를 입력하면 발표자료 초안을 빠르게 생성합니다.", "디자인 완성도는 높지만 내용의 정확성은 별도로 검토해야 합니다.", "교수자는 학습목표, 난이도, 활동 흐름을 직접 조정해야 합니다."],
    practice: "같은 주제로 5장짜리 발표자료를 생성하고, 수정할 부분을 표시합니다."
  },
  {
    slide: 9,
    phase: "tools",
    title: "NotebookLM은 자료 기반 학습에 강점이 있습니다",
    headline: "제공한 자료 안에서 답하게 하면 학습 맥락을 유지할 수 있습니다.",
    points: ["PDF, 문서, 강의자료를 업로드해 질의응답과 요약을 할 수 있습니다.", "학습 가이드, 예상 질문, 오디오 개요 생성에 활용 가능합니다.", "제공한 자료 안에서 답하게 하면 학습 맥락을 유지할 수 있습니다."],
    practice: "강의자료를 업로드하고 핵심 요약, 복습 질문, 용어 정리를 생성합니다."
  },
  {
    slide: 10,
    phase: "tools",
    title: "NotebookLM 실습은 자료 업로드에서 시작합니다",
    headline: "자료 기반 질문으로 요약, 개념 설명, 복습 문제를 얻습니다.",
    points: ["먼저 학습할 자료를 업로드합니다.", "자료 기반 질문을 던져 요약, 개념 설명, 복습 문제를 얻습니다.", "답변이 원자료와 맞는지 반드시 확인합니다."],
    practice: "업로드한 자료에서 학생들이 어려워할 개념 3가지를 찾아 질문으로 바꿉니다."
  },
  {
    slide: 11,
    phase: "tools",
    title: "Gemini는 영상과 자료 분석에 활용할 수 있습니다",
    headline: "동영상, 문서, 이미지 등 다양한 자료를 분석합니다.",
    points: ["동영상, 문서, 이미지 등 다양한 자료를 분석할 수 있습니다.", "분석 결과를 바탕으로 학습 활동, 질문, 평가 요소를 설계할 수 있습니다.", "Google AI Studio와 연동하면 맞춤형 AI 도구 제작으로 확장됩니다."],
    practice: "짧은 영상 또는 자료를 분석하고 수업 질문 3개를 생성합니다."
  },
  {
    slide: 12,
    phase: "tools",
    title: "Google AI Studio는 맞춤형 AI 활동 설계에 활용합니다",
    headline: "학습목표에 맞춘 질문 흐름과 피드백 방식을 설계합니다.",
    points: ["Gemini 기반 앱이나 챗봇을 실험적으로 만들 수 있습니다.", "교수자는 학습목표에 맞춘 질문 흐름과 피드백 방식을 설계할 수 있습니다.", "학생용 활동에서는 안전하고 제한된 프롬프트 구조가 중요합니다."],
    practice: "영어학습용 AI 튜터의 역할, 입력자료, 피드백 방식 3가지를 정합니다."
  },
  {
    slide: 13,
    phase: "english",
    title: "AI 활용 영어학습",
    headline: "듣기, 말하기, 읽기, 쓰기 활동을 AI로 재설계합니다.",
    points: ["듣기: 자료를 오디오 콘텐츠로 변환합니다.", "말하기: AI 아바타와 대화하며 발화 연습을 합니다.", "읽기와 쓰기: 난이도 조절, 피드백, 수정 활동을 설계합니다."],
    practice: "자신의 영어학습 목표를 듣기, 말하기, 읽기, 쓰기 중 하나로 정합니다."
  },
  {
    slide: 14,
    phase: "english",
    title: "NotebookLM과 AI 아바타를 영어학습에 연결합니다",
    headline: "자료 기반 듣기와 상호작용 기반 말하기를 결합합니다.",
    points: ["NotebookLM은 읽기 자료를 맞춤형 팟캐스트와 복습 질문으로 바꿀 수 있습니다.", "Soul Machines와 Delphi는 말하기 상호작용을 시뮬레이션할 수 있습니다.", "학생은 AI와 대화한 뒤 자신의 표현을 다시 점검해야 합니다."],
    practice: "듣기 또는 말하기 중 하나를 골라 10분짜리 AI 활용 활동을 설계합니다."
  },
  {
    slide: 15,
    phase: "english",
    title: "쓰기와 문법 피드백은 학습 과정으로 설계해야 합니다",
    headline: "AI 수정문을 그대로 받아들이지 않고 수정 이유를 설명합니다.",
    points: ["Grammarly는 문법, 어휘, 문체 피드백에 활용할 수 있습니다.", "CEFR 수준을 활용하면 학생 수준에 맞는 목표를 설정할 수 있습니다.", "AI 수정문을 그대로 받아들이지 않고 수정 이유를 설명해야 합니다."],
    practice: "짧은 영작문을 작성하고, AI 피드백을 받은 뒤 수정 이유를 1문장으로 씁니다."
  },
  {
    slide: 16,
    phase: "english",
    title: "듣기 활동은 자료 변환과 이해 점검으로 구성합니다",
    headline: "리딩 자료를 오디오 콘텐츠로 바꾸고 듣기 전·중·후 질문을 만듭니다.",
    points: ["리딩 자료를 오디오 콘텐츠로 바꾸면 듣기 입력을 쉽게 만들 수 있습니다.", "학생은 들은 내용을 요약하고 핵심 단어를 정리합니다.", "교수자는 듣기 후 질문으로 이해도를 확인합니다."],
    practice: "읽기 자료 1개를 듣기 활동으로 바꾸고, 듣기 전-중-후 질문을 만듭니다."
  },
  {
    slide: 17,
    phase: "english",
    title: "Soul Machines는 실제 대화처럼 말하기를 연습하게 합니다",
    headline: "AI 아바타와 짧은 대화를 하며 발화 기회를 늘립니다.",
    points: ["학생은 AI 아바타와 짧은 대화를 하며 발화 기회를 늘릴 수 있습니다.", "교수자는 주제, 역할, 피드백 방식을 미리 정해야 합니다.", "말하기 후에는 표현 수정과 자기성찰이 필요합니다."],
    practice: "자기소개 또는 의견 말하기 주제를 정하고 AI 아바타에게 받을 질문 3개를 만듭니다."
  },
  {
    slide: 18,
    phase: "english",
    title: "Delphi AI는 인물 기반 대화 시뮬레이션에 활용할 수 있습니다",
    headline: "영어 면접, 상담, 토론처럼 목적이 있는 대화 연습에 활용합니다.",
    points: ["Delphi는 특정 인물이나 역할 기반 대화 경험을 제공합니다.", "영어 면접, 상담, 토론 상황처럼 목적이 있는 대화 연습에 활용할 수 있습니다.", "응답의 정확성과 교육적 적합성은 교수자가 확인해야 합니다."],
    practice: "영어 면접 상황을 설정하고, 학생에게 던질 질문 3개를 설계합니다."
  },
  {
    slide: 19,
    phase: "english",
    title: "ChatGPT 말하기 연습은 질문 흐름을 잘 설계해야 합니다",
    headline: "질문, 힌트, 재시도를 통해 말하기 과정을 기록합니다.",
    points: ["AI에게 즉시 정답을 요구하기보다 질문, 힌트, 재시도를 요청합니다.", "학생은 첫 답변, 피드백, 재답변 과정을 기록합니다.", "발음보다 의미 전달, 문장 구성, 자신감 향상을 함께 봅니다."],
    practice: "ChatGPT에게 단순히 면접관 역할을 요청하지 말고 단계형 피드백을 요청합니다."
  },
  {
    slide: 20,
    phase: "english",
    title: "CEFR은 학생 영어 수준을 설명하는 공통 기준입니다",
    headline: "AI를 활용하면 같은 자료를 수준별로 조정할 수 있습니다.",
    points: ["A1부터 C2까지 언어 능력을 단계적으로 설명합니다.", "학습 활동은 학생 수준보다 너무 쉽거나 어렵지 않아야 합니다.", "AI를 활용하면 같은 자료를 수준별로 조정할 수 있습니다."],
    practice: "본인의 현재 영어 수준을 예상하고, 다음 단계 목표를 1개 정합니다."
  },
  {
    slide: 21,
    phase: "english",
    title: "읽기 자료는 AI로 난이도를 조절할 수 있습니다",
    headline: "어휘, 문장 길이, 배경지식 수준을 조정합니다.",
    points: ["같은 글을 쉬운 버전과 어려운 버전으로 변환할 수 있습니다.", "어휘, 문장 길이, 배경지식 수준을 조정할 수 있습니다.", "변환 후에는 원문의 의미가 유지되는지 확인해야 합니다."],
    practice: "어려운 영어 지문을 B1 수준으로 쉽게 바꾸고, 이해 질문 3개를 만듭니다."
  },
  {
    slide: 22,
    phase: "english",
    title: "Grammarly는 영작문 피드백 도구로 활용합니다",
    headline: "모든 제안을 수용하기보다 왜 필요한지 판단합니다.",
    points: ["문법, 어휘, 명료성, 문체에 대한 즉각적 피드백을 제공합니다.", "학생은 제안을 모두 수용하기보다 왜 필요한지 판단해야 합니다.", "교수자는 결과물보다 수정 과정과 설명을 평가할 수 있습니다."],
    practice: "5문장 영작문을 입력하고, 가장 중요한 수정 제안 2개만 선택합니다."
  },
  {
    slide: 23,
    phase: "english",
    title: "QuillBot은 표현 바꾸기와 요약 활동에 활용합니다",
    headline: "바뀐 표현의 의미와 문체가 원문과 맞는지 확인합니다.",
    points: ["문장을 바꾸거나 요약해 다양한 표현을 비교할 수 있습니다.", "학습자는 바뀐 표현의 의미와 문체가 원문과 맞는지 확인해야 합니다.", "표현 비교 활동은 어휘 선택과 문장 구조 학습에 도움이 됩니다."],
    practice: "자신의 문장 1개를 바꾸고, 원문과 바뀐 문장의 차이를 설명합니다."
  },
  {
    slide: 24,
    phase: "ethics",
    title: "HeyGen은 영상 제작과 AI 윤리 논의에 활용할 수 있습니다",
    headline: "교육 콘텐츠 제작과 deepfake 윤리 문제를 함께 다룹니다.",
    points: ["텍스트를 영상으로 바꾸거나 다국어 더빙을 만들 수 있습니다.", "교육 콘텐츠 제작에는 유용하지만 deepfake 윤리 문제를 함께 다뤄야 합니다.", "학생에게는 제작 목적, 출처, 동의, 오용 가능성을 함께 설명해야 합니다."],
    practice: "오늘 배운 도구 중 하나를 골라 자신의 학습 또는 수업에 적용할 계획을 작성합니다."
  }
];

const phaseLabels = {
  foundation: "기초 이해",
  tools: "AI 도구",
  english: "영어학습",
  ethics: "윤리"
};

const grid = document.getElementById("moduleGrid");

function cardTemplate(lesson) {
  const points = lesson.points.map(point => `<li>${point}</li>`).join("");
  return `
    <article class="lesson-card" data-phase="${lesson.phase}">
      <div class="lesson-top">
        <span class="slide-no">${String(lesson.slide).padStart(2, "0")}</span>
        <span class="phase">${phaseLabels[lesson.phase]}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p class="headline">${lesson.headline}</p>
      <ul>${points}</ul>
      <div class="practice-box"><strong>학생 실습</strong><br>${lesson.practice}</div>
    </article>
  `;
}

function renderLessons(filter = "all") {
  grid.innerHTML = lessons.map(cardTemplate).join("");
  document.querySelectorAll(".lesson-card").forEach(card => {
    card.classList.toggle("hidden", filter !== "all" && card.dataset.phase !== filter);
  });
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderLessons(button.dataset.filter);
  });
});

const checks = Array.from(document.querySelectorAll("[data-check]"));
const meter = document.getElementById("meterBar");

function updateMeter() {
  const done = checks.filter(check => check.checked).length;
  meter.style.width = `${Math.round((done / checks.length) * 100)}%`;
}

checks.forEach(check => {
  const key = `ai-practice-${check.dataset.check}`;
  check.checked = localStorage.getItem(key) === "1";
  check.addEventListener("change", () => {
    localStorage.setItem(key, check.checked ? "1" : "0");
    updateMeter();
  });
});

renderLessons();
updateMeter();
