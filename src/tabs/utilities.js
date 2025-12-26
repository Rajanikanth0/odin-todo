function createElement(tag, { classes = [], text = "" } = []) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;

  return element;
}

function createElementAttributes(tag, attrObject) {
  const element = createElement(tag);
  
  for (const [key, value] in attrObject) {
    element.setAttribute(key, value);
  }

  return element;
}

export { createElement, createElementAttributes };