const STORAGE_KEY = "data";

// Check if localStorage is available and usable
const isStorageAvailable = function() {
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
const getStorageData = function() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }
  catch(e) {
    // Fallback if JSON is corrupted
    return {};
  }
}

// Save structured data into storage
const setStorageData = function(data) {
  if ( isStorageAvailable() ) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save data to localStorage:", e);
    }
  } else {
    console.warn("localStorage is not available");
  }
}

export { getStorageData, setStorageData };