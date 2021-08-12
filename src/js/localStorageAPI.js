const save = (key, value) => {
  try {
    const jsonForm = JSON.stringify(value);
    localStorage.setItem(key, jsonForm);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const jsonForm = localStorage.getItem(key);
    return jsonForm === null ? undefined : JSON.parse(jsonForm);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = key => {
  localStorage.removeItem(key)
}

export default {
  save,
  load,
  remove,
};