
export default class {

  save (key, value) {
     try {
      const jsonForm = JSON.stringify(value);
      localStorage.setItem(key, jsonForm);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  }

  load (key) {
    try {
      const jsonForm = localStorage.getItem(key);
      return jsonForm === null ? undefined : JSON.parse(jsonForm);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  }

  remove (key) {
    localStorage.removeItem(key)
  }

}