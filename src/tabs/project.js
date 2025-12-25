import { getStorageData } from "../modules/storage";
import { Project } from "../modules/project";

function createElement(tag, { classes = [], text = "" } = []) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;

  return element;
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

function renderProjectTab() {
  const ul = document.querySelector(".content .nav-bar");
  const mainContent = document.querySelector(".main-content");

  ul.textContent = "";
  mainContent.textContent = "";

  const newProjectButton = createElement("li", {
    classes: ["new-projectButton"],
    text: "New Project",
  });

  ul.appendChild(newProjectButton);
  mainContent.appendChild( getProjectElement() );
}

export { renderProjectTab };