import "./styles.css";
import {
  addProjectData,
  addTaskData,
  isStorageAvailable,
  removeProjectData,
  removeTaskData
} from "./modules/storage.js";

function todo() {
  if ( !isStorageAvailable() ) return;

  const data1 = {
    name: "Setup Steam Family",
    description: "Use an account subscription benefits on many other devices with their own account",
    date: "2025-12-21",
  };
  data1.id = crypto.randomUUID();
  data1.done = false;
  data1.tasks = {};

  addProjectData(data1);

  const task1 = {
    name: "get info about steam family"
  };
  task1.id = crypto.randomUUID();
  task1.done = false;

  addTaskData(data1.id, task1);

  const data2 = {
    name: "Search for a hide-and-seek game",
    description: "the game should have a story with some stealth mode, could have some horror scenes for twist.",
    date: "2025-12-25",
  };
  data2.id = crypto.randomUUID();
  data2.done = false;
  data2.tasks = {};

  addProjectData(data2);

  const task2 = {
    name: "launch a game on two accounts at the same time."
  };
  task2.id = crypto.randomUUID();
  task2.done = false;

  addTaskData(data1.id, task2);

  // test to remove some data
  removeProjectData(data2.id);
  removeTaskData(data1.id, task1.id);
}

todo();