// function isStorageAvailable() {
//   try {
//     const x = "__storage_test__";
//     localStorage.setItem(x, x);
//     localStorage.removeItem(x);

//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException &&
//       e.name === "QuotaExceededError" &&
//       localStorage &&
//       localStorage.length !== 0
//     );
//   }
// }

class Storage {
  static isAvailable() {
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
  
  getData() {
    let data = localStorage.getItem("data") || "{}";
    data = JSON.parse(data);

    return data;
  }

  setData(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}

class Project extends Storage {
  constructor(
    name, description, date
  ) {
    this.name = name;
    this.description = description;
    this.date = date;
    // custom properties
    this.id = crypto.randomUUID();
    this.done = false;
    this.tasks = {};
  }

  addData(project) {
    const data = getStorageData();
    data[project.id] = project;

    setStorageData(data);
  }

  removeData(projectId) {
    const data = getStorageData();
    delete data[projectId];

    setStorageData(data);
  }
}

class Task extends Storage {
  addData(projectId, task) {
    const data = getStorageData();
    const project = data[projectId];
    project.tasks[task.id] = task;

    setStorageData(data);
  }

  removeData(projectId, taskId) {
    const data = getStorageData();
    const project = data[projectId];
    delete project.tasks[taskId];

    setStorageData(data);
  }
}

// function getStorageData() {
//   let data = localStorage.getItem("data") || "{}";
//   data = JSON.parse(data);

//   return data;
// }
// function setStorageData(data) {
//   localStorage.setItem("data", JSON.stringify(data));
// }

// function addTaskData(projectId, task) {
//   const data = getStorageData();
//   const project = data[projectId];
//   project.tasks[task.id] = task;

//   setStorageData(data);
// }

// function addProjectData(project) {
//   const data = getStorageData();
//   data[project.id] = project;

//   setStorageData(data);
// }

// function removeProjectData(projectId) {
//   const data = getStorageData();
//   delete data[projectId];

//   setStorageData(data);
// }

// function removeTaskData(projectId, taskId) {
//   const data = getStorageData();
//   const project = data[projectId];
//   delete project.tasks[taskId];

//   setStorageData(data);
// }

export { Storage, Project, Task };