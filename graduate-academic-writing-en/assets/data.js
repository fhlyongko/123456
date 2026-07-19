const base="../materials/";

const modules=[
  {w:1,c:"writing",t:"A Comprehensive Map of English Research Article Writing",g:"Course orientation, the purpose of academic English, textual alignment, and the reviewer-oriented structure of research articles.",act:"Write one sentence that connects your research topic to purpose, question, method, and contribution.",as:"Prepare a 150-word statement describing one research topic, its purpose, and its intended readership.",ck:["Is the topic expressed in one clear sentence?","Are purpose, question, method, and contribution connected?","Does the writing prioritize clarity over unnecessary complexity?"],f:"week1-academic-writing-summary-40slides-redesign.pdf"},
  {w:2,c:"planning",t:"Research Planning and Problem Formulation",g:"The planning stage of a paper, the introduction funnel, and the transformation of broad interest into a researchable problem.",act:"Narrow a general interest into a research problem and develop why, what, and how questions.",as:"Write a research planning memo that includes interest, problem, purpose, relevant literature, and research questions.",ck:["Has the interest been narrowed into a specific research problem?","Does the background-gap-purpose sequence appear clearly?","Can the research question be answered through evidence and method?"],f:"week2-research-planning-academic-writing-40slides-redesign.pdf"},
  {w:3,c:"planning",t:"Theoretical Framing and Literature Review",g:"Theoretical foundations, literature organization, and the development of a submission-oriented research profile.",act:"Compare five previous studies and identify similarities, differences, and gaps in a matrix.",as:"Submit a literature review matrix and three explicit research gap statements.",ck:["Does the theory support the research question?","Does the review compare and contrast rather than merely summarize?","Is the research gap stated explicitly?"],f:"week3-theory-literature-submission-40slides.pdf"},
  {w:4,c:"writing",t:"Methodology, Results, Discussion, and Conclusion",g:"The distinction between methodology and methods, the presentation of findings, and the rhetorical functions of discussion and conclusion sections.",act:"Describe your method in terms of philosophical assumptions, data collection, and analytic procedure.",as:"Draft one page of methodology or two results paragraphs.",ck:["Are philosophical rationale and practical procedures distinguished?","Do results explain meaning rather than repeat a table?","Does the discussion reconnect findings to the research question?"],f:"week4-methodology-results-discussion-40slides.pdf"},
  {w:5,c:"writing",t:"Checking Paper Sections from a Reviewer Perspective",g:"Reviewer expectations, section-level functions, and diagnostic checklists for manuscript improvement.",act:"Evaluate an abstract or introduction using a reviewer checklist.",as:"Write a reviewer memo with three strengths and three areas for revision.",ck:["Are purpose, methods, findings, and contribution visible in the abstract?","Are question, method, results, and discussion aligned?","Is the contribution clear for the target readership?"],f:"week5-reviewer-view-paper-sections-40slides.pdf"},
  {w:6,c:"ethics",t:"Research Initiation, Procedures, IRB, and Ethics",g:"Why research is conducted, how procedures are documented, and how ethical writing begins before data collection.",act:"Identify risks related to participants, data collection, privacy, and consent.",as:"Prepare a research procedure table and an initial ethics checklist.",ck:["Are recruitment, consent, and data collection sequenced clearly?","Does the plan include privacy and data storage procedures?","Has the researcher role and potential risk been examined?"],f:"week6-research-problem-procedure-ethics-40slides.pdf"},
  {w:7,c:"writing",t:"Writing from Methodology to Conclusion",g:"Quantitative, qualitative, and mixed methods; visualization of findings; and writing functions across results, discussion, and conclusion sections.",act:"Use one table or figure to write a results paragraph and a discussion paragraph.",as:"Submit five interpretive results sentences and one discussion paragraph.",ck:["Do results sentences describe key patterns accurately?","Does the discussion connect findings to previous research?","Does the conclusion present contribution and limitations without overstatement?"],f:"week7-methodology-results-writing-functions-40slides.pdf"},
  {w:8,c:"planning",t:"Midterm Alignment Workshop",g:"Integration of Weeks 1-7 outputs, alignment review, and a concrete feedback-based revision plan.",act:"Exchange research questions, literature review notes, and methodology drafts for feedback.",as:"Submit a midterm revision plan and a realistic schedule for the next three weeks.",ck:["Do the outputs form one coherent paper trajectory?","Has feedback been converted into specific revision steps?","Is the writing schedule realistic?"],f:""},
  {w:9,c:"writing",t:"Visual Materials, Recommendations, Limitations, and Academic Language",g:"Referencing tables and figures, writing recommendations and limitations, and using cautious academic language.",act:"Write three sentences referring to a table or figure and two limitation sentences.",as:"Submit one visual-material paragraph and one limitation paragraph.",ck:["Are tables and figures referenced by number and key pattern?","Are limitations presented in a balanced manner?","Are causal claims and cautious expressions distinguished?"],f:"week9-visual-references-recommendations-academic-language-40slides.pdf"},
  {w:10,c:"writing",t:"Academic Research Writing Handbook",g:"A synthesis of core writing principles, the full writing journey, and the relationship among clarity, accuracy, and evidence.",act:"Revise three vague sentences from your draft for greater precision.",as:"Submit a before-and-after revision of one abstract or introduction paragraph.",ck:["Are sentences concise and unambiguous?","Is each claim connected to evidence?","Can you explain why the revised version is stronger?"],f:"week10-academic-writing-handbook-summary-40slides.pdf"},
  {w:11,c:"planning",t:"From Research Ideas to Research Reports",g:"Connecting the research process to writing, citation-based argumentation, and transforming reports into article-style claims.",act:"Revise citation sentences from summary-based writing to argument-oriented writing.",as:"Submit five literature citation sentences and one research gap paragraph.",ck:["Are citations used as evidence in an argument?","Is the gap connected to limitations in previous studies?","Has report-style description been converted into article-style argument?"],f:"week11-academic-writing-research-process-40slides.pdf"},
  {w:12,c:"career",t:"Article Analysis and Academic Career Documents",g:"Analyzing research article structure and contribution while preparing cover letters, CVs, and research statements.",act:"Reverse-engineer the gap, method, findings, and contribution of one sample article.",as:"Draft an academic bio and the opening paragraph of a cover letter.",ck:["Can you distinguish the gap, method, findings, and contribution?","Does the bio present field and strengths concisely?","Does the cover letter clarify purpose and fit?"],f:"week12-academic-career-writing-30slides.pdf"},
  {w:13,c:"writing",t:"Writing Quantitative Research Articles in English",g:"Standard paper structure, title and abstract templates, and recurring patterns in methods, results, and discussion sections.",act:"Condense your study into a five-sentence abstract structure.",as:"Submit three title versions and a structured abstract draft.",ck:["Does the title show method, population, and key variables?","Does the abstract follow background-gap-purpose-method-contribution?","Are statistical expressions accurate and appropriately cautious?"],f:"week13-quantitative-research-writing-40slides.pdf"},
  {w:14,c:"ethics",t:"Research Ethics and AI Ethics",g:"Ethical principles, fabrication, falsification, plagiarism, duplicate publication, and transparent AI use.",act:"Write an AI-use disclosure statement appropriate to your research context.",as:"Submit a draft statement on research ethics and AI-assisted writing.",ck:["Can you distinguish fabrication, falsification, plagiarism, and duplicate publication?","Are AI use and verification responsibility transparent?","Are privacy and data protection standards included?"],f:"week14-research-ai-ethics-39slides.pdf"},
  {w:15,c:"career",t:"Researcher Growth and Scholarly Development",g:"Reflective growth, research dissemination, and a sustainable researcher development roadmap.",act:"Assemble a growth portfolio from the semester's major writing outputs.",as:"Submit a final portfolio and a six-month researcher development roadmap.",ck:["Are the outputs organized as a coherent portfolio?","Are dissemination, submission, and presentation plans concrete?","Are the next learning goals realistic and measurable?"],f:"week15-researcher-growth-20slides.pdf"}
];

