import "./styles.css";
import { Project, Task } from "./modules/project.js";
import { renderProjectTab } from "./tabs/project";

function addDataManually() {
  const project1 = new Project(
    "Setup Steam Family",
    "Use an account subscription benefits on many other devices with their own account",
    "2025-12-21"
  );

  project1.addData();

  const task1 = new Task("get info about steam family");
  project1.addTask(task1);

  const project2 = new Project(
    "Search for a hide-and-seek game",
    "the game should have a story with some stealth mode, could have some horror scenes for twist.",
    "2025-12-25",
  );

  project2.addData();

  const task2 = new Task(
    "launch a game on two accounts at the same time."
  );

  project1.addTask(task2);
}

// const sidebarProject = document.querySelector(".sidebar .project");
// sidebarProject.addEventListener("click", renderProjectTab);

// addDataManually();
// renderProjectTab();