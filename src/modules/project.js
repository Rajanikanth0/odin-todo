import { handleData } from "./save.js";

function setData(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  handleData(data);
}

export { setData };