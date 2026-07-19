const papers = [
  {
    id: 1,
    theme: "perception",
    year: "2024",
    title: "University Students' Perceptions of Artificial Intelligence-based Tools for English Writing Courses",
    journal: "Online Journal of Communication and Media Technologies",
    doi: "10.30935/ojcmt/14195",
    participants: "80 Korean university students",
    topic: "The perceived advantages, limitations, and overreliance risks associated with AI-based writing tools such as Google Translate, Papago, and Grammarly.",
    method: "The study examined how university students evaluated the role of AI-based writing tools in English writing instruction and learning.",
    findings: "Students recognized practical benefits such as translation access and error checking. At the same time, they expressed concern that excessive dependence on AI tools could weaken independent writing processes.",
    implication: "The central pedagogical question is not whether students should use AI, but at which stage, for what purpose, and within what boundaries AI use should be permitted.",
    questions: ["When do I use AI tools in English writing, and for what purpose?", "Where is the boundary between assistance and overreliance?", "What must I protect if I want my English ability to improve while using AI?"]
  },
  {
    id: 2,
    theme: "classroom",
    year: "2024",
    title: "A Case Study of Implementing Generative AI in University's General English Courses",
    journal: "Contemporary Educational Technology",
    doi: "10.30935/cedtech/15218",
    participants: "89 students enrolled in university general English courses",
    topic: "The integration of generative AI into English writing and speaking activities and its relationship to learner motivation, interest, and confidence.",
    method: "A generative AI instructional model was implemented in a university English course, and student responses were analyzed in relation to writing and speaking activities.",
    findings: "The study observed changes associated with learner motivation, interest, and confidence when generative AI was integrated through a designed instructional model rather than left to unsupervised tool use.",
    implication: "The educational effect of AI depends strongly on pedagogical design. Students also need personal rules for AI use in independent study.",
    questions: ["What makes an AI-integrated class pedagogically coherent?", "Which English learning activities benefit most from AI integration?", "What classroom rules should instructors establish for AI use?"]
  },
  {
    id: 3,
    theme: "strategy",
    year: "2025",
    title: "Integrating Generative AI into EFL Writing: University Students' Strategies and Perceptions",
    journal: "Online Journal of Communication and Media Technologies",
    doi: "10.30935/ojcmt/17545",
    participants: "University EFL learners",
    topic: "Learners' strategic use of generative AI across different stages of the English writing process.",
    method: "The study analyzed how EFL learners used generative AI for writing and how they perceived its role in their composing process.",
    findings: "Students used generative AI for idea generation, organization, expression revision, and proofreading. AI use therefore appeared as a set of stage-specific strategies rather than a single behavior.",
    implication: "Learners should divide their writing process into stages and decide separately whether AI use supports or weakens learning at each stage.",
    questions: ["How can my writing process be divided into stages?", "At which writing stage might AI use be most harmful to learning?", "What is the difference between adopting AI output and using it as a reference?"]
  },
  {
    id: 4,
    theme: "cognitive",
    year: "2025",
    title: "EFL University Students' Motivation, Cognitive Load, and Satisfaction with Using GenAI for English Learning",
    journal: "LLT Journal",
    doi: "10.24071/llt.v28i2.11518",
    participants: "University EFL students in a 15-week AI-integrated writing course",
    topic: "Motivation, cognitive load, and satisfaction in generative AI-supported English writing instruction.",
    method: "A 15-week instructional sequence was organized around the foundations and ethics of generative AI writing, genre-based AI writing strategies, and critical evaluation of AI output with portfolio development.",
    findings: "Learner motivation and satisfaction were relatively high, but prompt construction and evaluation of AI output generated a moderate level of cognitive load.",
    implication: "AI does not simply make learning easier. It requires new capacities: asking precise questions and evaluating whether the response is accurate, appropriate, and useful.",
    questions: ["What information do I provide when prompting AI?", "How do I judge whether an AI-generated English sentence is accurate?", "Have I ever experienced AI use as cognitively demanding? Why?"]
  },
  {
    id: 5,
    theme: "strategy",
    year: "2026",
    title: "Implementing AI-integrated English Writing: University English Language Learners' Writing Strategies and Perceptions",
    journal: "International Journal of Evaluation and Research in Education",
    doi: "10.11591/ijere.v15i1.35461",
    participants: "85 Korean university English language learners",
    topic: "AI-integrated English writing strategies and learners' perceptions of those strategies.",
    method: "The study investigated strategy use and learner perceptions in an AI-integrated English writing course involving Korean university English learners.",
    findings: "The study identified concrete strategies used by learners during AI-integrated writing and reported how learners evaluated those strategies.",
    implication: "Effective AI use is learnable. Differences in writing outcomes may reflect differences in strategic knowledge rather than differences in talent.",
    questions: ["What are three AI-use strategies I currently use?", "Which strategies reported in this study have I not tried?", "How would the writing of a strategic AI user differ from that of a less strategic AI user?"]
  },
  {
    id: 6,
    theme: "cognitive",
    year: "2026",
    title: "University Students' Perspectives on Integrating Generative AI into English Language Learning",
    journal: "International Journal of Evaluation and Research in Education",
    doi: "10.11591/ijere.v15i1.35223",
    participants: "University students engaged in English language learning",
    topic: "Cognitive and affective advantages and risks of using generative AI for English learning.",
    method: "The study examined university students' perspectives on the benefits and concerns associated with generative AI integration in English learning.",
    findings: "Students identified translation, time saving, task efficiency, and motivation as advantages. They also reported risks such as overreliance, reduced independent thinking, and the possibility of academic misconduct.",
    implication: "Learners already perceive the boundary between assistance and misconduct. The key criterion is whether the thinking, judgment, and responsibility behind an assignment remain the learner's own.",
    questions: ["What does reduced independent thinking look like in practice?", "Where is the line between legitimate AI support and academic misconduct?", "Which benefit or risk is most relevant to my own learning?"]
  },
  {
    id: 7,
    theme: "readiness",
    year: "2026",
    title: "Integrating Generative AI into English Learning: Insights from Korean University EFL Students",
    journal: "Journal of Asia TEFL",
    doi: "10.18823/asiatefl.2026.23.1.10.128",
    participants: "73 university students enrolled in general English courses",
    topic: "Actual AI tool use, technological readiness, perceived effects on English learning, and the need for AI literacy instruction.",
    method: "The study investigated which tools students used, how prepared they were to use them, and how they perceived AI support for English learning.",
    findings: "Students mainly used ChatGPT and Google Translate and valued real-time feedback and translation support. More than half reported that they had not received formal instruction on using AI for English learning.",
    implication: "Knowing how to access a tool is different from knowing how to use it for learning. Formal instruction or self-directed AI literacy development is necessary to close this gap.",
    questions: ["Where did I learn how to use AI for English learning?", "What would I most need to learn in an AI literacy course?", "After reading this collection, what should I change in my own AI use?"]
  }
];

