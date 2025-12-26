import { createElement, getCheckList } from "./utilities.js";

function renderTodayTab() {
  const newButton = createElement("button", {
    classes: ["new-button"],
    text: "New"
  });

  const title = createElement("h2", { text: "Today" });

  const tasks = [
    "Revise introduction",
    "Simplify slide layouts",
    "Review quarterly data with Olivia",
    "Print handouts for attendees",
  ];

  const list = getCheckList(tasks);

  // append elements
  const content = document.querySelector(".content");
  content.textContent = "";

  content.append(newButton, title, list);
}

export { renderTodayTab };