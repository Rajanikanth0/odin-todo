import "./styles.css";
import { renderTodayTab } from "./tabs/today.js";

const sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("click", renderTab);

function renderTab(e) {
  const tab = e.target.closest("[data-label]");
  if (!tab) return;

  switch (tab.dataset.label) {
    case "today": renderTodayTab(); break;
  }
}