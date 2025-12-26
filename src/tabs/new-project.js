import { createElement, createElementAttributes } from "./utilities";

function getNavElement() {
  const cancelButton = createElement("li", {
    classes: ["cancel-button"],
    text: "Cancel"
  });
  const saveButton = createElement("li", {
    classes: ["save-button"],
    text: "Save"
  });

  const box = document.createDocumentFragment();
  box.append(cancelButton, saveButton);

  return box;
}

function getContentElement() {
  const form = createElement("form", { classes: ["new-projectForm"] });
  
}

function renderNewProjectTab() {
  const ul = document.querySelector(".content .nav-bar");
  const mainContent = document.querySelector(".main-content");

  mainContent.textContent = "";
  ul.textContent = "";
  
  ul.appendChild( getNavElement() );
  mainContent.appendChild( getContentElement() );
}

export { renderNewProjectTab };