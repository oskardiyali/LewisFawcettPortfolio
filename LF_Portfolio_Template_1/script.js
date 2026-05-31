const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const searchInput = document.getElementById("creditSearch");
const filterButtons = document.querySelectorAll(".filter");
const creditRows = document.querySelectorAll(".credit-row:not(.credit-head)");
let activeFilter = "all";

function updateCredits() {
  const query = searchInput.value.toLowerCase();

  creditRows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    const tags = row.dataset.tags || "";
    const matchesSearch = text.includes(query);
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);

    row.classList.toggle("is-hidden", !(matchesSearch && matchesFilter));
  });
}

if (searchInput) searchInput.addEventListener("input", updateCredits);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    updateCredits();
  });
});
