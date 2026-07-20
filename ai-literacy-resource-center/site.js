const searchInput = document.querySelector("#searchInput");
const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll("[data-kind]")];
let activeFilter = "all";

function normalize(value) {
  return value.toLowerCase().trim();
}

function applyFilters() {
  const query = normalize(searchInput?.value || "");
  cards.forEach((card) => {
    const text = normalize(card.textContent + " " + (card.dataset.kind || ""));
    const matchesSearch = !query || text.includes(query);
    const matchesFilter = activeFilter === "all" || normalize(card.dataset.kind || "").includes(activeFilter);
    card.classList.toggle("hidden", !(matchesSearch && matchesFilter));
  });
}

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeFilter = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === filter));
    applyFilters();
  });
});
