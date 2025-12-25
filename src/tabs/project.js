import { getStorageData } from "../modules/storage";
import { Project } from "../modules/project";

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

function getProjectElement() {
  const data = getStorageData();
  const projects = document.createDocumentFragment();
  
  for (const projectData of Object.values(data)) {
    const project = Project.getProjectPrototype(projectData);

    const div = createElement("div", {
      classes: ["project"],
      text: project.getData().name
    });

    projects.appendChild(div);
  }

  return projects;
}

function getMainContentElement() {
  const mainContent = createElement("div", { classes: ["main-content"] });
  mainContent.appendChild( getProjectElement() );

  return mainContent;
}

function renderProjectTab() {
  const content = document.querySelector(".content");
  content.append(getNavElement(), getMainContentElement());
}

export { renderProjectTab };