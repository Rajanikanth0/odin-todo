import { createElement } from "./utilities.js";

function getList(tasks) {
  const ul = createElement("ul");

  for (const task of tasks) {
    const li = createElement("li");
    
    const input = createElement("input");
    input.setAttribute("type", "checkbox");

    const label = createElement("div", { text: task });

    li.append(input, label);
    ul.appendChild(li);
  }

  return ul;
}

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

  const list = getList(tasks);

  // append elements
  const content = document.querySelector(".content");
  content.textContent = "";

  content.append(newButton, title, list);
}

export { renderTodayTab };