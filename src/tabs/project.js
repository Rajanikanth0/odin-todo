function createElement(tag, { classes = [], text = "" } = []) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;

  return element;
}

function getNavElement() {
  const ul = createElement("ul");
  const newProjectButton = createElement("li", {
    classes: ["new-projectButton"],
    text: "New Project",
  });

  ul.appendChild(newProjectButton);
  return ul;
}

function getMainContentElement() {
  return createElement("div", { classes: ["main-content"] });
}

function renderProjectTab() {
  const content = document.querySelector(".content");
  content.append(getNavElement(), getMainContentElement());
}

export { renderProjectTab };