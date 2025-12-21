function isStorageAvailable() {
  try {
    const x = "__storage_test__";
    localStorage.setItem(x, x);
    localStorage.removeItem(x);

    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      localStorage &&
      localStorage.length !== 0
    );
  }
}

function getStorageData() {
  let data = localStorage.getItem("data") || "{}";
  data = JSON.parse(data);

  return data;
}
function setStorageData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

function addTaskData(projectId, task) {
  const data = getStorageData();
  const project = data[projectId];
  project.tasks[task.id] = task;

  setStorageData(data);
}

function addProjectData(project) {
  const data = getStorageData();
  data[project.id] = project;

  setStorageData(data);
}

export { addProjectData, addTaskData, isStorageAvailable };