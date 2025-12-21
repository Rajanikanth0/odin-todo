import "./styles.css";
import { setData } from "./modules/project.js";

const form = document.querySelector("form");
form.addEventListener("submit", setData);

// const data1 = {
//   name: "Setup Steam Family",
//   description: "Use an account subscription benefits on many other devices with their own account",
//   date: "2025-12-21",
// };
// const data2 = {
//   name: "Search for a hide-and-seek game",
//   description: "the game should have a story with some stealth mode, could have some horror scenes for twist.",
//   date: "2025-12-25",
// };