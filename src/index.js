import "./styles.css";
import {
  renderTodayTab,
  renderUpcomingTab,
  renderAnytimeTab,
  renderSomedayTab
} from "./tabs/tabs.js";

const sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("click", renderTab);

function renderTab(e) {
  const tab = e.target.closest("[data-label]");
  if (!tab) return;

  switch (tab.dataset.label) {
    case "today": renderTodayTab(); break;
    case "upcoming": renderUpcomingTab(); break;
    case "anytime": renderAnytimeTab(); break;
    case "someday": renderSomedayTab(); break;
  }
}