import "./styles.css";
import { addProjectData } from "./modules/storage.js";

const data1 = {
  name: "Setup Steam Family",
  description: "Use an account subscription benefits on many other devices with their own account",
  date: "2025-12-21",
};
const data2 = {
  name: "Search for a hide-and-seek game",
  description: "the game should have a story with some stealth mode, could have some horror scenes for twist.",
  date: "2025-12-25",
};

addProjectData(data1);
addProjectData(data2);