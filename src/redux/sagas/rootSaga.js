import { takeLatest } from "redux-saga/effects";
import {
  handleCreateTask,
  handleDeleteTask,
  handleGetTask,
  handleGetTasks,
  handleUpdateTask,
} from "./handlers/user";
import {
  CREATE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  GET_TASKS_REQUEST,
  GET_TASK_REQUEST,
  DELETE_TASK_REQUEST,
} from "../ducks/task";

export function* watcherSaga() {
  yield takeLatest(GET_TASK_REQUEST, handleGetTask);
  yield takeLatest(GET_TASKS_REQUEST, handleGetTasks);
  yield takeLatest(CREATE_TASK_REQUEST, handleCreateTask);
  yield takeLatest(UPDATE_TASK_REQUEST, handleUpdateTask);
  yield takeLatest(DELETE_TASK_REQUEST, handleDeleteTask);
}
