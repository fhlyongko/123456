
const links = document.getElementById('pageLinks');
for (const page of window.EBOOK_DATA.pages) {
  const a = document.createElement('a');
  a.href = `reader.html#page-${page.number}`;
  a.textContent = `${page.number}쪽`;
  a.title = page.title;
  links.appendChild(a);
}
