const posts = [
  ["Ministry of Education Press Release on Multicultural Education","2016-03-03",["Multicultural Education"],"https://blog.naver.com/yongjiklee00/220644270090"],
  ["Flipped-Classroom Wiki Page","2016-03-03",["TESOL","Educational Technology"],"https://blog.naver.com/yongjiklee00/220644268621"],
  ["What Is Team-Based Learning (TBL)?","2016-02-21",["Flipped Learning"],"https://blog.naver.com/yongjiklee00/220633951939"],
  ["Active Learning","2016-02-21",["Flipped Learning"],"https://blog.naver.com/yongjiklee00/220633950752"],
  ["Seven Useful ESL Websites Every Professional Teacher Should Bookmark","2016-02-21",["TESOL"],"https://blog.naver.com/yongjiklee00/220633947765"],
  ["Positioning Theory","2016-02-21",["Theory & Research"],"https://blog.naver.com/yongjiklee00/220633946882"],
  ["Finland’s Schools","2016-02-21",["Education"],"https://blog.naver.com/yongjiklee00/220633946058"],
  ["American Teacher","2016-02-08",["Talks & Media"],"https://blog.naver.com/yongjiklee00/220621653599"],
  ["Grounded Theory","2016-02-08",["Theory & Research","Talks & Media"],"https://blog.naver.com/yongjiklee00/220621651669"],
  ["Interview with Norman K. Denzin","2016-02-08",["Theory & Research","Talks & Media"],"https://blog.naver.com/yongjiklee00/220621651186"],
  ["The Danger of a Single Story","2016-02-08",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220621650566"],
  ["Stress and Education","2016-02-08",["Education"],"https://blog.naver.com/yongjiklee00/220621650148"],
  ["Critical Race Theory: Understanding the Nature of Race in America","2016-02-08",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220621649608"],
  ["Teaching Vocabulary to English Language Learners","2016-01-21",["TESOL"],"https://blog.naver.com/yongjiklee00/220603915695"],
  ["Helping ELL Newcomers: What Students Need to Know","2016-01-21",["TESOL"],"https://blog.naver.com/yongjiklee00/220603914283"],
  ["Myths about Bilingual Education","2016-01-21",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220603913989"],
  ["ESOL Research Report","2015-12-14",["TESOL","Theory & Research"],"https://blog.naver.com/yongjiklee00/220568397862"],
  ["Radical Constructivism (구성주의)","2015-12-14",["Theory & Research","Talks & Media"],"https://blog.naver.com/yongjiklee00/220568396548"],
  ["Flipped Learning in Korea (한국 거꾸로 학습·거꾸로 교실)","2015-12-08",["Flipped Learning"],"https://blog.naver.com/yongjiklee00/220562640258"],
  ["Flipping the ESL Classroom: Blog Ideas with YouTube Video","2015-11-01",["Flipped Learning","TESOL"],"https://blog.naver.com/yongjiklee00/220525519713"],
  ["Videos for the Flipped Classroom","2015-10-28",["Flipped Learning","Talks & Media"],"https://blog.naver.com/yongjiklee00/220521787119"],
  ["The SIOP Model for Teaching English Learners: Lesson Delivery","2015-10-28",["TESOL"],"https://blog.naver.com/yongjiklee00/220521783163"],
  ["Student-Centered Learning in Twenty-First-Century Education","2015-10-28",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220521779455"],
  ["Technology for TESOL","2015-10-11",["Educational Technology","TESOL"],"https://blog.naver.com/yongjiklee00/220505259066"],
  ["ISTE Standards for Teachers","2015-10-11",["Educational Technology"],"https://blog.naver.com/yongjiklee00/220505258889"],
  ["Pedro Noguera: Are We Failing Our Students?","2015-10-11",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220505258664"],
  ["The SIOP Model","2015-10-11",["TESOL"],"https://blog.naver.com/yongjiklee00/220505258470"],
  ["Podcasting for the Flipped Classroom (팟캐스트)","2015-10-11",["Flipped Learning","Educational Technology"],"https://blog.naver.com/yongjiklee00/220505258381"],
  ["Shaping a Vision of Academic Success for All Students","2015-09-22",["TESOL","Education"],"https://blog.naver.com/yongjiklee00/220488365456"],
  ["Differentiated Instruction by Carol Ann Tomlinson","2015-09-22",["Theory & Research"],"https://blog.naver.com/yongjiklee00/220488363985"],
  ["Flipped Learning with Prezi and Video","2015-09-22",["Flipped Learning","Educational Technology"],"https://blog.naver.com/yongjiklee00/220488363302"],
  ["Forbes: Flipped Learning in Korea","2015-06-27",["Flipped Learning"],"https://blog.naver.com/yongjiklee00/220403454147"],
  ["Shaping a Vision of Academic Success for All Students — Video","2015-06-27",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220402867925"],
  ["How to Fix a Broken School — TED Talk","2015-06-27",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220402867485"],
  ["Teaching Artists: Creative Ways to Teach English to Immigrant Children","2015-06-27",["TESOL","Multicultural Education"],"https://blog.naver.com/yongjiklee00/220402867015"],
  ["The Benefits of a Bilingual Brain — Mia Nacamulli","2015-06-27",["TESOL","Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220402866509"],
  ["What Makes Good Teaching and a Good Classroom? (세바시)","2015-06-27",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220402866385"],
  ["Future Classroom Network (미래교실 네트워크)","2015-06-20",["Flipped Learning","Educational Technology"],"https://blog.naver.com/yongjiklee00/220395727795"],
  ["Resources for the Flipped Classroom (거꾸로 교실 자료)","2015-06-20",["Flipped Learning"],"https://blog.naver.com/yongjiklee00/220395726515"],
  ["Education Reform in the United States and Finland","2015-04-11",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220327235005"],
  ["Education Reform Experts — TED Talks","2015-04-11",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220327234854"],
  ["Kenji Hakuta — Stanford University","2015-04-11",["TESOL","Talks & Media"],"https://blog.naver.com/yongjiklee00/220327234711"],
  ["Ofelia García: Reimagining Bilingualism in Twenty-First-Century Education","2015-01-14",["Multicultural Education","TESOL","Talks & Media"],"https://blog.naver.com/yongjiklee00/220239498608"],
  ["Culturally Responsive Teaching — Brown University","2015-01-13",["Multicultural Education"],"https://blog.naver.com/yongjiklee00/220238621777"],
  ["Bridging the Achievement Gap","2015-01-12",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237396357"],
  ["The Fraud of Multiculturalism","2015-01-12",["Multicultural Education"],"https://blog.naver.com/yongjiklee00/220237391372"],
  ["Deficit Theory — Dr. Sonia Nieto","2015-01-12",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237385356"],
  ["Christine Sleeter on Multicultural Education","2015-01-12",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237380310"],
  ["Democracy, Diversity, and Social Justice: Education in a Global Age","2015-01-12",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237376552"],
  ["Multicultural Education — Dr. James A. Banks","2015-01-12",["Multicultural Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237375681"],
  ["Sir Ken Robinson — TED Talk","2015-01-12",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237373960"],
  ["Must English Be the World’s Lingua Franca? (영어만 세계 공용어가 되어야 하는가?)","2015-01-12",["TESOL","Multicultural Education"],"https://blog.naver.com/yongjiklee00/220237371191"],
  ["Education for Whom? (누구를 위한 교육?)","2015-01-12",["Education","Talks & Media"],"https://blog.naver.com/yongjiklee00/220237100918"]
];

const themeMap = {
  "Multicultural Education": "multicultural",
  "TESOL": "tesol",
  "Flipped Learning": "flipped",
  "Educational Technology": "technology",
  "Theory & Research": "research",
  "Talks & Media": "video",
  "Education": "video"
};

const themeLabels = {
  multicultural: "Multicultural",
  tesol: "TESOL",
  flipped: "Flipped Learning",
  technology: "EdTech",
  research: "Research",
  video: "Media"
};

const list = document.querySelector("#archive-list");
const search = document.querySelector("#archive-search");
const filters = [...document.querySelectorAll(".filter")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

const chronologicalPosts = [...posts].reverse().sort((a, b) => a[1].localeCompare(b[1]));

const normalizedPosts = chronologicalPosts.map(([title, date, categories, url], index) => {
  const theme = themeMap[categories[0]] || "research";
  return {
    title,
    date,
    categories,
    url,
    index: index + 1,
    theme
  };
});

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function renderArchive() {
  const query = search.value.trim().toLocaleLowerCase();
  const filtered = normalizedPosts.filter(post => {
    const matchesTheme = activeFilter === "all" || post.theme === activeFilter;
    const haystack = `${post.title} ${post.categories.join(" ")}`.toLocaleLowerCase();
    return matchesTheme && haystack.includes(query);
  });

  list.innerHTML = filtered.map(post => {
    const primaryTheme = post.theme;
    return `
      <a class="archive-item" href="${post.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(post.title)} on Naver Blog">
        <span class="item-number">${String(post.index).padStart(2, "0")}</span>
        <span class="item-title">${escapeHTML(post.title)}</span>
        <span class="item-meta"><span>${themeLabels[primaryTheme]}</span><span>${post.date}</span></span>
        <span class="item-arrow" aria-hidden="true">↗</span>
      </a>`;
  }).join("");

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "resource" : "resources"}`;
  emptyState.hidden = filtered.length !== 0;
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    renderArchive();
  });
});

document.querySelectorAll("[data-theme-jump]").forEach(button => {
  button.addEventListener("click", () => {
    const requested = button.dataset.themeJump;
    const targetFilter = filters.find(filter => filter.dataset.filter === requested);
    targetFilter?.click();
    document.querySelector("#archive").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

search.addEventListener("input", renderArchive);
renderArchive();
