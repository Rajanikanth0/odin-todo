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

function addProjectData(project) {
  if ( !isStorageAvailable() ) return;

  let data = localStorage.getItem("data") || "{}";
  data = JSON.parse(data);

  data[project.id] = project;
  localStorage.setItem("data", JSON.stringify(data));
}

export { addProjectData };