const themeLabels = {
  perception: "Perception",
  classroom: "Classroom Integration",
  strategy: "Writing Strategies",
  cognitive: "Cognitive and Affective Outcomes",
  readiness: "AI Readiness"
};

function renderPapers(){
  const host = document.getElementById("paperList");
  if(!host) return;
  const search = document.getElementById("search");
  const filter = document.getElementById("filter");
  const query = search ? search.value.trim().toLowerCase() : "";
  const category = filter ? filter.value : "all";
  const filtered = papers.filter(p => category === "all" || p.theme === category).filter(p => {
    if(!query) return true;
    return [p.title,p.journal,p.doi,p.participants,p.topic,p.method,p.findings,p.implication,...p.questions].join(" ").toLowerCase().includes(query);
  });
  host.innerHTML = filtered.map(p => `
    <article class="paper-card">
      <div class="paper-num">Study ${p.id}</div>
      <div class="paper-body">
        <div class="meta"><span>${p.year}</span><span>${themeLabels[p.theme]}</span><span>${p.journal}</span></div>
        <h2>${p.title}</h2>
        <dl class="facts">
          <div><dt>DOI</dt><dd><a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${p.doi}</a></dd></div>
          <div><dt>Participants</dt><dd>${p.participants}</dd></div>
          <div><dt>Research Focus</dt><dd>${p.topic}</dd></div>
        </dl>
        <div class="paper-sections">
          <section><h3>How the Study Was Conducted</h3><p>${p.method}</p></section>
          <section><h3>Major Findings</h3><p>${p.findings}</p></section>
          <section><h3>Scholarly and Pedagogical Implication</h3><p>${p.implication}</p></section>
        </div>
        <details>
          <summary>Discussion Questions</summary>
          <ol>${p.questions.map(q => `<li>${q}</li>`).join("")}</ol>
        </details>
      </div>
    </article>
  `).join("");
  if(!filtered.length){
    host.innerHTML = '<p class="empty">No article records match your search.</p>';
  }
}

document.addEventListener("input", event => {
  if(event.target && event.target.id === "search") renderPapers();
});

document.addEventListener("change", event => {
  if(event.target && event.target.id === "filter") renderPapers();
});

renderPapers();
