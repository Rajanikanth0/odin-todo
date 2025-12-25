import "./styles.css";
import { renderProjectTab } from "./tabs/project";

const projectTab = document.querySelector(".sidebar .project");
projectTab.addEventListener("click", renderProjectTab);