class Storage {
  static STORAGE_KEY = "data";

  // Check if localStorage is available and usable
  static isAvailable() {
    try {
      const testKey = "__storage_test__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
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
  
  // Retrieve parsed storage data safely
  getStorageData() {
    try {
      const raw = localStorage.getItem(Storage.STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }
    catch {
      // Fallback if JSON is corrupted
      return {};
    }
  }

  // Save structured data into storage
  setStorageData(data) {
    if ( Storage.isAvailable() ) {
      try {
        localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error("Failed to save data to localStorage:", e);
      }
    } else {
      console.warn("localStorage is not available");
    }
  }
}

class Project extends Storage {
  constructor(name, description, date) {
    super();
    this.id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.date = date;
    this.done = false;
    this.tasks = {};
  }

  // Return a plain object snapshot of the project
  getData() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      date: this.date,
      done: this.done,
      tasks: this.tasks,
    };
  }

  // Save project data into storage (create or update)
  addData() {
    const data = this.getStorageData();
    
    data[this.id] = this.getData(); // always create/update
    this.setStorageData(data);
  }

  // Remove project data from storage
  removeData() {
    const data = this.getStorageData();

    if (!data[this.id]) {
      console.error(`Project with id {this.id} not found in storage`);
      return;
    }
    
    delete data[this.id];
    this.setStorageData(data);
  }

  // Add a task to this project
  addTask(task) {
    this.tasks[task.id] = task.getData();
    this.addData();
  }

  // Remove a task from this project
  removeTask(taskId) {
    if (this.tasks[taskId]) {
      delete this.tasks[taskId];
      this.addData();
    }
  }
}

class Task {
  constructor(name) {
    super();
    this.id = crypto.randomUUID();
    this.name = name;
    this.done = false;
  }

  // Return a plain object snapshot of the task
  getData() {
    return {
      id: this.id,
      name: this.name,
      done: this.done
    };
  }
}

export { isStorageAvailable, Project, Task };