"use strict";
const input = document.querySelector('#search');
const theme = document.querySelector('#theme');
if (input && theme) {
  const papers = [...document.querySelectorAll('.paper')];
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().replace(/[’‘]/g, "'");
  function filter() {
    const words = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const paper of papers) {
      const text = normalize(paper.textContent);
      const match = (!theme.value || paper.dataset.theme === theme.value) && words.every(word => text.includes(word));
      paper.hidden = !match;
      if (match) count++;
    }
    document.querySelector('#count').textContent = `${count}편 / 전체 ${papers.length}편`;
    document.querySelector('#empty').hidden = count !== 0;
  }
  input.addEventListener('input', filter);
  theme.addEventListener('change', filter);
  document.querySelector('#reset').addEventListener('click', () => { input.value = ''; theme.value = ''; filter(); input.focus(); });
  window.addEventListener('pageshow', filter);
  filter();
}
let printDetails = [];
window.addEventListener('beforeprint', () => {
  printDetails = [...document.querySelectorAll('details')].map(el => [el, el.open]);
  printDetails.forEach(([el]) => { el.open = true; });
});
window.addEventListener('afterprint', () => { printDetails.forEach(([el, open]) => { el.open = open; }); });
