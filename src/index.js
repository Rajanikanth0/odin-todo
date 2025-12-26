import "./styles.css";

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

function renderTab(e) {
  const tab = e.target.closest("[data-label]");
  if (!tab) return;

  content.textContent = "";
  console.log(tab.dataset.label);
}

sidebar.addEventListener("click", renderTab);