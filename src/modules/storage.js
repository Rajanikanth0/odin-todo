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
  
  getStorageData() {
    let data = localStorage.getItem("data") || "{}";
    data = JSON.parse(data);

    return data;
  }

  setStorageData(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}

class Project extends Storage {
  constructor(
    name, description, date
  ) {
    super();

    this.name = name;
    this.description = description;
    this.date = date;
    // custom properties
    this.id = crypto.randomUUID();
    this.done = false;
    this.tasks = {};
  }

  // add constructor properties into an object
  getData = () => this;

  addData() {
    const data = this.getStorageData();
    data[this.id] = this.getData();

    this.setStorageData(data);
  }

  removeData() {
    const data = this.getStorageData();
    delete data[this.id];

    this.setStorageData(data);
  }
}

class Task extends Storage {
  constructor(name) {
    super();

    this.name = name;
    // custom properties
    this.id = crypto.randomUUID();
    this.done = false;
  }

  getData = () => this;

  addData(project) {
    const data = this.getStorageData();
    const projectData = data[project.id];
    projectData.tasks[this.id] = this.getData();

    this.setStorageData(data);
  }

  removeData(project) {
    const data = this.getStorageData();
    const projectData = data[project.id];
    delete projectData.tasks[this.id];

    this.setStorageData(data);
  }
}

export { Storage, Project, Task };