function createElement(tag, { classes = [], text = "" } = []) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;

  return element;
}

function getCheckList(tasks) {
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

export { createElement, getCheckList };