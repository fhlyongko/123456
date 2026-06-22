const data = window.ACHIEVEMENT_DATA;
const moduleGrid = document.querySelector("#moduleGrid");
const publicBody = document.querySelector("#publicBody");

document.querySelector("#totalFiles").textContent = data.totalFiles.toLocaleString("ko-KR");
document.querySelector("#totalSize").textContent = `${Math.round(data.totalSizeMB).toLocaleString("ko-KR")}MB`;
document.querySelector("#categoryCount").textContent = data.categories.length.toLocaleString("ko-KR");

const allTypes = new Set();
data.categories.forEach((category) => category.types.forEach((item) => allTypes.add(item.type)));
document.querySelector("#typeCount").textContent = allTypes.size.toLocaleString("ko-KR");

function moduleDescription(name) {
  if (name.includes("연구") && !name.includes("26년")) return "논문 원본, 게재 증빙, KCI/Scopus 등재, 게재료 및 연구성과 자료가 반영된 영역입니다.";
  if (name.includes("학술회의")) return "국내외 학술회의 발표, 출장, 결과보고, 발표자료 관련 증빙이 반영된 영역입니다.";
  if (name.includes("전문저서")) return "전문저서 관련 PDF 증빙 자료가 반영된 영역입니다.";
  if (name.includes("교육")) return "교수방법, 수업개선, AI 디지털 혁신수업 등 교육역량 증빙이 반영된 영역입니다.";
  if (name.includes("봉사")) return "교내외 봉사활동 및 학술봉사 관련 증빙이 반영된 영역입니다.";
  if (name.includes("산학")) return "자문, 특강, 산학협력 활동과 외부 교육 기여 자료가 반영된 영역입니다.";
  if (name.includes("26년")) return "2026년 논문 게재 실적과 교연비 연구실적 증빙자료가 통합 반영된 영역입니다.";
  return "전체 실적 종합자료가 반영된 영역입니다.";
}

function typeChips(category) {
  return category.types
    .map((item) => `<span class="chip">${item.type} ${item.count}</span>`)
    .join("");
}

moduleGrid.innerHTML = data.categories.map((category) => `
  <article class="module-card">
    <span class="count">${category.count}건</span>
    <h3>${category.name}</h3>
    <p>${moduleDescription(category.name)}</p>
    <div class="type-row">${typeChips(category)}</div>
  </article>
`).join("");

publicBody.innerHTML = data.categories.map((category) => `
  <tr>
    <td><strong>${category.name}</strong></td>
    <td>${category.count.toLocaleString("ko-KR")}건</td>
    <td>${category.sizeMB.toLocaleString("ko-KR")}MB</td>
    <td>${typeChips(category)}</td>
  </tr>
`).join("");
