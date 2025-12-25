import { getStorageData } from "../modules/storage";
import { Project } from "../modules/project";
import { createElement } from "./utilities";

function getNavElement() {
  const newProjectButton = createElement("li", {
    classes: ["new-projectButton"],
    text: "New Project",
  });

  return newProjectButton;
}

function getContentElement() {
  const data = getStorageData();
  const box = document.createDocumentFragment();
  
  for (const projectData of Object.values(data)) {
    const project = Project.getProjectPrototype(projectData);

    const div = createElement("div", {
      classes: ["project"],
      text: project.getData().name
    });

    box.appendChild(div);
  }

  return box;
}

function renderProjectTab() {
  const ul = document.querySelector(".content .nav-bar");
  const mainContent = document.querySelector(".main-content");

  ul.textContent = "";
  mainContent.textContent = "";

  ul.appendChild( getNavElement() );
  mainContent.appendChild( getContentElement() );
}

export { renderProjectTab };