import { call, put } from "redux-saga/effects";
import {
  requestGetTask,
  requestGetTasks,
  requestUpdateTask,
  requestCreateTask,
  requestDeleteTask,
} from "../requests/user";
import { deleteTask, setTask, setTasks } from "../../ducks/task";

export function* handleGetTask(action) {
  try {
    yield put(setTask(undefined));
    const response = yield call(requestGetTask, action.id);
    const { data } = response;
    yield put(setTask(data.data[0]));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetTasks(action) {
  try {
    const response = yield call(requestGetTasks, action.search);
    const { data } = response;
    yield put(setTasks(data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateTask(action) {
  try {
    const { navigate, url } = action;
    const response = yield call(requestCreateTask, action.task);
    if ((response.status === 201, navigate !== undefined)) {
      navigate(url);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateTask(action) {
  try {
    const { id, task, navigate, url } = action;
    const response = yield call(requestUpdateTask, id, task);
    if ((response.status === 200, navigate !== undefined)) {
      navigate(url);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteTask(action) {
  try {
    const response = yield call(requestDeleteTask, action.id);
    const { data } = response;
    yield put(deleteTask(data.data));
  } catch (error) {
    console.log(error);
  }
}
