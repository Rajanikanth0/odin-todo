function createElement(tag, { classes = [], text = "" } = []) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;

  return element;
}

function renderTab(name, tasks) {
  const newButton = createElement("button", {
    classes: ["new-button"],
    text: "New"
  });

  const title = createElement("h2", { text: name });

  const getList = (tasks) => {
    const ul = createElement("ul");

    for (const task of tasks) {
      const li = createElement("li");
      
      const input = createElement("input");
      input.setAttribute("type", "checkbox");

      const label = createElement("div", { text: task });

      li.append(input, label);
      ul.appendChild(li);
    }

    return ul
  }

  const content = document.querySelector(".content");
  content.textContent = "";

  content.append(newButton, title, getList(tasks));
}

export { createElement, renderTab };