const tools=[
  {h:"Research Question Builder",p:"A concise frame for transforming a broad research interest into answerable research questions.",i:["Topic: I am interested in examining ...","Problem: However, little is known about ...","Purpose: This study aims to investigate ...","Question: How does ... influence ...?","Question: To what extent does ... predict ...?"]},
  {h:"Five-Sentence Abstract Frame",p:"A practical structure for drafting an abstract with a clear rhetorical sequence.",i:["Background: Recent research has emphasized ...","Gap: Nevertheless, limited attention has been paid to ...","Objective: This study investigates ...","Methods: Data were collected from ... and analyzed using ...","Contribution: The findings suggest that ..."]},
  {h:"Reviewer-Oriented Checklist",p:"A pre-submission checklist for diagnosing manuscript clarity, alignment, and contribution.",i:["Is the research gap explicit?","Are the research questions aligned with the methods?","Are the results connected to the research questions?","Does the discussion explain contribution and limitations?"]},
  {h:"Ethics and AI Disclosure Frame",p:"Sentence frames for research ethics, participant protection, and transparent AI-assisted writing.",i:["Participants provided informed consent before data collection.","The study followed institutional ethical guidelines.","AI tools were used only for language revision or brainstorming as permitted.","All claims, analyses, and citations were verified by the author."]}
];

