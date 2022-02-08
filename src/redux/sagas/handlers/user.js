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
    // set task with undefined so it doesn't show old/wrong data
    yield put(setTask(undefined));
    // requesting the task
    const response = yield call(requestGetTask, action.id);
    // set the new task state
    const { data } = response;
    yield put(setTask(data.data[0]));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetTasks(action) {
  try {
    // requesting the tasks
    const response = yield call(requestGetTasks, action.search);
    const { data } = response;
    // setting the new tasks state
    yield put(setTasks(data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateTask(action) {
  try {
    const { navigate, url } = action;
    // requesting to create a task
    const response = yield call(requestCreateTask, action.task);
    // if task created and we have a navigate object and url
    // then navigate to the given url
    if (response.status === 201 && navigate !== undefined && url) {
      navigate(url);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateTask(action) {
  try {
    const { id, task, navigate, url } = action;
    // requesting to update a task
    const response = yield call(requestUpdateTask, id, task);
    // if task created and we have a navigate object and url
    // then navigate to the given url
    if (response.status === 200 && navigate !== undefined && url) {
      navigate(url);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteTask(action) {
  try {
    // requesting to delete a task
    const response = yield call(requestDeleteTask, action.id);
    const { data } = response;
    // removing the deleted tasks from the tasks state
    yield put(deleteTask(data.data));
  } catch (error) {
    console.log(error);
  }
}
