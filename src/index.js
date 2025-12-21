import "./styles.css";
import { addProjectData } from "./modules/storage.js";

const data1 = {
  name: "Setup Steam Family",
  description: "Use an account subscription benefits on many other devices with their own account",
  date: "2025-12-21",
};
data1.id = crypto.randomUUID();
data1.done = false;
data1.tasks = [];

addProjectData(data1);

const task1 = {
  name: "get info about steam family"
};
test1.id = crypto.randomUUID();
test1.done = false;

addTaskData(data1.id, task1);

const data2 = {
  name: "Search for a hide-and-seek game",
  description: "the game should have a story with some stealth mode, could have some horror scenes for twist.",
  date: "2025-12-25",
};

addProjectData(data2);

const task2 = {
  name: "launch a game on two accounts at the same time."
};
task2.id = crypto.randomUUID();
task2.done = false;

addTaskData(data1.id, task1);