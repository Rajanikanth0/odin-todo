import "./styles.css";
import {
  Storage,
  Project,
  Task,
} from "./modules/storage.js";

function todo() {
  if ( !Storage.isAvailable() ) return;

  const project1 = new Project(
    "Setup Steam Family",
    "Use an account subscription benefits on many other devices with their own account",
    "2025-12-21"
  );

  project1.addData();

  const task1 = new Task("get info about steam family");
  task1.addData(project1);

  const project2 = new Project(
    "Search for a hide-and-seek game",
    "the game should have a story with some stealth mode, could have some horror scenes for twist.",
    "2025-12-25",
  );

  project2.addData();

  const task2 = new Task(
    "launch a game on two accounts at the same time."
  );

  task2.addData(project1);

  // test to remove some data
  project2.removeData();
  task1.removeData(project1);
}

todo();