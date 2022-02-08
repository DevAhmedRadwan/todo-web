import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export function requestGetTask(id) {
  return axios.get(API_URL + `tasks/?id=${id}`);
}

export function requestGetTasks(search) {
  let url = API_URL + `tasks/`;

  if (search) {
    url = API_URL + `tasks/?search=${search}`;
  }

  return axios.get(url);
}

export function requestCreateTask(task) {
  return axios.post(API_URL + `tasks/`, task);
}

export function requestUpdateTask(id, task) {
  return axios.put(API_URL + `tasks/${id}`, task);
}

export function requestDeleteTask(id) {
  return axios.delete(API_URL + `tasks/${id}`);
}
