import { renderTab } from "./utilities.js";

function renderTodayTab() {
  const tasks = [
    "Revise introduction",
    "Simplify slide layouts",
    "Review quarterly data with Olivia",
    "Print handouts for attendees",
  ];

  renderTab("Today", tasks);
}

function renderUpcomingTab() {
  const tasks = [
    "Revise introduction",
    "Simplify slide layouts",
    "Review quarterly data with Olivia",
    "Print handouts for attendees",
  ];

  renderTab("Upcoming", tasks);
}

function renderAnytimeTab() {
  const tasks = [
    "Revise introduction",
    "Simplify slide layouts",
    "Review quarterly data with Olivia",
    "Print handouts for attendees",
  ];

  renderTab("Anytime", tasks);
}

function renderSomedayTab() {
  const tasks = [
    "Revise introduction",
    "Simplify slide layouts",
    "Review quarterly data with Olivia",
    "Print handouts for attendees",
  ];

  renderTab("Someday", tasks);
}

export {
  renderTodayTab,
  renderUpcomingTab,
  renderAnytimeTab,
  renderSomedayTab
};