const label={planning:"Research Design",writing:"Paper Writing",ethics:"Ethics and AI",career:"Researcher Development"};
const stateKey="graduate-writing-en-progress-v1";
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
    article.innerHTML=`<div class="unit"><strong>${m.w}</strong><span>Week</span></div><div class="week-main"><h3>${m.t}</h3><p>${m.g}</p><div class="concepts"><span>${label[m.c]}</span><span>${m.act}</span></div><p><b>Task</b> ${m.as}</p><ul class="checklist">${m.ck.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="week-side">${m.f?`<a class="btn primary" href="${base+m.f}" download>Download Material</a>`:`<span class="btn">Workshop</span>`}<label class="done"><input type="checkbox" data-week="${m.w}" ${completed.has(m.w)?"checked":""}> Completed</label></div>`;
    host.appendChild(article);
  });
  if(!host.children.length)host.innerHTML='<p class="section-lead">No modules match your search.</p>';
  updateProgress();
}

function renderTools(){
  const host=document.getElementById("toolList");
  if(!host)return;
  host.innerHTML=tools.map((tool,index)=>`<article class="tool"><h3>${tool.h}</h3><p>${tool.p}</p><ul>${tool.i.map(x=>`<li>${x}</li>`).join("")}</ul><button class="copy" data-index="${index}">Copy Template</button></article>`).join("");
}

function renderDownloads(){
  const host=document.getElementById("downloadGrid");
  if(!host)return;
  host.innerHTML=modules.filter(m=>m.f).map(m=>`<article class="download"><span class="tag">Week ${m.w} | ${label[m.c]}</span><h3>${m.t}</h3><p>${m.g}</p><a class="btn primary" href="${base+m.f}" download>Download Material</a></article>`).join("");
}

function updateProgress(){
  const bar=document.getElementById("bar");
  const progressText=document.getElementById("progressText");
  if(bar)bar.style.width=(completed.size/modules.length*100)+"%";
  if(progressText)progressText.textContent=`${completed.size} / ${modules.length} completed`;
  localStorage.setItem(stateKey,JSON.stringify([...completed]));
}

document.addEventListener("input",event=>{
  if(event.target && event.target.id==="search")renderWeeks();
});

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
  const text=tool.h+"\n\n"+tool.i.join("\n");
  try{
    await navigator.clipboard.writeText(text);
    button.textContent="Copied";
    setTimeout(()=>button.textContent="Copy Template",1400);
  }catch(_error){
    button.textContent="Copy Failed";
    setTimeout(()=>button.textContent="Copy Template",1400);
  }
});

renderWeeks();
renderTools();
renderDownloads();
